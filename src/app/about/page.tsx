import React from "react";
import Image from "next/image";
// Importing Lucide icons for a modern look
import { Award, TrendingUp, Briefcase } from "lucide-react";
import ValueSection from "@/components/value-section";
import Founder from "@/components/founder";

// --- Type Definitions ---

interface StatCardProps {
  value: string;
  label: string;
}

// --- Helper Components ---

// StatCard for the About page
const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="text-5xl font-extrabold text-indigo-400 mb-1">{value}</p>
    <p className="text-md font-medium text-gray-300">{label}</p>
  </div>
);

// Job Listing Helper (Used in CTA section)
const JobListing: React.FC<{ title: string; location: string }> = ({
  title,
  location,
}) => (
  <div className="flex justify-between items-center p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition duration-300">
    <div className="text-left">
      <h4 className="font-bold text-white">{title}</h4>
      <p className="text-sm text-gray-400">{location}</p>
    </div>
    <Briefcase className="h-5 w-5 text-indigo-400" />
  </div>
);

// --- About Us Component (Full Implementation) ---

const AboutUs: React.FC = () => {
  // Dummy function for internal CTA clicks, since external navigation is removed
  //   const dummySetView = (page: string) =>
  //     console.log(`Navigating to ${page} (Link disabled in standalone view)`);

  return (
    <div className="text-white min-h-screen">
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .hero-content > * {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .hero-content h1 {
          animation-delay: 0.1s;
        }
        .hero-content p {
          animation-delay: 0.3s;
        }
        .hero-content button {
          animation-delay: 0.5s;
        }
        .hero-section {
          background: radial-gradient(
            circle at center,
            #1e293b 0%,
            #0f172a 100%
          );
          position: relative;
          overflow: hidden;
        }
        .hero-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml;utf8,<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="p" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M 0 0 L 100 0 L 100 100 L 0 100 Z" stroke-width="0" fill="none" /></pattern></defs><rect width="100%" height="100%" fill="url(%23p)" opacity="0.05"/></svg>')
            repeat;
          pointer-events: none;
        }
        .abstract-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.2; /* Subtly visible */
          z-index: 0;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.7) 0%,
            rgba(15, 23, 42, 0.9) 100%
          );
          z-index: 1;
        }
        .hero-content-wrapper {
          position: relative;
          z-index: 2;
        }
      `}</style>
      {/* 1. Enhanced Hero / Intro Section */}
      <section className="hero-section py-32 md:py-48 rounded-t-3xl border-b border-indigo-700/50 relative">
        <Image
          src="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg"
          alt="Abstract technology background"
          className="abstract-bg-image"
          fill
          priority
        />
        <div className="hero-overlay"></div>{" "}
        {/* Darker overlay for text readability */}
        <div className="max-w-6xl mx-auto px-4 text-center hero-content hero-content-wrapper">
          <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 leading-tight opacity-0">
            Pioneering <span className="text-indigo-400">Innovation</span> for a
            Better Future
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-10 opacity-0">
            At Whatechnology, our mission is to drive digital evolution through
            strategic partnership, cutting-edge cloud architecture, and
            human-centric design.
          </p>
          <button
            // onClick={() => dummySetView("leadership")}
            className="bg-indigo-600 text-white px-10 py-4 text-lg font-bold rounded-xl shadow-2xl shadow-indigo-500/50 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.03] opacity-0"
          >
            See Our History & Leadership
          </button>
        </div>
      </section>

      {/* 2. Stats and Cloud Experts Section */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats & Image Grid */}
          <div className="space-y-8">
            {/* Team Photo Placeholder */}
            {/* <PlaceholderImage
              alt="Whatechnology Team"
              className="w-full h-72 lg:h-96 rounded-2xl shadow-2xl"
            /> */}
            <Image
              src="https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_1280.jpg"
              alt="Team Collaboration"
              className="w-full h-72 lg:h-96 rounded-2xl shadow-2xl object-cover"
              width={800}
              height={600}
            />
            <div className="flex justify-around items-center bg-gray-900 p-6 rounded-2xl shadow-inner border border-indigo-800/50">
              <StatCard value="50+" label="Qualified Staff" />
              <StatCard value="200+" label="Projects Completed" />
              <StatCard value="100%" label="Client Satisfaction" />
            </div>
          </div>

          {/* Right: Cloud Experts Text */}
          <div className="lg:pl-8 space-y-6">
            <h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest">
              Our Mission
            </h2>
            <h3 className="text-4xl font-extrabold text-white leading-tight">
              The Cloud Experts Driving Your{" "}
              <span className="text-indigo-400">Digital Evolution</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Our team of certified engineers and strategic consultants is
              dedicated to helping organizations navigate the complexities of
              modern IT infrastructure. We turn challenges into opportunities
              for growth.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                <p className="text-gray-300">
                  <strong className="text-white">Full Coverage:</strong> We
                  provide end-to-end services from initial planning and
                  migration to ongoing management and optimization.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                <p className="text-gray-300">
                  <strong className="text-white">
                    Future-Proof Architecture:
                  </strong>{" "}
                  Building scalable and resilient systems that adapt to market
                  demands and new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ValueSection />
      <Founder />

      {/* 3 & 4. Who We Are & Values Section (Two-Column Layout) */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Column - Who We Are */}
            <div className="lg:col-span-3 space-y-8">
              <h2 className="text-4xl font-extrabold text-white mb-4 border-b border-indigo-500/30 pb-3">
                Who We Are
              </h2>
              <div className="grid grid-cols-2 gap-4 h-48">
                <Image
                  src="https://cdn.pixabay.com/photo/2015/06/24/16/36/home-820389_1280.jpg"
                  alt="Team Collaboration 1"
                  className="rounded-lg object-cover w-full h-full"
                  width={400}
                  height={192}
                />
                <Image
                  src="https://cdn.pixabay.com/photo/2021/09/07/07/11/game-console-6603120_1280.jpg"
                  alt="Team Collaboration 2"
                  className="rounded-lg object-cover w-full h-full"
                  width={400}
                  height={192}
                />
              </div>

              <p className="text-gray-400 text-lg">
                Whatechnology was founded on the belief that technology should
                be an accelerator, not a barrier. We are a dynamic team of
                engineers, designers, and strategists united by a passion for
                solving complex problems. Our culture is built on continuous
                learning, mutual respect, and a commitment to client success.
              </p>
              <p className="text-gray-400">
                We pride ourselves on transparency and collaboration, ensuring
                our clients are partners at every step of their digital journey.
              </p>
            </div>

            {/* Right Column - Our Values */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-4xl font-extrabold text-white mb-4 border-b border-indigo-500/30 pb-3">
                Our Core Values
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-white">Innovation</h4>
                  <p className="text-gray-400 text-sm">
                    We constantly seek new ways to solve old problems, staying
                    ahead of the technology curve.
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-white">Integrity</h4>
                  <p className="text-gray-400 text-sm">
                    Honesty and ethical conduct guide every decision and
                    relationship we forge.
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-white">Excellence</h4>
                  <p className="text-gray-400 text-sm">
                    We are committed to delivering the highest quality in every
                    project, every time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Careers/CTA Section */}
      <section className="py-20 bg-gray-800 rounded-b-3xl">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Joining with our growing team
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Explore opportunities to shape the future of tech with
            Whatechnology.
          </p>
          {/* Job Listings Placeholder */}
          <div className="space-y-4 max-w-lg mx-auto">
            <JobListing
              title="Senior Cloud Architect"
              location="Remote / Hybrid"
            />
            <JobListing
              title="Frontend Developer (React)"
              location="Innovation City, TX"
            />
            <JobListing title="Data Scientist (AI/ML)" location="Remote" />
          </div>

          <button
            // onClick={() => dummySetView("contact")}
            className="mt-10 bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 font-semibold"
          >
            View All Open Roles
          </button>
        </div>
      </section>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-800 font-sans antialiased flex flex-col p-4 md:p-8">
      <style>{`
        /* Custom scrollbar for aesthetics */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #1f2937; }
        ::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
      `}</style>

      <main className="grow w-full mx-auto">
        <AboutUs />
      </main>
    </div>
  );
};

export default App;
