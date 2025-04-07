import ctmImg from '../assets/ctm-2.png';
import pboImg from '../assets/pbo.png';
import salesImg from '../assets/sales.png';
import sbcwebImg from '../assets/sbc-web.png';
import delocareImg from '../assets/delocare.png';
// import hrImg from '../assets/hr-app.png';
import salesVid from '../assets/sales-app.mp4';
import pboVid from '../assets/pbo-app.mp4';
// import hrVid from '../assets/hr-app.mp4';
import sbcVid from '../assets/sbc-app.mp4';
import ctmVid from '../assets/ctm-app.mp4';
import delocareVid from '../assets/delocare-app.mp4';
import finpalImg from '../assets/finpal.png';
import finpalVid from '../assets/finpal.mp4';
const projectDetails = [
  {
    title: 'FinPal – Personal Finance Dashboard',
    description: 'An interactive fintech dashboard designed for personal finance tracking, budgeting, and expense management.',
    overview: `FinPal is a personal finance management dashboard that helps users monitor daily expenses, track inflow vs outflow, and manage budgeting goals. It provides a seamless and visually engaging user interface to analyze financial behavior with charts, summaries, and spending distributions.`,
    keyFeatures: [
      'Dashboard showing total balance, daily expense, and cashback insights',
      'Interactive charts for income vs expenses and transaction inflow vs outflow',
      'Budget management with expense categories, remaining budget, and total income',
      'Spending distribution analysis with intuitive visualizations',
      'Quick actions for sending money, buying data, and managing beneficiaries'
    ],
    impact: 'Improved user awareness of financial health and spending habits. Enhanced budget tracking and reduced financial oversights.',
    techStack: ['React', 'Tailwind CSS', 'Chart.js'],
    image: finpalImg,
    demoUrl: 'https://finpal-jet.vercel.app/',
    repoUrl: 'https://github.com/VictoryOmowumi/finpal',
    videoUrl: finpalVid, 
    isPublic: true
  },
  {
    title: 'Customer Trade Portal',
    description: 'A scalable web platform for managing trade operations for distributors, enhancing customer buying engagement, and automating sales workflows.',
    overview: `Developed a comprehensive web application for managing trade operations, facilitating seamless customer engagement, and automating core sales processes. The portal serves as a central hub for trade managers, enabling them to track orders, manage customer accounts, and generate detailed reports on sales activities.`,
    keyFeatures: [
      'Order management with filtering and sorting options',
      'Customer account management with detailed views and editing capabilities',
      'Automated processes for reduced manual errors',
      'Comprehensive reporting and data export functionality'
    ],
    impact: 'Improved trade operations efficiency by 40% and reduced manual errors through automated processes.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit'],
    image: ctmImg,
    videoUrl: ctmVid,
    repoUrl: '',
    isPublic: false
  },
  {
    title: 'Payment Backoffice',
    description: 'An internal tool for real-time monitoring of payment transactions, management of virtual accounts and replaying transactions.',
    overview: `Designed and implemented a backoffice tool to streamline the monitoring and management of payment transactions, virtual accounts, and payment providers. This solution offers real-time visibility into payment statuses and enhances operational efficiency through automation.`,
    keyFeatures: [
      'Real-time transaction monitoring with status updates',
      'Virtual account management for seamless reconciliation',
      'Integration with multiple payment providers',
      'Role-based access control for secure data handling'
    ],
    impact: 'Enabled faster transaction processing and better monitoring of virtual accounts, reducing downtime by 30%. The platform supports over ₦17 billion in monthly transactions, playing a key role in ensuring seamless financial operations.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit'],
    image: pboImg,
    videoUrl: pboVid,
    repoUrl: '',
    isPublic: false
  },
  {
    title: 'Sales Backoffice',
    description: 'A platform designed to provide end-to-end visibility and management of sales operations.',
    overview: `Developed a sales management tool to provide real-time tracking of orders and enhance sales fulfillment processes. This application offers an intuitive dashboard with key performance indicators (KPIs) for better decision-making.`,
    keyFeatures: [
      'Order tracking with real-time updates on status and fulfillment',
      'Comprehensive customer and supplier management',
      'Dashboard with key metrics and trend analysis',
      'Export functionality for generating sales reports'
    ],
    impact: 'Increased visibility into sales operations and improved order processing time by 25%.',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Material UI'],
    image: salesImg,
    videoUrl: salesVid,
    repoUrl: '',
    isPublic: false
  },
  {
    title: 'Seven-Up Bottling Company Website',
    description: 'The official website for Seven-Up Bottling Company, enhancing brand visibility and user engagement.',
    overview: `Built and deployed the official corporate website of Seven-Up Bottling Company to enhance brand visibility and improve customer engagement. The website is fully responsive and features a modern UI/UX design.`,
    keyFeatures: [
      'Responsive design with cross-platform compatibility',
      'SEO-optimized pages for improved search engine ranking',
      'Content management system integration for easy updates',
      'Interactive sections for enhanced user experience'
    ],
    impact: 'Improved brand visibility and customer engagement with a modern, responsive web interface.',
    techStack: ['React', 'Tailwind CSS', 'Node.js'],
    image: sbcwebImg,
    demoUrl: 'https://www.sevenup.org/',
    repoUrl: '',
    videoUrl: sbcVid,
    isPublic: true
  },
  // {
  //   title: 'HR 360 Assessment Management System',
  //   description: 'A robust platform for creating and managing employee assessments, reviews, and surveys, designed to streamline HR processes.',
  //   overview: `Developed an HR assessment management system allowing HR departments to create and send out assessments, reviews, and surveys to employees. The system includes customizable questionnaires, automated reporting, and performance analytics.`,
  //   keyFeatures: [
  //     'Create and manage assessments, reviews, and surveys',
  //     'Customizable questionnaires with multiple question types',
  //     'Automated report generation and performance tracking',
  //     'Role-based access control ensuring secure data management'
  //   ],
  //   impact: 'Enhanced HR efficiency by automating employee reviews and assessments, reducing manual workload by 35%.',
  //   techStack: ['React', 'TypeScript', 'Redux Toolkit', 'Axios', 'Tailwind CSS'],
  //   image: hrImg,
  //   videoUrl: hrVid,
  //   isPublic: false
  // },
  {
    title: 'Delocare',
    description: 'A trusted healthcare community providing personalized care and support to individuals in their homes across England.',
    overview: `Delocare is a healthcare platform dedicated to improving the well-being of individuals by providing high-quality in-home care services. The platform caters to a wide range of care needs, including mobility support, personal care, live-in care, and specialized support for individuals with disabilities.`,
    keyFeatures: [
      'Mobility Support and Personal Care services',
      'Live-In Care and Escort Companionship options',
      'Waking and Sleeping Night care services',
      'Medication support and PEG feeding',
      'End-of-life care with compassionate support',
      'Specialized care for individuals with learning disabilities or autism',
      'Domestic support for household tasks'
    ],
    impact: 'Delocare has significantly improved the quality of life for individuals requiring in-home care by offering personalized support and fostering a sense of community. It has enhanced healthcare delivery efficiency by 40%.',
    techStack: ['Next Js', 'Tailwind CSS', 'Node.js'],
    image: delocareImg,
    videoUrl: delocareVid,
    demoUrl: 'https://delore-care.vercel.app/',
    repoUrl: 'https://github.com/VictoryOmowumi/delore-care',
    isPublic: true
  }
];

export default projectDetails;
