import { siteInfo } from '@/config/site';

// Starter legal content for Smart Computer Academy.
// NOTE: This is a reasonable general-purpose draft, not legal advice.
// Please have it reviewed by a professional before relying on it.
export const LEGAL_LAST_UPDATED = '9 July 2026';

const contact = `${siteInfo.name}, ${siteInfo.address.full}. Phone: ${siteInfo.phone}. Email: ${siteInfo.email}.`;

export const legalContent = {
  'Privacy Policy': [
    {
      heading: 'Introduction',
      body: [
        `${siteInfo.name} ("we", "us", "our") operates this website. This Privacy Policy explains what information we collect, how we use it, and your choices. By using this website or submitting an enquiry, you agree to this policy.`,
      ],
    },
    {
      heading: 'Information We Collect',
      body: [
        'When you submit an admission, franchise, or contact enquiry, we may collect:',
        [
          'Your name and, where relevant, guardian name',
          'Contact details (mobile, WhatsApp number, email address)',
          'Location details (address, city, state, pincode)',
          'Enquiry details (course of interest, preferred batch/timing, qualification, date of birth)',
          'For franchise enquiries only: institute and business details you choose to share',
          'Any message or additional information you provide',
        ],
      ],
    },
    {
      heading: 'How We Use Your Information',
      body: [
        'We use your information only to respond to your enquiry, process admissions or franchise requests, provide the services you ask for, and contact you about your enquiry. We do not sell your personal information to third parties.',
      ],
    },
    {
      heading: 'How Your Data Is Stored',
      body: [
        'Enquiry data submitted through our forms is recorded in our private Google Sheets and/or received via WhatsApp/email, accessible only to authorised staff. We take reasonable measures to protect your information but no method of transmission over the internet is 100% secure.',
      ],
    },
    {
      heading: 'Sensitive Information',
      body: [
        'Please share sensitive identity documents (such as Aadhaar) only if specifically required and only through secure channels. Do not include sensitive numbers in public messages. You may request that we delete such information at any time.',
      ],
    },
    {
      heading: 'Your Rights',
      body: [
        `You may request access to, correction of, or deletion of your personal information by contacting us. To do so, reach out using the details below.`,
      ],
    },
    {
      heading: 'Contact',
      body: [`For any privacy questions or requests: ${contact}`],
    },
  ],

  'Terms of Service': [
    {
      heading: 'Acceptance of Terms',
      body: [
        `By accessing this website and enrolling in our courses or franchise programme, you agree to these Terms of Service. If you do not agree, please do not use our services.`,
      ],
    },
    {
      heading: 'Our Services',
      body: [
        `${siteInfo.name} provides computer training courses and franchise opportunities. Course content, duration, fees, batch timings, and availability may change without prior notice.`,
      ],
    },
    {
      heading: 'Enrollment & Fees',
      body: [
        'Enrollment is confirmed only after completion of the admission process and applicable fee payment. Fees shown on the website are indicative; please confirm current fees at our centre before enrolling.',
      ],
    },
    {
      heading: 'Certificates',
      body: [
        'Certificates are awarded on successful completion of a course and its assessments, subject to attendance and academic requirements.',
      ],
    },
    {
      heading: 'Placement Assistance',
      body: [
        'We provide placement assistance, guidance, and interview preparation to help students. However, we do not guarantee employment, salary, or specific job outcomes.',
      ],
    },
    {
      heading: 'Intellectual Property',
      body: [
        'All content on this website — including text, logos, and study material — belongs to us and may not be copied or reused without permission.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      body: [
        'We are not liable for any indirect or consequential loss arising from the use of this website. Our services are provided on an "as is" basis.',
      ],
    },
    {
      heading: 'Governing Law',
      body: [
        'These terms are governed by the laws of India, and disputes are subject to the jurisdiction of the courts at Bhagalpur, Bihar.',
      ],
    },
    {
      heading: 'Contact',
      body: [contact],
    },
  ],

  'Refund Policy': [
    {
      heading: 'Overview',
      body: [
        `This Refund Policy applies to fees paid to ${siteInfo.name}. Please read it before making any payment.`,
      ],
    },
    {
      heading: 'Registration / Admission Fees',
      body: [
        'Registration and admission fees are generally non-refundable, as they cover administrative and seat-reservation costs.',
      ],
    },
    {
      heading: 'Course Fees',
      body: [
        'Requests for refund of course fees, if any, must be made before classes begin. Once classes have started, course fees are non-refundable. Any approved refund may be subject to deductions for administrative charges and materials already provided.',
      ],
    },
    {
      heading: 'How to Request a Refund',
      body: [
        `To request a refund, contact us with your name, enrolled course, and payment details. Approved refunds are processed within a reasonable time to the original payment method.`,
      ],
    },
    {
      heading: 'Contact',
      body: [contact],
    },
  ],
};
