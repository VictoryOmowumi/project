import { TimelineItemProps } from '../components/timeline/TimelineItem';

export const timelineData: TimelineItemProps[] = [
  {
    type: 'experience',
    title: 'Frontend Developer',
    organization: 'Seven-Up Bottling Company (PepsiCo)',
    period: '2022 - Present',
    description: [
      'Built and launched the current corporate website',
      'Developed key web applications including Customer Trade Portal, Sales Backoffice, Payment Backoffice, Intranet, and Customer Service Backoffice',
      'Collaborated with cross-functional teams to deliver business-driven applications'
    ]
  },
  {
    type: 'experience',
    title: 'Frontend Mobile Developer',
    organization: 'Coutana (Fashion Tech Startup)',
    period: '2021 - 2022',
    description: [
      'Developed a mobile fashion app using React Native with AI body scanning features',
      'Implemented a bidding system for fashion designers to bid on user-submitted styles',
      'Enhanced user experience by allowing users to choose designers based on ratings, pricing, and delivery timeline'
    ]
  },
  {
    type: 'education',
    title: 'Bachelor of Science in Industrial Mathematics',
    organization: 'University of Benin, Benin City, Edo State, Nigeria',
    period: '2016 - 2021',
    description: [
      'Final project: Optimizing production using Linear Programming Simplex Method'
    ]
  }
];
