import stairpayProject from "../assets/stairpayProject.png";
import fplmProject from "../assets/fplmProject.png"
import genAIproject from "../assets/genAIproject.png"
import instamoProject from "../assets/instamoProject.png"
import fsmProject from "../assets/fsmProject.png"
import travelAgencyProject from "../assets/travelAgencyProject.png"

const projects = [
  {
    id: "proj-1",
    title: "Oracle's Field Service Management SuiteApp",
    description:
      "Developed and maintained modular bundles for Oracle NetSuite's Field Service Management SuiteApp, including mobile support and agent scheduling. Improved stability, feature releases, and automation testing across assets, tasks, expenses, projects, and cases.",
    tech: ["SuiteScript", "JavaScript", "NetSuite", "Groovy", "SonarQube"],
    image: fsmProject,
    repoLink: "",
    liveLink: "",
  },
  {
    id: "proj-2",
    title: "Stairpay Mortgage Analytics Platform",
    description:
      "Built the core analytics product for Stairpay’s staircase mortgage scheme, enabling customer financial insights and reporting. Implemented frontend with Next.js and TailwindCSS, integrated Supabase backend, and deployed via AWS.",
    tech: ["Next js", "React", "Supabase", "TailwindCSS", "AWS"],
    image: "",
    repoLink: "",
    liveLink: "",
  },
  {
    id: "proj-3",
    title: "Stairpay Customer Onboarding System",
    description:
      "Created a dynamic onboarding questionnaire system to streamline mortgage customer intake and qualification. Integrated backend services with Supabase and deployed infrastructure via AWS CodeCommit and CodeDeploy.",
    tech: ["Next js", "Supabase", "AWS CodeDeploy", "AWS CodeCommit"],
    image: stairpayProject,
    repoLink: "",
    liveLink: "",
  },
  {
    id: "proj-4",
    title: "AI-Powered PLM Feature (Infor)",
    description:
      "Led development of an AI-powered feature within Infor’s Product Lifecycle Management system to improve predictive insights and enterprise product workflows for thousands of active users.",
    tech: ["React", ".NET", "C#", "ElasticSearch", "Jenkins"],
    image: genAIproject,
    repoLink: "",
    liveLink: "",
  },
  {
    id: "proj-5",
    title: "Infor CloudSuite PLM for Fashion",
    description:
      "Maintained and enhanced a cloud-native PLM platform for fashion brands, improving modules across design, planning, development, and collaboration workflows to accelerate product lifecycle execution.",
    tech: ["React", ".NET", "JavaScript", "AWS", "ElasticSearch", "MySQL"],
    image: fplmProject,
    repoLink: "",
    liveLink: "",
  },
  {
    id: "proj-6",
    title: "Mortgage Automation & Secure API Architecture (Instamo)",
    description:
      "Engineered an end-to-end automation system to process mortgage applications by extracting data from PDFs and automatically submitting them to lender/bank portals. Built Playwright automation scripts for browser-based submission flows and designed a secure AWS-based backend architecture with PDF virus scanning, rate limiting via Redis, AWS WAF protection, Lambda-based APIs, EC2 automation runners, and AWS Textract for intelligent PDF data extraction.",
    tech: [
      "Playwright JS",
      "AWS Lambda",
      "AWS EC2",
      "AWS Textract",
      "AWS WAF",
      "Redis",
      "Node.js",
      "API Architecture",
    ],
    image: instamoProject,
    repoLink: "",
    liveLink: "",
  },
  {
    id: "proj-7",
    title: "Travel Agency Landing Platform",
    description:
      "Developed a visually immersive and high-performance travel agency landing platform using Next.js with server-side rendering and static generation for SEO optimization. Implemented advanced UI animations and interactive scroll effects using Framer Motion, optimized Lighthouse performance scores, integrated dynamic booking inquiry forms with API routes, and deployed via Vercel with CI/CD workflows.",
    tech: [
      "Next.js",
      "React",
      "Framer Motion",
      "TypeScript",
      "TailwindCSS",
      "Vercel",
      "SEO Optimization",
      "API Routes",
    ],
    image: travelAgencyProject,
    repoLink: "",
    liveLink: "",
  },
];

export default projects;
