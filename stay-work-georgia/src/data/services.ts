import type { Service } from '../types'
import { IconWork, IconHome, IconUser, IconBriefcase, IconBuilding, IconFile } from '../icons'

export const SERVICES: Service[] = [
  {
    key: 'work-permit',
    title: 'Work Permit Support',
    short: 'Guidance for foreign nationals applying for work permits in Georgia.',
    description:
      'We help foreigners navigate the work permit process step by step, including document review, filing guidance and follow-up.',
    whatsIncluded: [
      { title: 'Application Readiness Check', desc: 'We review your situation and confirm whether you qualify before any documents are submitted. This saves time and prevents unnecessary rejections.' },
      { title: 'Document Review & Corrections', desc: 'All required papers are checked for errors and gaps before submission to authorities. We ensure every document meets current Georgian requirements.' },
      { title: 'Filing Guidance', desc: 'Step-by-step instructions and direct support throughout the submission process. You will never have to figure out what to do next on your own.' },
      { title: 'Status Follow-up', desc: 'We monitor your application and keep you informed of every update and next step. Any requests from authorities are handled promptly on your behalf.' },
    ],
    detailedId: 'service-work-permit',
    icon: IconWork,
  },
  {
    key: 'residence-permit',
    title: 'Residence Permit Support',
    short: 'Residence through employment or entrepreneurship with reliable legal support.',
    description:
      'From initial application to renewals and updates, we prepare the right set of documents and coordinate the process with clarity.',
    whatsIncluded: [
      { title: 'Application Package Preparation', desc: 'We compile and verify the complete document set required for your residence permit. Every item is checked for accuracy before anything is submitted.' },
      { title: 'Renewals & Change Support', desc: 'Timely renewal management and assistance when your status or circumstances change. We track expiry dates so you are always notified well in advance.' },
      { title: 'Legal Documentation Coordination', desc: 'All official papers are prepared in the correct format and language as required. We liaise with relevant offices to avoid back-and-forth delays.' },
      { title: 'Deadline Tracking', desc: 'We keep track of critical dates so your permit never lapses unexpectedly. Automated reminders and personal alerts ensure nothing is missed.' },
    ],
    detailedId: 'service-residence-permit',
    icon: IconHome,
  },
  {
    key: 'ie-registration',
    title: 'IE Registration',
    short: 'Support for individual entrepreneurs (IE) registration for foreigners in Georgia.',
    description:
      'We assist you with IE registration and small-business setup essentials, including practical coordination and guidance.',
    whatsIncluded: [
      { title: 'IE Registration Preparation', desc: 'Full support gathering and submitting all documents needed to register as an individual entrepreneur. We handle the administrative side so you can focus on your work.' },
      { title: 'Legal Address Coordination', desc: 'We help you secure a valid legal address required for the registration process. This is often one of the first hurdles for newcomers, and we make it straightforward.' },
      { title: 'Tax & Accounting Coordination', desc: 'Introduction to basic tax obligations and connection to trusted accounting partners. We make sure you start compliant from day one.' },
      { title: 'Step-by-step Guidance', desc: 'Clear instructions at every stage so you always know exactly what comes next. We are available to answer questions throughout the entire process.' },
    ],
    detailedId: 'service-ie-registration',
    icon: IconUser,
  },
  {
    key: 'business-setup',
    title: 'Business Setup',
    short: 'Full support when opening and structuring your business presence in Georgia.',
    description:
      'We provide end-to-end support for basic business setup so you can focus on your work while we handle the legal paperwork.',
    whatsIncluded: [
      { title: 'Business Formation Guidance', desc: 'Expert advice on choosing the right legal entity structure for your specific goals. We explain the pros and cons of each option in plain language.' },
      { title: 'Document Checklist & Preparation', desc: 'We create a tailored document list and help you gather everything needed for registration. No guesswork — just a clear, actionable plan.' },
      { title: 'Process Planning from Day One', desc: 'A clear roadmap of every step, timeline, and responsibility from the very start. You always know what is happening and what to expect next.' },
      { title: 'Practical Follow-up', desc: 'We stay engaged after setup to help resolve any issues that arise post-registration. Our support does not stop once the paperwork is filed.' },
    ],
    detailedId: 'service-business-setup',
    icon: IconBriefcase,
  },
  {
    key: 'employer-support',
    title: 'Employer Support',
    short: 'Help for Georgian companies hiring foreign employees.',
    description:
      'We support employers through the work permit process, providing document checklists and practical legal guidance.',
    whatsIncluded: [
      { title: 'Employer-side Document Checklist', desc: "A clear list of everything the company must provide to sponsor a foreign employee's permit. We tailor it to your specific case and industry." },
      { title: 'Work Permit Process Support', desc: 'We guide your HR or legal team through each phase of the permit application. Complex requirements are broken down into simple, actionable steps.' },
      { title: 'Filing Preparation Coordination', desc: 'All documents are organised and reviewed before submission to minimise delays. We coordinate directly with your team to keep the process on schedule.' },
      { title: 'Ongoing Status Follow-up', desc: 'We track progress and notify you of any updates or additional requirements from authorities. Your HR team stays informed without having to chase anything themselves.' },
    ],
    detailedId: 'service-employer-support',
    icon: IconBuilding,
  },
  {
    key: 'documents-renewals',
    title: 'Documents & Renewals',
    short: 'Document preparation, renewals and coordinated support across your case.',
    description:
      'Need to renew or update documents? We prepare everything carefully and coordinate your case with transparent communication.',
    whatsIncluded: [
      { title: 'Renewal Support & Preparation', desc: 'Timely preparation of all renewal documents so you never miss a critical deadline. We start the process early enough to handle any unexpected complications.' },
      { title: 'Document Readiness Review', desc: 'A thorough check of your existing documents to identify anything missing or outdated. We catch issues before they become problems with the authorities.' },
      { title: 'Corrections & Final Checks', desc: 'We review and correct any errors before documents are submitted to the relevant authority. Accuracy at this stage prevents costly delays and resubmissions.' },
      { title: 'Coordination Throughout', desc: 'Continuous communication and updates so you always know where your case stands. We act as your single point of contact for the entire renewal process.' },
    ],
    detailedId: 'service-documents-renewals',
    icon: IconFile,
  },
]
