import React from "react";
import ContactUs from "../contact/page";

// --- Type Definitions ---
interface ServiceCardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

interface ProcessStepData {
  step: number;
  title: string;
  description: string;
}

interface FeatureData {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TestimonialData {
  quote: string;
  name: string;
  title: string;
}

// --- Lucide Icons (Inline SVGs for single file) ---
// Existing Icons
const Code = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const Shield = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
const Cloud = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
);
const Terminal = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m7 9l-3 3l3 3" />
    <path d="M10 12h7" />
  </svg>
);
const Briefcase = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5l7 7l-7 7" />
  </svg>
);

// New Icons
const Target = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);
const Zap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
const Globe = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);
const Quote = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.5-2.5-2-5-2V2H2v1C2 10 6 11 9 11v8c0 1-1 1-2 1H3z" />
    <path d="M14 21c3 0 7-1 7-8V5c0-1.5-2.5-2-5-2V2h-3v1C12 10 16 11 19 11v8c0 1-1 1-2 1h-4z" />
  </svg>
);

// --- Mock Data ---
const serviceCards: ServiceCardData[] = [
  {
    id: 1,
    icon: <Code className="w-8 h-8 text-green-500" />,
    title: "Software Development & Engineering",
    description:
      "We bring your vision to life with custom, scalable, and secure software solutions tailored to your unique business needs.",
    details: [
      "Full-stack development",
      "Mobile App creation (iOS/Android)",
      "Legacy system modernization",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    icon: <Shield className="w-8 h-8 text-green-500" />,
    title: "DevOps & Security",
    description:
      "Streamline your operations and fortify your infrastructure with automated deployment and best-in-class security practices.",
    details: [
      "CI/CD pipeline implementation",
      "Cloud security hardening (AWS/Azure)",
      "Vulnerability assessment & patching",
      "Infrastructure as Code (IaC) setup",
    ],
  },
  {
    id: 3,
    icon: <Cloud className="w-8 h-8 text-green-500" />,
    title: "Cloud Services",
    description:
      "Harness the power of the cloud for scalability, agility, and reduced infrastructure costs. We handle migration, management, and optimization.",
    details: [
      "Cloud migration strategy",
      "Managed cloud infrastructure",
      "Cost optimization and governance",
      "Serverless computing solutions",
    ],
  },
  {
    id: 4,
    icon: <Terminal className="w-8 h-8 text-green-500" />,
    title: "IT Consulting",
    description:
      "Strategic guidance to help you navigate complex technological challenges and align IT strategy with overall business objectives.",
    details: [
      "Digital transformation strategy",
      "Technology roadmap development",
      "Enterprise architecture review",
      "Process automation consulting",
    ],
  },
  {
    id: 5,
    icon: <Briefcase className="w-8 h-8 text-green-500" />,
    title: "Technical Recruiting",
    description:
      "Find and onboard top-tier technical talent quickly and efficiently. We specialize in sourcing hard-to-find skillsets globally.",
    details: [
      "Headhunting for senior engineers",
      "Volume hiring for startups",
      "Contract-to-hire services",
      "Talent market analysis",
    ],
  },
];

const processSteps: ProcessStepData[] = [
  {
    step: 1,
    title: "Choose A Service",
    description:
      "Define your technology need and select the service that fits your goal.",
  },
  {
    step: 2,
    title: "Make Appointment",
    description: "Schedule a discovery call with our solutions architect team.",
  },
  {
    step: 3,
    title: "Project Details",
    description:
      "We formalize scope, timelines, and deliverables in a proposal.",
  },
  {
    step: 4,
    title: "Enjoy Your Services",
    description:
      "Our team delivers and supports your tailored solution to meet your requirements.",
  },
];

const featuresData: FeatureData[] = [
  {
    icon: <Target className="w-10 h-10 text-green-400" />,
    title: "Strategic Focus",
    description:
      "We don't just code; we align every solution with your long-term business goals, ensuring maximum ROI and impact.",
  },
  {
    icon: <Zap className="w-10 h-10 text-green-400" />,
    title: "Rapid Deployment",
    description:
      "Leveraging DevOps and automated CI/CD pipelines, we deliver high-quality, stable solutions faster than the competition.",
  },
  {
    icon: <Globe className="w-10 h-10 text-green-400" />,
    title: "Global Expertise",
    description:
      "Access a worldwide talent pool of certified engineers and architects experienced in diverse technologies and markets.",
  },
];

const testimonialsData: TestimonialData[] = [
  {
    quote:
      "ExcelSolution took our legacy system and modernized it seamlessly. The speed and security improvements were immediate and significant.",
    name: "Jane Doe, CTO",
    title: "FinTech Innovations Inc.",
  },
  {
    quote:
      "The strategic IT consulting we received was invaluable. They helped us define a clear roadmap that cut our cloud costs by 20%.",
    name: "John Smith, CEO",
    title: "Global Commerce Ltd.",
  },
];

// --- Sub-Components ---

const ServiceCard: React.FC<ServiceCardData> = ({
  icon,
  title,
  description,
  details,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-green-500/50 transition duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <div className="flex items-start mb-4">
      {icon}
      <h3 className="ml-4 text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 grow">{description}</p>
    <ul className="space-y-2 text-sm text-gray-700">
      {details.map((detail, index) => (
        <li key={index} className="flex items-start">
          <ArrowRight className="w-4 h-4 text-green-50 shrink-0 mt-1 mr-2" />
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ProcessStep: React.FC<ProcessStepData> = ({
  step,
  title,
  description,
}) => (
  <div className="text-center p-4 max-[395px]:p-2">
    <div className="relative inline-block mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-green-500 text-white rounded-full text-xl font-bold shadow-lg">
        {step}
      </div>
    </div>
    <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
    <p className="text-green-50 text-sm md:max-w-xs mx-auto">{description}</p>
  </div>
);

const FeatureCard: React.FC<FeatureData> = ({ icon, title, description }) => (
  <div className="text-center p-6 md:p-8 rounded-xl border border-green-700/50 bg-gray-800/50 shadow-2xl">
    <div className="mx-auto w-fit p-3 bg-green-900/50 rounded-full mb-4">
      {icon}
    </div>
    <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
    <p className="text-green-50">{description}</p>
  </div>
);

const TestimonialCard: React.FC<TestimonialData> = ({ quote, name, title }) => (
  <div className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-green-500 h-full flex flex-col">
    <Quote className="w-8 h-8 text-green-500 mb-4" />
    <p className="text-gray-700 italic mb-6 grow">&quot;{quote}&quot;</p>
    <div className="border-t pt-4">
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-green-50">{title}</p>
    </div>
  </div>
);

// --- Main Layout Component (Body Only) ---

export default function App() {
  return (
    <div className="font-sans">
      {/* 2. Hero Section */}
      <section
        className={`relative min-h-[50vh] bg-[#020617] overflow-hidden flex flex-col items-center pt-20 pb-12 px-6  `}
      >
        {/* Subtle Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content (Headline) */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white">
                Our Services - Built for Growth, Backed by{" "}
                <span className="text-green-400">Experience</span>
              </h1>
              <p className="text-lg text-green-50">
                At ExcelSolution, we create exceptional experiences and software
                solutions, transforming strategies into tangible results. We
                empower businesses to excel in a rapidly changing digital
                landscape by leveraging cutting-edge technology and a team of
                global experts.
              </p>
            </div>
          </div>
        </div>
        {/* Decorative Blur */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,var(--tw-color-green-900)_0%,transparent_70%)]"></div>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section
        id="services"
        className="py-16 bg-gray-50 -mt-8 rounded-t-3xl shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card) => (
              <ServiceCard key={card.id} {...card} />
            ))}

            {/* Custom CTA Card */}
            <div className="bg-green-700/90 p-6 rounded-xl shadow-xl flex flex-col justify-center items-center text-center h-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Talk
              </h3>
              <p className="text-green-200 mb-6">
                Ready to extend your team or start a new project? Contact us
                today to discuss your next technical challenge.
              </p>
              <button className="w-full py-3 px-6 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-[1.02]">
                Request Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (New Section) */}
      <section id="features" className="py-20 bg-gray-900 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-500 text-sm font-semibold uppercase tracking-wider">
            Our Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-12">
            The ExcelSolution <span className="text-green-400">Difference</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client Testimonials (New Section) */}
      <section
        id="process"
        className="py-20 bg-gray-900 relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(30, 41, 59, 1) 0%, rgba(17, 24, 39, 1) 100%)",
        }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">
            Our simple <span className="text-green-400">4 step process</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-[395px]:gap-4">
            {processSteps.map((step) => (
              <ProcessStep key={step.step} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Simple 4 Step Process (Existing Section) */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-12">
            What Our <span className="text-green-600">Clients Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
}
