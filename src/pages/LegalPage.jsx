import SectionHeader from '../components/ui/SectionHeader';
import { legalContent, LEGAL_LAST_UPDATED } from '@/config/legalContent';

export default function LegalPage({ title }) {
  const sections = legalContent[title] || [];

  return (
    <div className="pt-24 pb-20 min-h-[70vh]">
      <div className="container px-4 md:px-6 max-w-3xl">
        <SectionHeader title={title} centered={false} />
        <p className="text-sm text-muted-foreground -mt-8 mb-10">Last updated: {LEGAL_LAST_UPDATED}</p>

        {sections.length === 0 ? (
          <p className="text-muted-foreground">This document will be available soon.</p>
        ) : (
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-xl font-bold mb-3">{section.heading}</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {section.body.map((item, i) =>
                    Array.isArray(item) ? (
                      <ul key={i} className="list-disc pl-5 space-y-1.5">
                        {item.map((li, j) => (
                          <li key={j}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i}>{item}</p>
                    )
                  )}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
