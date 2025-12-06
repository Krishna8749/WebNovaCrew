export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
  skills: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  featured?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Arjun Kapoor",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Arjun founded Web Nova Crew with a vision to make world-class web development accessible to businesses of all sizes. With 12+ years of experience in tech leadership at companies like Infosys and Wipro, he leads our strategic direction and client relationships.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    skills: ["Strategic Planning", "Business Development", "Tech Leadership", "Client Relations"],
    social: {
      linkedin: "https://linkedin.com/in/arjunkapoor",
      twitter: "https://twitter.com/arjunkapoor",
    },
    featured: true,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "CTO & Co-Founder",
    department: "Leadership",
    bio: "Priya oversees all technical operations and architecture decisions. Former senior engineer at Google, she brings Silicon Valley best practices to every project. She's passionate about building scalable systems and mentoring the next generation of developers.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    skills: ["System Architecture", "Cloud Infrastructure", "Team Leadership", "React", "Node.js"],
    social: {
      linkedin: "https://linkedin.com/in/priyasharma",
      github: "https://github.com/priyasharma",
    },
    featured: true,
  },
  {
    id: "3",
    name: "Rahul Verma",
    role: "Lead Full-Stack Developer",
    department: "Engineering",
    bio: "Rahul leads our web development team with expertise in React, Next.js, and Node.js. He's delivered 30+ successful projects and is known for writing clean, maintainable code. He also conducts technical interviews and training sessions.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    social: {
      linkedin: "https://linkedin.com/in/rahulverma",
      github: "https://github.com/rahulverma",
    },
    featured: true,
  },
  {
    id: "4",
    name: "Neha Gupta",
    role: "Design Lead",
    department: "Design",
    bio: "Neha heads our UI/UX design team, bringing 8 years of experience from agencies in Mumbai and Bangalore. She's passionate about creating designs that are both beautiful and functional, with a focus on accessibility and user research.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    skills: ["UI Design", "UX Research", "Figma", "Design Systems", "Prototyping"],
    social: {
      linkedin: "https://linkedin.com/in/nehagupta",
      twitter: "https://twitter.com/nehagupta",
    },
    featured: true,
  },
  {
    id: "5",
    name: "Amit Kumar",
    role: "SEO & Marketing Head",
    department: "Marketing",
    bio: "Amit leads our digital marketing and SEO efforts. With certifications from Google and HubSpot, he's helped clients achieve page 1 rankings for competitive keywords. He's data-driven and passionate about measurable results.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    skills: ["SEO", "Content Strategy", "Google Analytics", "PPC", "Social Media"],
    social: {
      linkedin: "https://linkedin.com/in/amitkumar",
      twitter: "https://twitter.com/amitkumar",
    },
    featured: true,
  },
  {
    id: "6",
    name: "Vikram Singh",
    role: "Mobile Lead",
    department: "Engineering",
    bio: "Vikram specializes in Flutter and React Native development. He's built 15+ mobile apps with millions of downloads. He's passionate about creating smooth, native-like experiences on both iOS and Android.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    skills: ["Flutter", "React Native", "iOS", "Android", "Firebase"],
    social: {
      linkedin: "https://linkedin.com/in/vikramsingh",
      github: "https://github.com/vikramsingh",
    },
    featured: true,
  },
  {
    id: "7",
    name: "Ananya Reddy",
    role: "Senior Backend Developer",
    department: "Engineering",
    bio: "Ananya is our backend expert, specializing in Node.js, Python, and cloud architecture. She designs scalable APIs and database systems that power our most demanding applications.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=400",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker"],
    social: {
      linkedin: "https://linkedin.com/in/ananyareddy",
      github: "https://github.com/ananyareddy",
    },
  },
  {
    id: "8",
    name: "Karan Mehta",
    role: "DevOps Engineer",
    department: "Engineering",
    bio: "Karan ensures our deployments are smooth and our infrastructure is rock-solid. He's implemented CI/CD pipelines and monitoring systems that keep our clients' applications running 24/7.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Monitoring"],
    social: {
      linkedin: "https://linkedin.com/in/karanmehta",
      github: "https://github.com/karanmehta",
    },
  },
  {
    id: "9",
    name: "Shreya Patel",
    role: "UI/UX Designer",
    department: "Design",
    bio: "Shreya creates beautiful, user-centered designs for web and mobile applications. She's skilled in user research, wireframing, and creating design systems that scale.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Illustration"],
    social: {
      linkedin: "https://linkedin.com/in/shreyapatel",
    },
  },
  {
    id: "10",
    name: "Rohan Joshi",
    role: "Frontend Developer",
    department: "Engineering",
    bio: "Rohan is passionate about creating pixel-perfect, performant user interfaces. He specializes in React and has a keen eye for animations and micro-interactions.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400",
    skills: ["React", "TypeScript", "CSS", "Framer Motion", "Testing"],
    social: {
      linkedin: "https://linkedin.com/in/rohanjoshi",
      github: "https://github.com/rohanjoshi",
    },
  },
  {
    id: "11",
    name: "Meera Iyer",
    role: "QA Lead",
    department: "Engineering",
    bio: "Meera leads our quality assurance efforts, ensuring every product we deliver is bug-free and performs flawlessly. She's implemented automated testing frameworks that catch issues before they reach production.",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=400",
    skills: ["Test Automation", "Selenium", "Cypress", "API Testing", "Performance Testing"],
    social: {
      linkedin: "https://linkedin.com/in/meeraiyer",
    },
  },
  {
    id: "12",
    name: "Aditya Nair",
    role: "Project Manager",
    department: "Operations",
    bio: "Aditya keeps our projects on track and our clients happy. With PMP certification and 6 years of experience, he's mastered the art of balancing scope, timeline, and quality.",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?auto=format&fit=crop&q=80&w=400",
    skills: ["Agile", "Scrum", "Client Communication", "Risk Management", "Jira"],
    social: {
      linkedin: "https://linkedin.com/in/adityanair",
    },
  },
];

export const departments = ["All", "Leadership", "Engineering", "Design", "Marketing", "Operations"];
export const getFeaturedTeam = () => teamMembers.filter(member => member.featured);
export const getTeamByDepartment = (dept: string) => 
  dept === "All" ? teamMembers : teamMembers.filter(member => member.department === dept);
