export interface Program {
  id: string;
  name: string;
  degreeType: 'Undergraduate' | 'Graduate';
  duration: string;
  semesters: number;
  creditHours: number;
  shortDescription: string;
  fullOverview: string;
  eligibility: string;
  keyFeatures: string[];
  careerProspects: string[];
  curriculumHighlights: {
    semester: string;
    courses: string[];
  }[];
  accreditationNote: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  domain: 'Artificial Intelligence' | 'Software Engineering' | 'Data Science' | 'Networks & Security';
  email: string;
  office: string;
  advisoryHours: string;
  bio: string;
  researchInterests: string[];
  selectedPublications: string[];
  coursesTaught: string[];
  isChairperson?: boolean;
}

export interface NewsEvent {
  id: string;
  title: string;
  category: 'Announcements' | 'Seminars' | 'Competitions' | 'Student Life';
  date: string;
  time?: string;
  venue: string;
  excerpt: string;
  fullContent: string;
  isUpcoming: boolean;
  registrationOpen?: boolean;
  speakerOrOrganizer?: string;
}

export interface LabFacility {
  id: string;
  name: string;
  capacity: string;
  specs: string;
  purpose: string;
  features: string[];
  supervisor: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Curriculum' | 'Labs & Facilities' | 'Student Portal';
}

export const ACADEMIC_PROGRAMS: Program[] = [
  {
    id: 'bscs',
    name: 'BS Computer Science (BSCS)',
    degreeType: 'Undergraduate',
    duration: '4 Years',
    semesters: 8,
    creditHours: 134,
    shortDescription: 'Comprehensive 4-year degree covering algorithms, machine learning, systems architecture, and modern software engineering.',
    fullOverview: 'The Bachelor of Science in Computer Science program at GCWUS is designed to equip women with strong theoretical foundations and advanced practical expertise in computing. Aligned with HEC and NCEAC curriculum guidelines, the curriculum balances core computational science, mathematical rigor, modern programming paradigms, and industry-focused electives.',
    eligibility: 'Intermediate (HSSC) / F.Sc Pre-Engineering, ICS (Mathematics, Physics/Computer Science), or General Science with Mathematics, with minimum 50% marks, or equivalent A-Level certification with equivalence certificate from IBCC.',
    keyFeatures: [
      'Accredited by National Computing Education Accreditation Council (NCEAC)',
      'High-performance computing laboratory access for AI & systems programming',
      'Capstone Final Year Project (FYP) mentored by academic and industry leads',
      'Specialized elective tracks in AI, Mobile Computing, Cyber Security, and Cloud Architecture'
    ],
    careerProspects: [
      'Full Stack Software Engineer',
      'Machine Learning & AI Specialist',
      'Data Engineer / Analyst',
      'Systems Architect & DevOps Engineer',
      'Cybersecurity Analyst',
      'Academician & Postgraduate Researcher'
    ],
    curriculumHighlights: [
      {
        semester: 'Semester 1 & 2 (Foundation)',
        courses: ['Programming Fundamentals (C/C++)', 'Discrete Structures', 'Calculus & Analytical Geometry', 'Digital Logic Design', 'Applied Physics']
      },
      {
        semester: 'Semester 3 & 4 (Core Systems)',
        courses: ['Object Oriented Programming (Java/Python)', 'Data Structures & Algorithms', 'Computer Organization & Assembly Language', 'Database Systems', 'Linear Algebra']
      },
      {
        semester: 'Semester 5 & 6 (Advanced Computing)',
        courses: ['Operating Systems', 'Design & Analysis of Algorithms', 'Computer Networks', 'Software Engineering', 'Theory of Automata', 'Artificial Intelligence']
      },
      {
        semester: 'Semester 7 & 8 (Capstone & Electives)',
        courses: ['Information Security', 'Parallel & Distributed Computing', 'Final Year Project (Part I & II)', 'Machine Learning / Cloud Computing Electives']
      }
    ],
    accreditationNote: 'Illustrative curriculum guide based on standard HEC/NCEAC undergraduate guidelines for demonstrative purposes.'
  },
  {
    id: 'mscs',
    name: 'MS Computer Science (MSCS)',
    degreeType: 'Graduate',
    duration: '2 Years',
    semesters: 4,
    creditHours: 30,
    shortDescription: 'Advanced research-oriented graduate degree focusing on Machine Learning, Computer Vision, and Distributed Systems.',
    fullOverview: 'The Master of Science in Computer Science provides advanced scholastic training and research competencies. Graduate scholars collaborate on cutting-edge research alongside faculty in specialized research clusters including NLP, Medical Imaging, Big Data Analytics, and Cloud Security.',
    eligibility: 'BS in Computer Science, Software Engineering, IT, or equivalent 16-year education with minimum 2.50/4.00 CGPA (semester system) or 2nd Division (annual system), plus qualifying Departmental / GAT General test.',
    keyFeatures: [
      '24 Credit Hours coursework + 6 Credit Hours supervised research thesis',
      'Publishing requirement in HEC-recognized research journals',
      'Collaborative research clusters with national and international universities',
      'Evening / weekend classes accessible for working women'
    ],
    careerProspects: [
      'R&D Scientist',
      'Senior AI / Computer Vision Researcher',
      'University Lecturer / Assistant Professor',
      'Principal Solutions Architect',
      'Doctoral (PhD) Candidate'
    ],
    curriculumHighlights: [
      {
        semester: 'Semester 1 & 2',
        courses: ['Advanced Analysis of Algorithms', 'Advanced Operating Systems', 'Advanced Computer Architecture', 'Research Methodologies in Computing']
      },
      {
        semester: 'Semester 3 & 4',
        courses: ['Deep Learning & Neural Networks', 'Natural Language Processing', 'Big Data Analytics', 'MS Thesis / Dissertation (6 Credit Hours)']
      }
    ],
    accreditationNote: 'Graduate roadmap illustrative of HEC postgraduate criteria.'
  },
  {
    id: 'bsit',
    name: 'BS Information Technology (BSIT)',
    degreeType: 'Undergraduate',
    duration: '4 Years',
    semesters: 8,
    creditHours: 130,
    shortDescription: 'Applied degree focusing on Enterprise Network Infrastructure, Cloud Computing, Database Administration, and Web Technologies.',
    fullOverview: 'BS Information Technology emphasizes the planning, deployment, optimization, and security of modern computing infrastructure. Students gain in-depth hands-on experience in enterprise systems, cloud services, and cybersecurity governance.',
    eligibility: 'Intermediate with Mathematics (F.Sc, ICS, General Science) with at least 50% marks from a recognized board, or equivalent A-Levels.',
    keyFeatures: [
      'Hands-on network configuration in dedicated Cisco & networking labs',
      'Enterprise database and cloud deployment focus (AWS, Docker, Linux)',
      'Industry certification preparation integrated into coursework',
      'Industrial internship program with regional software companies'
    ],
    careerProspects: [
      'Cloud & Infrastructure Engineer',
      'Network Administrator & Security Engineer',
      'Database Administrator (DBA)',
      'DevOps Specialist',
      'IT Project Manager'
    ],
    curriculumHighlights: [
      {
        semester: 'Semester 1 to 4',
        courses: ['Fundamentals of IT', 'Programming Principles', 'System Administration', 'Network Fundamentals', 'Database Administration']
      },
      {
        semester: 'Semester 5 to 8',
        courses: ['Cloud Infrastructure', 'Web Systems & Technologies', 'Enterprise Architecture', 'Information Security', 'IT Capstone Project']
      }
    ],
    accreditationNote: 'Sample curriculum preview for prospective students.'
  },
  {
    id: 'bsse',
    name: 'BS Software Engineering (BSSE)',
    degreeType: 'Undergraduate',
    duration: '4 Years',
    semesters: 8,
    creditHours: 132,
    shortDescription: 'Rigorous engineering program focusing on software lifecycle, architectural design, QA testing, and enterprise development.',
    fullOverview: 'BS Software Engineering is dedicated to systematic, disciplined, and quantifiable approaches to the development, operation, and maintenance of high-reliability software systems.',
    eligibility: 'Intermediate Pre-Engineering or ICS (with Mathematics) with minimum 50% marks, or equivalent.',
    keyFeatures: [
      'Full software development lifecycle (SDLC) methodologies (Agile, Scrum)',
      'Software quality assurance, verification, and automated testing labs',
      'Microservice and enterprise architecture design patterns',
      'Collaborative team projects replicating real-world software houses'
    ],
    careerProspects: [
      'Software Architect',
      'Frontend / Backend Engineer',
      'QA & Automation Engineer',
      'Product Development Manager',
      'Scrum Master'
    ],
    curriculumHighlights: [
      {
        semester: 'Semester 1 to 4',
        courses: ['Computing Foundations', 'Object-Oriented Design', 'Software Requirements Engineering', 'Data Structures', 'Database Management']
      },
      {
        semester: 'Semester 5 to 8',
        courses: ['Software Architecture & Design', 'Software Quality Engineering', 'Web Engineering', 'Mobile Application Development', 'Capstone Project']
      }
    ],
    accreditationNote: 'Sample curriculum preview for prospective applicants.'
  }
];

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'fac-1',
    name: 'Dr. Bushra Hameed',
    designation: 'Associate Professor & Chairperson',
    qualification: 'Ph.D. in Computer Science (AI & Machine Learning)',
    specialization: 'Artificial Intelligence, Natural Language Processing, Machine Learning',
    domain: 'Artificial Intelligence',
    email: 'chairperson.cs@gcwus.edu.pk',
    office: 'CS Block, Executive Suite 101',
    advisoryHours: 'Mon & Wed: 11:00 AM - 01:00 PM',
    bio: 'Dr. Bushra Hameed serves as the Chairperson of the Department of Computer Science. With over 15 years of academic leadership and research experience, she has spearheaded numerous funded research projects empowering women researchers in artificial intelligence and computational linguistics.',
    researchInterests: [
      'Low-resource Language Modeling for Urdu & Regional Dialects',
      'Deep Learning for Medical Diagnosis',
      'Ethical AI and Algorithmic Bias'
    ],
    selectedPublications: [
      'Hameed, B. et al. (2025). "Transformer-based Named Entity Recognition for Urdu Text Corpora." IEEE Access.',
      'Hameed, B. & Siddiqa, A. (2024). "Deep Neural Networks for Early Detection of Pulmonary Nodules." Journal of Medical Systems.'
    ],
    coursesTaught: ['CS-501: Advanced Analysis of Algorithms', 'CS-412: Machine Learning', 'CS-101: Introduction to Computing'],
    isChairperson: true
  },
  {
    id: 'fac-2',
    name: 'Engr. Ayesha Siddiqa',
    designation: 'Assistant Professor',
    qualification: 'M.S. in Software Engineering, PEC Registered',
    specialization: 'Distributed Systems, Microservices, Agile Architecture',
    domain: 'Software Engineering',
    email: 'ayesha.siddiqa@gcwus.edu.pk',
    office: 'CS Block, Faculty Room 104',
    advisoryHours: 'Tue & Thu: 10:00 AM - 12:00 PM',
    bio: 'Engr. Ayesha Siddiqa specializes in large-scale software systems and engineering education. She mentors competitive programming teams and oversees the department industry liaison committee.',
    researchInterests: [
      'Fault-Tolerant Microservice Architectures',
      'Empirical Software Engineering',
      'Continuous Integration & Deployment in Agile Teams'
    ],
    selectedPublications: [
      'Siddiqa, A. et al. (2024). "Evaluating Resiliency Patterns in Cloud-Native Distributed Microservices." Software: Practice and Experience.',
      'Siddiqa, A. (2023). "Active Learning Strategies in Undergraduate Software Engineering Curricula." ACM SIGCSE.'
    ],
    coursesTaught: ['CS-304: Software Engineering Principles', 'CS-403: Enterprise Application Development', 'CS-201: Object Oriented Programming']
  },
  {
    id: 'fac-3',
    name: 'Dr. Fatima Zahra',
    designation: 'Assistant Professor',
    qualification: 'Ph.D. in Computer Science (Computer Vision)',
    specialization: 'Computer Vision, Image Processing, Pattern Recognition',
    domain: 'Artificial Intelligence',
    email: 'fatima.zahra@gcwus.edu.pk',
    office: 'CS Block, Research Lab 202',
    advisoryHours: 'Mon & Fri: 09:30 AM - 11:30 AM',
    bio: 'Dr. Fatima Zahra conducts research at the intersection of deep convolutional neural networks and biomedical imaging. She has published widely in high-impact journals and mentors undergraduate capstone teams.',
    researchInterests: [
      'Multi-modal Computer Vision Systems',
      'Autonomous Object Detection in Low-Light Conditions',
      'Explainable AI for Medical Diagnostics'
    ],
    selectedPublications: [
      'Zahra, F. et al. (2025). "Multi-scale Attention Networks for Histopathological Image Segmentation." Pattern Recognition.',
      'Zahra, F. (2024). "Synthetic Data Augmentation for Edge AI Applications." Elsevier Neurocomputing.'
    ],
    coursesTaught: ['CS-415: Computer Vision', 'CS-301: Design & Analysis of Algorithms', 'CS-204: Data Structures']
  },
  {
    id: 'fac-4',
    name: 'Ms. Rabia Tariq',
    designation: 'Lecturer',
    qualification: 'M.S. in Computer Science',
    specialization: 'Database Systems, Data Mining, Information Retrieval',
    domain: 'Data Science',
    email: 'rabia.tariq@gcwus.edu.pk',
    office: 'CS Block, Faculty Room 108',
    advisoryHours: 'Wed & Fri: 01:00 PM - 03:00 PM',
    bio: 'Ms. Rabia Tariq is passionate about relational databases, query optimization, and big data preprocessing. She coordinates laboratory sessions and student technical workshops.',
    researchInterests: [
      'Distributed Query Optimization',
      'Data Warehousing & OLAP Modeling',
      'Predictive Analytics for Educational Outcomes'
    ],
    selectedPublications: [
      'Tariq, R. & Hameed, B. (2024). "Optimizing NoSQL Query Latency in Distributed Healthcare Databases." International Journal of Information Management.'
    ],
    coursesTaught: ['CS-302: Database Systems & Architecture', 'CS-302L: Database Lab', 'CS-102: Discrete Structures']
  },
  {
    id: 'fac-5',
    name: 'Ms. Sana Mukhtar',
    designation: 'Lecturer',
    qualification: 'M.S. in Information Security',
    specialization: 'Network Security, Cryptography, Secure Coding',
    domain: 'Networks & Security',
    email: 'sana.mukhtar@gcwus.edu.pk',
    office: 'CS Block, Faculty Room 110',
    advisoryHours: 'Tue & Wed: 12:00 PM - 02:00 PM',
    bio: 'Ms. Sana Mukhtar leads cybersecurity initiatives and ethical hacking awareness workshops. Her work ensures that students understand secure software design from the ground up.',
    researchInterests: [
      'Zero Trust Network Architectures',
      'Post-Quantum Cryptographic Protocols',
      'IoT Firmware Vulnerability Analysis'
    ],
    selectedPublications: [
      'Mukhtar, S. et al. (2024). "Vulnerability Assessment in Edge-Computing Smart Healthcare Nodes." Computers & Security.'
    ],
    coursesTaught: ['CS-303: Computer Networks', 'CS-408: Information & Network Security', 'CS-205: Computer Architecture']
  },
  {
    id: 'fac-6',
    name: 'Ms. Zainab Noor',
    designation: 'Lecturer',
    qualification: 'M.S. in Computer Science',
    specialization: 'Human-Computer Interaction, Modern Web Systems, UX',
    domain: 'Software Engineering',
    email: 'zainab.noor@gcwus.edu.pk',
    office: 'CS Block, Faculty Room 112',
    advisoryHours: 'Mon & Thu: 02:00 PM - 04:00 PM',
    bio: 'Ms. Zainab Noor bridges the gap between software usability and accessible engineering. She is the faculty advisor for the ACM-W Student Chapter at GCWUS.',
    researchInterests: [
      'Accessible Interface Design for Assistive Technologies',
      'Cognitive Load Measurement in Developer Tools',
      'Mobile User Experience Ergonomics'
    ],
    selectedPublications: [
      'Noor, Z. (2023). "Evaluating Usability Paradigms for Academic Learning Portals." International Conference on HCI.'
    ],
    coursesTaught: ['CS-310: Web Technologies', 'CS-318: Human-Computer Interaction', 'CS-101L: Programming Lab']
  }
];

export const NEWS_AND_EVENTS: NewsEvent[] = [
  {
    id: 'news-1',
    title: 'Admissions Open: BS Computer Science & MS Computer Science Fall 2026',
    category: 'Announcements',
    date: 'October 08, 2026',
    venue: 'Department Admission Cell & Online Portal',
    excerpt: 'Online applications are officially invited for BSCS, BSIT, BSSE, and MSCS programs. Merit criteria and guidance sessions scheduled.',
    fullContent: 'The Department of Computer Science at Government College Women University Sialkot announces admissions for Fall 2026. Prospective applicants can register online or submit demonstration inquiries through the admissions portal. Orientation sessions and entry test preparation guidelines will be conducted in the university main auditorium. Female candidates from all over Pakistan are encouraged to apply.',
    isUpcoming: true,
    registrationOpen: true,
    speakerOrOrganizer: 'Department Admissions Committee'
  },
  {
    id: 'news-2',
    title: 'National Women in Tech Hackathon & Speed Programming Sprint 2026',
    category: 'Competitions',
    date: 'November 14, 2026',
    time: '09:00 AM - 05:00 PM',
    venue: 'Ada Lovelace Advanced Computing Lab (CS Block)',
    excerpt: 'An intensive 8-hour competitive coding and hackathon challenge testing algorithmic thinking, real-time problem solving, and software prototyping.',
    fullContent: 'Calling all budding female computer scientists! The Department of Computer Science, in collaboration with the ACM-W Student Chapter, presents the 5th Annual National Women in Tech Hackathon. Teams of up to 3 students will solve competitive algorithmic challenges in C++, Java, and Python, followed by a 4-hour rapid prototyping sprint on civic technology solutions.',
    isUpcoming: true,
    registrationOpen: true,
    speakerOrOrganizer: 'ACM-W Student Chapter & Mentors'
  },
  {
    id: 'news-3',
    title: 'Hands-on Workshop: Building Modern AI Agents with Gemini & PyTorch',
    category: 'Seminars',
    date: 'October 28, 2026',
    time: '11:00 AM - 02:00 PM',
    venue: 'Video Conference Hall / CS Seminar Room',
    excerpt: 'Interactive technical masterclass on multimodal AI architectures, model fine-tuning, and building agentic workflows for real-world applications.',
    fullContent: 'Join visiting research scientists and department faculty for an exhaustive masterclass on next-generation artificial intelligence. Topics covered include foundational transformer mechanics, fine-tuning techniques, vector search grounding, and building autonomous agent workflows using Python.',
    isUpcoming: true,
    registrationOpen: true,
    speakerOrOrganizer: 'Dr. Bushra Hameed & Guest Industry Specialist'
  },
  {
    id: 'news-4',
    title: 'Final Year Project (FYP) Exhibition & Industry Advisory Colloquium',
    category: 'Student Life',
    date: 'September 24, 2026',
    venue: 'Main Campus Gymnasium & CS Concourse',
    excerpt: 'Graduating students displayed over 40 capstone projects in AI, healthcare diagnostics, smart agriculture, and IoT to regional software leaders.',
    fullContent: 'The Department celebrated student innovation at the annual FYP Exhibition. Representatives from over 25 software houses, tech incubators, and IT firms evaluated graduating students’ projects. Several teams secured on-the-spot job offers and incubation funding for their prototypes.',
    isUpcoming: false,
    registrationOpen: false,
    speakerOrOrganizer: 'FYP Committee & Industrial Liaison Office'
  },
  {
    id: 'news-5',
    title: 'HEC Indigenous Scholarship & Laptop Distribution Circular',
    category: 'Announcements',
    date: 'September 12, 2026',
    venue: 'Student Affairs & Financial Aid Office',
    excerpt: 'Eligible undergraduate and graduate students are notified to submit their verification documentation for semester scholarship disbursements.',
    fullContent: 'All enrolled students eligible for HEC Need-Based Scholarships and the Prime Minister Youth Laptop Scheme are advised to verify their academic credentials and submit verified income certificates to the departmental coordinator before the deadline.',
    isUpcoming: false,
    registrationOpen: false,
    speakerOrOrganizer: 'Directorate of Student Affairs'
  },
  {
    id: 'news-6',
    title: 'Distinguished Lecture: Cloud-Native Microservices & Kubernetes in Production',
    category: 'Seminars',
    date: 'August 30, 2026',
    venue: 'Auditorium Hall 2',
    excerpt: 'Lead Cloud Architect shared insights on designing resilient multi-region software systems handling millions of concurrent transactions.',
    fullContent: 'A technical seminar hosted by the Department featured an interactive session on cloud infrastructure, container orchestration, zero-downtime deployments, and telemetry observability in modern enterprise software engineering.',
    isUpcoming: false,
    registrationOpen: false,
    speakerOrOrganizer: 'Engr. Ayesha Siddiqa & Tech Alumni'
  }
];

export const LAB_FACILITIES: LabFacility[] = [
  {
    id: 'lab-1',
    name: 'Ada Lovelace Advanced Computing Lab',
    capacity: '50 Workstations',
    specs: 'Intel Core i7 13th Gen, 32GB RAM, NVIDIA RTX 4070 GPUs, Dual 27" Monitors',
    purpose: 'Specialized for Artificial Intelligence, Computer Vision, High Performance Computing, and competitive programming.',
    features: ['Dedicated High-Speed Gigabit LAN', 'Linux & Windows Dual Boot', 'CUDA / PyTorch development stack', 'Smart interactive display screen'],
    supervisor: 'Dr. Fatima Zahra / Lab Engineer'
  },
  {
    id: 'lab-2',
    name: 'Alan Turing Systems & Software Engineering Lab',
    capacity: '45 Workstations',
    specs: 'Intel Core i5 12th Gen, 16GB RAM, Fast NVMe Storage, Full IDE Suites',
    purpose: 'Dedicated to Object-Oriented Programming, Data Structures, Web Development, and Capstone Project development.',
    features: ['Docker & Local Kubernetes nodes', 'GitLab local version control server', 'Multi-compiler test environments', 'Ergonomic study clusters'],
    supervisor: 'Engr. Ayesha Siddiqa'
  },
  {
    id: 'lab-3',
    name: 'Grace Hopper Networks & Cybersecurity Lab',
    capacity: '40 Workstations',
    specs: 'Managed Cisco Switches, Routers, Hardware Firewalls, Packet Sniffing Tools',
    purpose: 'Equipped for hands-on network topologies, socket programming, ethical hacking simulations, and network packet analysis.',
    features: ['Isolated sandbox testing network', 'Cisco Packet Tracer & GNS3 labs', 'Wireshark & Snort analysis rigs', 'Hardware patching stations'],
    supervisor: 'Ms. Sana Mukhtar'
  },
  {
    id: 'lab-4',
    name: 'Department Seminar & Project Defense Hall',
    capacity: '120 Seats',
    specs: 'Acoustically treated auditorium with 4K laser projection and digital audio podium',
    purpose: 'Hosts departmental symposiums, research proposal defenses, guest lectures, and student society orientations.',
    features: ['High-definition video conferencing', 'Multi-channel wireless microphones', 'Dual presentation displays', 'Central climate control'],
    supervisor: 'Department Coordinator'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    category: 'Admissions',
    question: 'What is the minimum eligibility criteria for BS Computer Science?',
    answer: 'Applicants must possess F.Sc Pre-Engineering, ICS (with Mathematics and Physics/Computer Science), or General Science with Mathematics, having achieved at least 50% marks in intermediate or equivalent A-Level certification.'
  },
  {
    id: 'faq-2',
    category: 'Admissions',
    question: 'Is there an age limit or specific quota for applicants?',
    answer: 'Admissions are open to female students according to university policies. Quota seats exist for sports, disability, and regional categories per GCWUS guidelines.'
  },
  {
    id: 'faq-3',
    category: 'Curriculum',
    question: 'Is the BSCS curriculum accredited by NCEAC and recognized by HEC?',
    answer: 'Yes, our academic curriculum follows the revised guidelines set by the Higher Education Commission (HEC) and is fully accredited by the National Computing Education Accreditation Council (NCEAC).'
  },
  {
    id: 'faq-4',
    category: 'Labs & Facilities',
    question: 'Can students access the computing labs outside of regular lecture hours?',
    answer: 'Yes, the computing facilities remain accessible until 04:30 PM on all working days with lab engineer supervision for research, programming practice, and project development.'
  },
  {
    id: 'faq-5',
    category: 'Student Portal',
    question: 'How do students access the Student Portal?',
    answer: 'Students can use their university institutional email (e.g., student@gcwus.edu.pk) and allocated password. In this demo portal, use the documented credentials to test the dashboard.'
  }
];

// Demo Student Portal Data
export const DEMO_STUDENT = {
  name: 'Mahnoor Fatima',
  rollNo: 'CS-F23-042',
  email: 'student@gcwus.edu.pk',
  program: 'BS Computer Science (BSCS)',
  semester: '5th Semester (Fall 2026)',
  section: 'Section A',
  cgpa: '3.78',
  sgpaLast: '3.82',
  creditHoursCompleted: 72,
  attendanceOverall: 94,
  advisor: 'Engr. Ayesha Siddiqa',
  department: 'Department of Computer Science',
  campus: 'Main Campus, GCWUS Sialkot'
};

export const DEMO_ENROLLED_COURSES = [
  {
    code: 'CS-301',
    title: 'Design & Analysis of Algorithms',
    instructor: 'Dr. Fatima Zahra',
    credits: '3-0 (3 CH)',
    schedule: 'Mon & Wed 09:00 - 10:30 AM (LT-2)',
    attendance: 96,
    midtermMarks: '28 / 30',
    projection: 'A',
    syllabus: 'Asymptotic notation, Divide & Conquer, Dynamic Programming, Greedy, Graph Algorithms, NP-Completeness'
  },
  {
    code: 'CS-302',
    title: 'Database Systems & Architecture',
    instructor: 'Ms. Rabia Tariq',
    credits: '3-3 (4 CH)',
    schedule: 'Tue & Thu 10:30 - 12:00 PM (LT-1) + Lab Fri 09:00 - 12:00 PM (Lab 2)',
    attendance: 92,
    midtermMarks: '26 / 30',
    projection: 'A-',
    syllabus: 'ER Modeling, Relational Algebra, SQL, Normalization, Query Optimization, Concurrency Control, ACID'
  },
  {
    code: 'CS-303',
    title: 'Computer Networks & Communications',
    instructor: 'Ms. Sana Mukhtar',
    credits: '3-3 (4 CH)',
    schedule: 'Mon & Wed 11:00 - 12:30 PM (LT-2) + Lab Thu 02:00 - 05:00 PM (Lab 3)',
    attendance: 90,
    midtermMarks: '24 / 30',
    projection: 'B+',
    syllabus: 'OSI/TCP Reference models, IP Addressing, Subnetting, Routing Protocols (OSPF/BGP), TCP Flow control, Network Security'
  },
  {
    code: 'CS-304',
    title: 'Software Engineering Principles',
    instructor: 'Engr. Ayesha Siddiqa',
    credits: '3-0 (3 CH)',
    schedule: 'Tue & Thu 08:30 - 10:00 AM (LT-3)',
    attendance: 98,
    midtermMarks: '29 / 30',
    projection: 'A',
    syllabus: 'Agile & Scrum, UML Architectural Design, Software Testing & QA, Design Patterns, CI/CD pipelines'
  },
  {
    code: 'MT-301',
    title: 'Linear Algebra & Applications',
    instructor: 'Visiting Faculty (Math Dept)',
    credits: '3-0 (3 CH)',
    schedule: 'Fri 08:30 - 11:30 AM (LT-1)',
    attendance: 94,
    midtermMarks: '27 / 30',
    projection: 'A',
    syllabus: 'Matrix operations, Vector spaces, Eigenvalues & Eigenvectors, Singular Value Decomposition, PCA in Computing'
  }
];

export interface Assignment {
  id: string;
  courseCode: string;
  courseName: string;
  title: string;
  dueDate: string;
  totalMarks: number;
  status: 'Pending' | 'Submitted' | 'Graded';
  obtainedMarks?: number;
  description: string;
  submissionDate?: string;
  fileName?: string;
}

export const INITIAL_ASSIGNMENTS: Assignment[] = [
  {
    id: 'asg-1',
    courseCode: 'CS-301',
    courseName: 'Design & Analysis of Algorithms',
    title: 'Dynamic Programming on Graph Path Problems',
    dueDate: 'October 18, 2026',
    totalMarks: 20,
    status: 'Pending',
    description: 'Implement Floyd-Warshall and Bellman-Ford algorithms in C++ or Python and benchmark runtime complexities across dense random graphs.'
  },
  {
    id: 'asg-2',
    courseCode: 'CS-302',
    courseName: 'Database Systems & Architecture',
    title: 'Complex Relational Schema Normalization & BCNF',
    dueDate: 'October 22, 2026',
    totalMarks: 25,
    status: 'Pending',
    description: 'Normalize the provided healthcare clinic dataset up to Boyce-Codd Normal Form (BCNF) and write SQL DDL migration scripts with referential integrity constraints.'
  },
  {
    id: 'asg-3',
    courseCode: 'CS-304',
    courseName: 'Software Engineering Principles',
    title: 'Architectural Blueprint & UML Class Diagram for Healthcare App',
    dueDate: 'October 05, 2026',
    totalMarks: 20,
    status: 'Graded',
    obtainedMarks: 19,
    description: 'Produce high-level Software Architecture Document (SAD) with C4 architecture diagram and complete sequence diagrams.',
    submissionDate: 'October 04, 2026',
    fileName: 'Mahnoor_CS304_SAD_v2.pdf'
  },
  {
    id: 'asg-4',
    courseCode: 'CS-303',
    courseName: 'Computer Networks',
    title: 'Wireshark Packet Analysis on TCP Handshake & TLS',
    dueDate: 'September 28, 2026',
    totalMarks: 15,
    status: 'Graded',
    obtainedMarks: 14,
    description: 'Capture live HTTP vs HTTPS network sessions, analyze SYN, ACK, and TLS ClientHello handshakes.',
    submissionDate: 'September 27, 2026',
    fileName: 'Mahnoor_CS303_Wireshark_Report.pdf'
  }
];

export const TIMETABLE_DAYS = [
  {
    day: 'Monday',
    slots: [
      { time: '09:00 - 10:30 AM', course: 'CS-301: Algorithms', room: 'Lecture Theater 2', teacher: 'Dr. Fatima Zahra' },
      { time: '11:00 - 12:30 PM', course: 'CS-303: Computer Networks', room: 'Lecture Theater 2', teacher: 'Ms. Sana Mukhtar' },
      { time: '01:30 - 03:00 PM', course: 'CS-304: Group Study / Tutorial', room: 'Study Hall A', teacher: 'Teaching Assistant' }
    ]
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '08:30 - 10:00 AM', course: 'CS-304: Software Engineering', room: 'Lecture Theater 3', teacher: 'Engr. Ayesha Siddiqa' },
      { time: '10:30 - 12:00 PM', course: 'CS-302: Database Systems', room: 'Lecture Theater 1', teacher: 'Ms. Rabia Tariq' },
      { time: '01:00 - 02:30 PM', course: 'Library / Research Work', room: 'CS Resource Library', teacher: 'Self' }
    ]
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '09:00 - 10:30 AM', course: 'CS-301: Algorithms', room: 'Lecture Theater 2', teacher: 'Dr. Fatima Zahra' },
      { time: '11:00 - 12:30 PM', course: 'CS-303: Computer Networks', room: 'Lecture Theater 2', teacher: 'Ms. Sana Mukhtar' },
      { time: '02:00 - 03:30 PM', course: 'Academic Advisory Session', room: 'Room 104', teacher: 'Engr. Ayesha Siddiqa' }
    ]
  },
  {
    day: 'Thursday',
    slots: [
      { time: '08:30 - 10:00 AM', course: 'CS-304: Software Engineering', room: 'Lecture Theater 3', teacher: 'Engr. Ayesha Siddiqa' },
      { time: '10:30 - 12:00 PM', course: 'CS-302: Database Systems', room: 'Lecture Theater 1', teacher: 'Ms. Rabia Tariq' },
      { time: '02:00 - 05:00 PM', course: 'CS-303L: Computer Networks Lab', room: 'Lab 3 (Grace Hopper Lab)', teacher: 'Ms. Sana Mukhtar' }
    ]
  },
  {
    day: 'Friday',
    slots: [
      { time: '08:30 - 11:30 AM', course: 'MT-301: Linear Algebra', room: 'Lecture Theater 1', teacher: 'Math Dept' },
      { time: '01:30 - 04:30 PM', course: 'CS-302L: Database Systems Lab', room: 'Lab 2 (Alan Turing Lab)', teacher: 'Ms. Rabia Tariq' }
    ]
  }
];

export const TRANSCRIPT_HISTORY = [
  {
    semester: 'Semester 1 (Fall 2024)',
    gpa: '3.80',
    credits: 17,
    courses: [
      { code: 'CS-101', name: 'Programming Fundamentals', credits: 4, grade: 'A' },
      { code: 'CS-102', name: 'Discrete Structures', credits: 3, grade: 'A' },
      { code: 'MT-101', name: 'Calculus & Analytical Geometry', credits: 3, grade: 'A-' },
      { code: 'EN-101', name: 'Functional English', credits: 3, grade: 'A' },
      { code: 'PH-101', name: 'Applied Physics', credits: 4, grade: 'B+' }
    ]
  },
  {
    semester: 'Semester 2 (Spring 2025)',
    gpa: '3.75',
    credits: 18,
    courses: [
      { code: 'CS-201', name: 'Object Oriented Programming', credits: 4, grade: 'A' },
      { code: 'CS-202', name: 'Digital Logic Design', credits: 4, grade: 'A-' },
      { code: 'MT-201', name: 'Multivariate Calculus', credits: 3, grade: 'B+' },
      { code: 'IS-101', name: 'Islamic Studies / Ethics', credits: 2, grade: 'A' },
      { code: 'PK-101', name: 'Pakistan Studies', credits: 2, grade: 'A' },
      { code: 'EN-102', name: 'Technical Writing', credits: 3, grade: 'A' }
    ]
  },
  {
    semester: 'Semester 3 (Fall 2025)',
    gpa: '3.76',
    credits: 18,
    courses: [
      { code: 'CS-204', name: 'Data Structures & Algorithms', credits: 4, grade: 'A' },
      { code: 'CS-205', name: 'Computer Architecture & Assembly', credits: 4, grade: 'B+' },
      { code: 'ST-201', name: 'Probability & Statistics', credits: 3, grade: 'A' },
      { code: 'CS-210', name: 'Web Technologies', credits: 3, grade: 'A' },
      { code: 'MG-201', name: 'Principles of Management', credits: 3, grade: 'A-' }
    ]
  },
  {
    semester: 'Semester 4 (Spring 2026)',
    gpa: '3.82',
    credits: 19,
    courses: [
      { code: 'CS-208', name: 'Operating Systems', credits: 4, grade: 'A' },
      { code: 'CS-212', name: 'Theory of Automata', credits: 3, grade: 'A-' },
      { code: 'CS-218', name: 'Human Computer Interaction', credits: 3, grade: 'A' },
      { code: 'MT-205', name: 'Differential Equations', credits: 3, grade: 'A' },
      { code: 'CS-220', name: 'Mobile Application Dev', credits: 3, grade: 'A' },
      { code: 'SS-201', name: 'Professional Practices & Ethics', credits: 3, grade: 'A' }
    ]
  }
];

export const DEMO_NOTICES = [
  {
    id: 'n-1',
    date: 'October 10, 2026',
    title: 'Midterm Examination Schedule Announcement for Fall 2026',
    priority: 'High',
    text: 'Midterm examinations for all BS and MS computer science batches will commence from November 09, 2026. Hall tickets and seating plans will be accessible on this portal.'
  },
  {
    id: 'n-2',
    date: 'October 06, 2026',
    title: 'Final Year Project (FYP-I) Proposal Submission Deadline',
    priority: 'High',
    text: 'All 7th semester BSCS students must submit their initial Project Proposal Document signed by their respective supervisor before October 25, 2026.'
  },
  {
    id: 'n-3',
    date: 'September 29, 2026',
    title: 'IEEE Student Branch & ACM-W Society Registration Drive',
    priority: 'Normal',
    text: 'Registrations are open for the 2026-2027 executive body and general members of the ACM-W Student Chapter. Forms available in Room 112.'
  }
];
