import React from "react";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

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
      className="text-gray-500 hover:text-blue-700 transition duration-300 transform hover:scale-110"
    >
      <Linkedin size={24} />
    </a>
    <a
      href={social.twitter}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Twitter profile of ${name}`}
      className="text-gray-500 hover:text-blue-400 transition duration-300 transform hover:scale-110"
    >
      <Twitter size={24} />
    </a>
    <a
      href={`mailto:${social.email}`}
      aria-label={`Email ${name}`}
      className="text-gray-500 hover:text-red-500 transition duration-300 transform hover:scale-110"
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
        <p className="text-red-500">Founder data is currently unavailable.</p>
      </section>
    );
  }

  return (
    // Section Container: Responsive padding and light background
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-16">
          <p className="text-base font-semibold text-green-600 uppercase tracking-wider">
            Leadership & Vision
          </p>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-green-600 leading-tight">
            Meet the Founder, {founder.name}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-white">
            Anya established our company with a singular focus: transforming
            complex technology into simple, scalable business solutions.
          </p>
        </div>

        {/* Founder Detail Block (Prominent 2-Column Layout) */}
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT COLUMN: Image */}
            <div className="relative h-96 lg:h-auto">
              <Image
                className="w-full h-full object-cover object-center lg:object-top"
                src={
                  "https://cdn.pixabay.com/photo/2019/12/04/09/30/man-4672229_1280.jpg"
                }
                alt={`Portrait of ${founder.name}`}
                width={400}
                height={400}
              />
              {/* Stylish Overlay Accent */}
              <div className="absolute inset-0 bg-linear-to-t from-green-900/50 via-green-900/10 to-transparent"></div>
            </div>

            {/* RIGHT COLUMN: Bio and Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-medium text-green-600 uppercase tracking-widest mb-1">
                Our Inspiration
              </span>
              <h3 className="text-4xl font-extrabold text-green-600 mb-2">
                {founder.name}
              </h3>
              <p className="text-xl font-semibold text-white mb-6">
                {founder.title}
              </p>

              {/* Detailed Bio/Quote Block */}
              <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6 rounded-lg shadow-inner">
                <p className="text-gray-700 italic">
                  &ldquo;{founder.bio} My personal mission is to empower
                  businesses globally through technology that is both
                  sophisticated and accessible.&ldquo;
                </p>
              </div>

              <p className="text-gray-500 text-base leading-relaxed">
                Anya brings over two decades of experience in enterprise
                software architecture and holds several patents in cloud-native
                security. She is a dedicated advocate for open-source
                initiatives and scalable solutions.
              </p>

              <SocialLinks social={founder.social} name={founder.name} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
