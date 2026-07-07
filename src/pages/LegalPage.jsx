import SectionHeader from '../components/ui/SectionHeader';

export default function LegalPage({ title }) {
  return (
    <div className="pt-24 pb-20 min-h-[70vh]">
      <div className="container px-4 md:px-6 max-w-4xl">
        <SectionHeader title={title} centered={false} />
        <div className="prose dark:prose-invert max-w-none text-muted-foreground">
          <p>
            This page is currently under construction. Please check back later for the complete {title.toLowerCase()}.
          </p>
          <p>
            For any immediate inquiries, please visit our Contact page or reach out to us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
