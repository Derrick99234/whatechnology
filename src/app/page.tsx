"use client";
import React, { useState, FC } from "react";
import {
  Zap,
  Shield,
  Cpu,
  BarChart3,
  Quote,
  ArrowRight,
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
import GlobalReach from "@/components/global-reach";
import Link from "next/link";
import { motion } from "framer-motion";

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

// --- FAQ Item Component for Accordion Functionality ---
const FAQItem = ({ question, answer }: FAQData) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg hover:text-green-600 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-gray-900 dark:text-white">{question}</span>
        <span className="ml-6 shrink-0">
          <svg
            className={`w-6 h-6 text-green-500 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
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
  <section className="py-20 bg-background relative transition-colors duration-300">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content Block */}
      <motion.div
        className="md:order-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className="text-sm font-semibold text-green-600 dark:text-[#4ade80] uppercase tracking-widest block mb-2">
          Deep Domain Knowledge
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
          Our Experts are Your Competitive Edge
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          We bring together certified engineers, data scientists, and security
          analysts to tackle your hardest digital transformation challenges.
          Unlike generic agencies, our focus is specialization in AI, Cloud, and
          advanced infrastructure.
        </p>
        <ul className="space-y-4 text-gray-700 dark:text-gray-200">
          <li className="flex items-start">
            <Cpu size={20} className="text-green-500 mr-3 mt-1 shrink-0" />
            <p>
              <strong>Certified Engineers:</strong> Top-tier certifications
              across AWS, Azure, and GCP.
            </p>
          </li>
          <li className="flex items-start">
            <BarChart3
              size={20}
              className="text-green-500 mr-3 mt-1 shrink-0"
            />
            <p>
              <strong>Data-Driven:</strong> Every decision is backed by
              analytics and strategic insights.
            </p>
          </li>
          <li className="flex items-start">
            <Shield size={20} className="text-green-500 mr-3 mt-1 shrink-0" />
            <p>
              <strong>Zero-Trust Security:</strong> Implementing the latest
              protocols for maximum protection.
            </p>
          </li>
        </ul>
        <a
          href="/about"
          className="mt-8 inline-flex items-center space-x-2 text-green-600 dark:text-[#4ade80] font-semibold hover:text-green-700 dark:hover:text-[#22c55e] transition duration-300"
        >
          <span>Meet the Team</span>
          <ArrowRight size={18} />
        </a>
      </motion.div>

      <motion.div
        className="md:order-2 bg-secondary p-6 rounded-3xl shadow-2xl relative overflow-hidden h-96"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/Client-and-Technology-1536x638.png"
              alt="Project planning session"
              fill
              className="object-cover rounded-2xl"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
            <div className="absolute inset-0 bg-white/20 dark:bg-[#1a1a2e]/40 rounded-2xl" />
            <div className="absolute bottom-0 left-0 w-full bg-white/90 dark:bg-[#1a1a2e]/70 backdrop-blur-sm p-4 rounded-b-2xl">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Project Planning &amp; Strategy Session
              </p>
            </div>
          </div>
        </div>
      </motion.div>
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

  const ServiceCard: React.FC<ServiceCardData> = ({
    icon,
    title,
    description,
    details,
  }) => (
    <div className="bg-card border border-border p-6 rounded-xl shadow-xl hover:shadow-green-500/10 transition duration-300 transform hover:-translate-y-1 h-full flex flex-col">
      <div className="flex items-start mb-4">
        {icon}
        <h3 className="ml-4 text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4 grow">{description}</p>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight className="w-4 h-4 text-green-500 shrink-0 mt-1 mr-2" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <main className="bg-background text-foreground">
      {/* 1. HERO SECTION (SEO H1) */}
      <Hero />
      <section id="services" className="py-16 bg-background shadow-2xl transition-colors duration-300">
        <div className="flex items-center max-[614px]:flex-col max-[614px]:items-start px-4 max-[614px]:gap-4 justify-around w-full py-16">
          <div className="flex">
            <Zap size={32} className="text-green-500 mr-3 shrink-0" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              What We Do Best
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            We have What it takes Whether you&apos;re a fast-growing startup or
            an enterprise organization
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((card) => (
              <ServiceCard key={card.id} {...card} />
            ))}

            {/* Custom CTA Card */}
            <div className="bg-card border border-border p-6 rounded-xl shadow-xl flex flex-col justify-center items-center text-center h-full">
              <h3 className="text-2xl font-bold mb-4">
                Let&apos;s Talk
              </h3>
              <p className="text-muted-foreground mb-6">
                Ready to extend your team or start a new project? Contact us
                today to discuss your next technical challenge.
              </p>
              <Link
                href={"/contact"}
                className="w-full py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md hover:bg-green-600 transition transform hover:scale-[1.02]"
              >
                Request Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE / VISUAL BLOCK */}
      <ExpertiseSection />

      <WhyChooseSection />

      <GlobalReach />

      {/* 3. CORE SERVICES SECTION */}
      <section id="services" className="py-20 bg-background">
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
                className="p-8 bg-card rounded-2xl shadow-lg border border-border border-t-4 border-green-500 transform hover:scale-[1.02] transition duration-300"
              >
                <service.icon size={36} className="text-green-500 mb-4" />
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
      <section className="py-20 bg-background relative transition-colors duration-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            Hear From Our Clients
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Real results from businesses that achieved their digital
            transformation goals with Whatechnogy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                className="p-8 bg-card rounded-xl shadow-2xl border border-border border-t-8 border-green-500 transform hover:shadow-green-500/10 transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Quote size={32} className="text-green-500 mb-4 opacity-50" />
                <p className="italic text-lg text-gray-700 dark:text-gray-300 mb-6 min-h-[120px]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="font-semibold text-gray-900 dark:text-white pt-4 border-t border-gray-200 dark:border-gray-700">
                  {t.name}
                </div>
                <div className="text-sm text-green-600 dark:text-[#4ade80]">
                  {t.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS SECTION */}
      <section className="py-20 bg-background relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Find quick answers about our services, process, and technology focus
            areas.
          </p>

          <div className="bg-card border border-border p-6 rounded-2xl shadow-xl">
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
      <section className="bg-green-600 py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Connect with a Whatechnogy expert today to discuss your next Cloud
            or AI project.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-background text-green-600 text-xl font-bold rounded-xl shadow-2xl hover:bg-muted transition duration-300 transform hover:scale-105"
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
    <div className="min-h-screen antialiased overflow-x-hidden">
      <MainContent />
      <ContactUs />
    </div>
  );
};

export default App;
