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
      { title: 'Application Readiness Check', desc: 'We review your situation and confirm eligibility before any documents are submitted.' },
      { title: 'Document Review & Corrections', desc: 'All papers are checked for errors and gaps to meet current Georgian requirements.' },
      { title: 'Filing Guidance', desc: 'Step-by-step instructions and direct support throughout the submission process.' },
      { title: 'Status Follow-up', desc: 'We monitor your application and handle any authority requests on your behalf.' },
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
      { title: 'Application Package Preparation', desc: 'We compile and verify the complete document set required for your residence permit.' },
      { title: 'Renewals & Change Support', desc: 'Timely renewal management and assistance when your status or circumstances change.' },
      { title: 'Legal Documentation Coordination', desc: 'All papers are prepared in the correct format and language to avoid back-and-forth delays.' },
      { title: 'Deadline Tracking', desc: 'We track critical dates so your permit never lapses unexpectedly.' },
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
      { title: 'IE Registration Preparation', desc: 'Full support gathering and submitting all documents to register as an individual entrepreneur.' },
      { title: 'Legal Address Coordination', desc: 'We help you secure a valid legal address required for the registration process.' },
      { title: 'Tax & Accounting Coordination', desc: 'Introduction to basic tax obligations and connection to trusted accounting partners.' },
      { title: 'Step-by-step Guidance', desc: 'Clear instructions at every stage so you always know exactly what comes next.' },
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
      { title: 'Business Formation Guidance', desc: 'Expert advice on choosing the right legal entity structure for your goals.' },
      { title: 'Document Checklist & Preparation', desc: 'A tailored document list and full help gathering everything needed for registration.' },
      { title: 'Process Planning from Day One', desc: 'A clear roadmap of every step, timeline, and responsibility from the start.' },
      { title: 'Practical Follow-up', desc: 'We stay engaged after setup to resolve any issues that arise post-registration.' },
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
      { title: 'Employer-side Document Checklist', desc: "A tailored list of everything the company must provide to sponsor a foreign employee's permit." },
      { title: 'Work Permit Process Support', desc: 'We guide your HR team through each phase of the permit application, step by step.' },
      { title: 'Filing Preparation Coordination', desc: 'Documents are organised and reviewed before submission to keep the process on schedule.' },
      { title: 'Ongoing Status Follow-up', desc: 'We track progress and notify your team of any updates or authority requirements.' },
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
      { title: 'Renewal Support & Preparation', desc: 'Timely preparation of all renewal documents so you never miss a critical deadline.' },
      { title: 'Document Readiness Review', desc: 'A thorough check of your documents to identify anything missing or outdated.' },
      { title: 'Corrections & Final Checks', desc: 'We review and correct any errors before documents are submitted to the authority.' },
      { title: 'Coordination Throughout', desc: 'Continuous updates so you always know where your case stands.' },
    ],
    detailedId: 'service-documents-renewals',
    icon: IconFile,
  },
]
