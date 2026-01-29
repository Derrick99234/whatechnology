"use client";
import React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

// 1. Define the TypeScript Interface for a Team Member (Used for the Founder)
interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
}

// 2. Sample Data for the Team (Using the first entry as the Founder)
const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Anya Sharma",
    title: "Chief Executive Officer & Founder",
    bio: "Visionary leader driving innovation and strategy across all domains. Specializes in scalable enterprise solutions and market expansion.",
    imageUrl: "/founder.jpg",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "anya@example.com",
    },
  },
  // The rest of the team data is now ignored for the founder section
  {
    id: 2,
    name: "Liam O'Connell",
    title: "CTO",
    bio: "...",
    imageUrl: "...",
    social: { linkedin: "#", twitter: "#", email: "" },
  },
];

// 3. Social Links Utility Component (for reusability)
const SocialLinks: React.FC<{ social: TeamMember["social"]; name: string }> = ({
  social,
  name,
}) => (
  <div className="flex space-x-4 mt-6">
    <a
      href={social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`LinkedIn profile of ${name}`}
      className="text-gray-500 hover:text-blue-700 dark:text-gray-400 dark:hover:text-blue-400 transition duration-300 transform hover:scale-110"
    >
      <Linkedin size={24} />
    </a>
    <a
      href={social.twitter}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Twitter profile of ${name}`}
      className="text-gray-500 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition duration-300 transform hover:scale-110"
    >
      <Twitter size={24} />
    </a>
    <a
      href={`mailto:${social.email}`}
      aria-label={`Email ${name}`}
      className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 transition duration-300 transform hover:scale-110"
    >
      <Mail size={24} />
    </a>
  </div>
);

// 4. Main App Component
const Founder: React.FC = () => {
  // Use the first member as the founder
  const founder = teamData[0];

  if (!founder) {
    return (
      <section className="py-24 text-center ">
        <p className="text-red-500 dark:text-red-400">Founder data is currently unavailable.</p>
      </section>
    );
  }

  return (
    // Section Container: Responsive padding and light background
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background text-foreground transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base font-semibold text-muted-foreground uppercase tracking-wider"
          >
            Leadership & Vision
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
          >
            Meet the Founder, {founder.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300"
          >
            Anya established our company with a singular focus: transforming
            complex technology into simple, scalable business solutions.
          </motion.p>
        </div>

        {/* Founder Detail Block (Prominent 2-Column Layout) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto border border-border transition-colors duration-300"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT COLUMN: Image */}
            <div className="relative h-96 lg:h-auto group">
              <Image
                className="w-full h-full object-cover object-center lg:object-top transition-transform duration-700 group-hover:scale-105"
                src={
                  "https://cdn.pixabay.com/photo/2019/12/04/09/30/man-4672229_1280.jpg"
                }
                alt={`Portrait of ${founder.name}`}
                width={400}
                height={400}
              />
              {/* Stylish Overlay Accent */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
            </div>

            {/* RIGHT COLUMN: Bio and Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-1">
                Our Inspiration
              </span>
              <h3 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                {founder.name}
              </h3>
              <p className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
                {founder.title}
              </p>

              {/* Detailed Bio/Quote Block */}
              <div className="bg-secondary border border-border p-4 mb-6 rounded-lg shadow-inner transition-colors duration-300">
                <p className="text-gray-700 dark:text-gray-300 italic">
                  &ldquo;{founder.bio} My personal mission is to empower
                  businesses globally through technology that is both
                  sophisticated and accessible.&ldquo;
                </p>
              </div>

              <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed">
                Anya brings over two decades of experience in enterprise
                software architecture and holds several patents in cloud-native
                security. She is a dedicated advocate for open-source
                initiatives and scalable solutions.
              </p>

              <SocialLinks social={founder.social} name={founder.name} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
