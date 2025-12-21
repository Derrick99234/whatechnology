"use client";
import React, { useState, FC } from "react";
import {
  Zap,
  Shield,
  Cpu,
  BarChart3,
  Quote,
  ArrowRight,
  TrendingUp,
  Globe,
  Code,
  Cloud,
  Terminal,
  Briefcase,
} from "lucide-react";
import { LucideIcon } from "lucide-react"; // Import LucideIcon type for props

import Image from "next/image";
import ContactUs from "./contact/page";
import Hero from "@/components/demoHeroSection";
import WhyChooseSection from "@/components/why-choose-us";

// --- Interfaces for Data and Props ---

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  keywords: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

interface FAQData {
  question: string;
  answer: string;
}

interface ServiceCardData {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

// --- Logo Bar Component (Section 2) ---
const LogoBar: FC = () => {
  // Placeholder logos using placehold.co and a dark background for contrast
  const clientLogos: string[] = [
    "/Client-and-Technology-1536x638.png",
    "https://cdn.pixabay.com/photo/2018/04/01/09/54/round-3280402_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/01/09/54/round-3280402_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/01/09/54/round-3280402_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/04/01/09/54/round-3280402_1280.jpg",
  ];

  return (
    <section className="bg-gray-900 dark:bg-gray-900 py-10 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-sm font-semibold text-center text-gray-400 uppercase tracking-wider mb-8">
          Trusted by industry leaders and disruptive startups
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {clientLogos.map((logo, index) => (
            <Image
              key={index}
              width={120}
              height={40}
              className="h-8 grayscale brightness-150 opacity-70 hover:opacity-100 transition duration-300 transform hover:scale-105"
              src={logo}
              alt={`Client Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- FAQ Item Component for Accordion Functionality ---
const FAQItem = ({ question, answer }: FAQData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg hover:text-indigo-600 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-gray-900 dark:text-white">{question}</span>
        <span className="ml-6 shrink-0">
          <svg
            className={`w-6 h-6 text-indigo-500 transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </span>
      </button>
      {/* Dynamic visibility for the answer */}
      {isOpen && (
        <div className="pb-4 pt-2 text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

// --- Expertise/About Section (Section 4 - Visually Rich) ---
const ExpertiseSection: FC = () => (
  <section className="py-20 bg-[#020617]">
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content Block */}
      <div className="md:order-1">
        <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest block mb-2">
          Deep Domain Knowledge
        </span>
        <h2 className="text-4xl font-extrabold text-white mb-6">
          Our Experts are Your Competitive Edge
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          We bring together certified engineers, data scientists, and security
          analysts to tackle your hardest digital transformation challenges.
          Unlike generic agencies, our focus is specialization in AI, Cloud, and
          advanced infrastructure.
        </p>
        <ul className="space-y-4 text-gray-200">
          <li className="flex items-start">
            <Cpu size={20} className="text-indigo-500 mr-3 mt-1 shrink-0" />
            <p>
              <strong>Certified Engineers:</strong> Top-tier certifications
              across AWS, Azure, and GCP.
            </p>
          </li>
          <li className="flex items-start">
            <BarChart3
              size={20}
              className="text-indigo-500 mr-3 mt-1 shrink-0"
            />
            <p>
              <strong>Data-Driven:</strong> Every decision is backed by
              analytics and strategic insights.
            </p>
          </li>
          <li className="flex items-start">
            <Shield size={20} className="text-indigo-500 mr-3 mt-1 shrink-0" />
            <p>
              <strong>Zero-Trust Security:</strong> Implementing the latest
              protocols for maximum protection.
            </p>
          </li>
        </ul>
        <a
          href="/team"
          className="mt-8 inline-flex items-center space-x-2 text-indigo-500 font-semibold hover:text-indigo-600 transition duration-300"
        >
          <span>Meet the Team</span>
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Image/Visual Block - Mimicking the image's collaborative look */}
      <div className="md:order-2 bg-indigo-50 dark:bg-gray-900 p-6 rounded-3xl shadow-2xl relative overflow-hidden h-96">
        {/* Visual Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-full h-full bg-cover bg-center rounded-2xl"
            style={{
              backgroundImage: `url('https://cdn.pixabay.com/photo/2017/06/21/07/33/background-2426328_1280.jpg')`,
              backgroundSize: "cover",
              opacity: 0.8,
            }}
            // Removed onError as requested
          >
            {/* Overlay for a sleek, dark effect */}
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 rounded-b-2xl absolute bottom-0 w-full">
              <p className="text-sm font-semibold text-white">
                Project Planning &amp; Strategy Session
              </p>{" "}
              {/* Using HTML entity for '&' */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Content-Rich Main Content Component for Landing Page ---
const MainContent: FC = () => {
  // Updated Testimonials with a third entry
  const testimonials: Testimonial[] = [
    {
      quote:
        "Whatechnogy delivered a secure cloud migration that was faster and cheaper than quoted. True experts in digital transformation.",
      name: "Sarah J.",
      title: "CTO, GlobalTech",
    },
    {
      quote:
        "The AI solution they built revolutionized our inventory management. We saw a 30% reduction in waste within the first quarter.",
      name: "Mark K.",
      title: "Operations Director, RetailPro",
    },
    {
      quote:
        "The cyber security team is top-notch. Their proactive monitoring stopped a zero-day attack before it impacted our operations. Highly recommend their protection services.",
      name: "David L.",
      title: "CISO, SecureFin Corp",
    },
  ];

  // New FAQ Data
  const faqs: FAQData[] = [
    {
      question: "What is Whatechnogy's core expertise?",
      answer:
        "Whatechnogy specializes in digital transformation, focusing primarily on three core areas: Advanced AI & Machine Learning solutions, Scalable Cloud Infrastructure (AWS, Azure, GCP), and Proactive Cyber Security services.",
    },
    {
      question: "Which cloud platforms do you support?",
      answer:
        "We are platform-agnostic experts, offering migration, management, and optimization services across all major platforms, including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
    },
    {
      question: "How does Whatechnogy ensure security?",
      answer:
        "We employ a proactive security approach which includes continuous threat monitoring, regular penetration testing, managed security services (MSS), and ensuring compliance with industry-specific regulations like GDPR and HIPAA.",
    },
    {
      question: "Do you offer solutions for small businesses?",
      answer:
        "Yes, while we handle enterprise-level projects, we offer tailored, cost-effective technology packages for small and medium-sized businesses looking to leverage the power of cloud and automation.",
    },
  ];

  // Why Choose Us features data
  const differentiators: Differentiator[] = [
    {
      icon: Globe,
      title: "Global 24/7 Support",
      description:
        "Our dedicated engineering teams provide round-the-clock global monitoring and support, ensuring your critical systems never fail.",
    },
    {
      icon: Zap,
      title: "Agile Innovation",
      description:
        "We employ fast, iterative Agile and DevOps methodologies to accelerate deployment and ensure rapid delivery of business value.",
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description:
        "Focus on measurable results. We tie every solution to key performance indicators (KPIs) to guarantee a significant return on investment.",
    },
  ];

  const services: Service[] = [
    {
      icon: Cpu,
      title: "Advanced AI & Machine Learning",
      description:
        "Leverage cutting-edge artificial intelligence models to automate processes, predict market trends, and personalize customer experiences.",
      keywords: "AI, Machine Learning, Automation, Predictive Analytics",
    },
    {
      icon: Cloud,
      title: "Scalable Cloud Infrastructure",
      description:
        "Future-proof your business with robust, flexible, and fully managed cloud solutions (AWS, Azure, GCP). Ensure 99.99% uptime and global access.",
      keywords: "Cloud Computing, AWS, Azure, GCP, Scalability",
    },
    {
      icon: Shield,
      title: "Proactive Cyber Security",
      description:
        "Protect your critical assets from emerging threats. Our security experts provide continuous monitoring, penetration testing, and compliance solutions.",
      keywords: "Cyber Security, Threat Protection, Compliance, Pen Testing",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description:
        "Turn raw data into strategic business decisions. Implement powerful data visualization and reporting tools for measurable growth and clarity.",
      keywords:
        "Data Analytics, Business Intelligence, Visualization, Reporting",
    },
  ];

  const serviceCards: ServiceCardData[] = [
    {
      id: 1,
      icon: <Code className="w-8 h-8 text-indigo-500" />,
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
      icon: <Shield className="w-8 h-8 text-indigo-500" />,
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
      icon: <Cloud className="w-8 h-8 text-indigo-500" />,
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
      icon: <Terminal className="w-8 h-8 text-indigo-500" />,
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
      icon: <Briefcase className="w-8 h-8 text-indigo-500" />,
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

  const ServiceCard: React.FC<ServiceCardData> = ({
    icon,
    title,
    description,
    details,
  }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-indigo-500/50 transition duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex items-start mb-4">
        {icon}
        <h3 className="ml-4 text-xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 grow">{description}</p>
      <ul className="space-y-2 text-sm text-gray-700">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight className="w-4 h-4 text-indigo-500 shrink-0 mt-1 mr-2" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <main className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* 1. HERO SECTION (SEO H1) */}
      <Hero />
      {/* <section className="bg-gray-900 py-20 md:py-32 border-b border-indigo-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="text-sm font-semibold text-indigo-400 uppercase tracking-widest block mb-4">
            Future-Proof Your Business
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Digital Transformation Powered by{" "}
            <span className="text-indigo-400">Whatechnogy</span>
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
            We deliver innovative and scalable technology solutions in AI,
            Cloud, and Cyber Security to drive efficiency and competitive
            advantage in the digital age.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/contact"
              className="flex items-center space-x-2 px-8 max-[395px]:px-6 py-4 bg-indigo-500 text-white font-bold rounded-xl shadow-xl hover:bg-indigo-600 transition duration-300 transform hover:scale-105"
            >
              <span>Request a Demo</span>
              <ArrowRight size={20} />
            </a>
            <a
              href="/solutions"
              className="px-8 py-4 bg-gray-700 max-[395px]:px-6 text-gray-200 font-semibold rounded-xl shadow-md hover:bg-gray-600 transition duration-300"
            >
              Explore Solutions
            </a>
          </div>
        </div>
      </section> */}

      {/* 2. TRUST/LOGO BAR */}
      {/* <LogoBar /> */}

      <section id="services" className="py-16 bg-gray-50 shadow-2xl">
        <div className="flex items-center justify-around w-full py-16">
          <div className="flex">
            <Zap size={32} className="text-indigo-500 mr-3 shrink-0" />
            <h2 className="text-4xl font-bold text-gray-900">
              What We Do Best
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            We have What it takes Whether you’re a fast-growing startup or an
            enterprise organization
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card) => (
              <ServiceCard key={card.id} {...card} />
            ))}

            {/* Custom CTA Card */}
            <div className="bg-indigo-700/90 p-6 rounded-xl shadow-xl flex flex-col justify-center items-center text-center h-full">
              <h3 className="text-2xl font-bold text-white mb-4">
                Let&apos;s Talk
              </h3>
              <p className="text-indigo-200 mb-6">
                Ready to extend your team or start a new project? Contact us
                today to discuss your next technical challenge.
              </p>
              <button className="w-full py-3 px-6 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition transform hover:scale-[1.02]">
                Request Service
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE / VISUAL BLOCK */}
      <ExpertiseSection />

      {/* 5. WHY CHOOSE US / VALUE PROPOSITION (Sleek 3-Column Cards) */}
      {/* <section className="py-20 bg-gray-100 dark:bg-gray-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest block mb-2">
              The Whatechnogy Difference
            </span>
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Why Choose Whatechnogy?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We don&apos;t just implement technology; we engineer success. Our
              commitment to agility, support, and tangible results sets us
              apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border-b-4 border-indigo-500 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <diff.icon size={32} className="text-indigo-500 shrink-0" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {diff.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <WhyChooseSection />

      {/* 3. CORE SERVICES SECTION */}
      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            Our Core Technology Expertise
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-16 max-w-3xl mx-auto">
            As a leader in technology solutions, Whatechnogy focuses on the
            pillars essential for modern digital transformation and sustained
            business growth.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg border-t-4 border-indigo-500 transform hover:scale-[1.02] transition duration-300"
              >
                <service.icon size={36} className="text-indigo-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS / SOCIAL PROOF */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-white mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Real results from businesses that achieved their digital
            transformation goals with Whatechnogy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="p-8 bg-gray-800 rounded-xl shadow-2xl border-t-8 border-indigo-500 transform hover:shadow-indigo-500/50 transition duration-300"
              >
                <Quote size={32} className="text-indigo-500 mb-4 opacity-50" />
                <p className="italic text-lg text-gray-300 mb-6 min-h-[120px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="font-semibold text-white pt-4 border-t border-gray-200 dark:border-gray-700">
                  {t.name}
                </div>
                <div className="text-sm text-indigo-600 dark:text-indigo-400">
                  {t.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Find quick answers about our services, process, and technology focus
            areas.
          </p>

          <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-xl">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA SECTION */}
      <section className="bg-indigo-600 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Connect with a Whatechnogy expert today to discuss your next Cloud
            or AI project.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-white text-indigo-600 text-xl font-bold rounded-xl shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </main>
  );
};

// --- Main Application Component ---
const App: FC = () => {
  return (
    <div className="min-h-screen antialiased">
      <MainContent />
      <ContactUs />
    </div>
  );
};

export default App;
