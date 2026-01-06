import React from "react";
import Image from "next/image";
// Importing Lucide icons for a modern look
import { Award, TrendingUp, Briefcase } from "lucide-react";
import ValueSection from "@/components/value-section";
import Founder from "@/components/founder";
import ContactUs from "../contact/page";
import Link from "next/link";

// --- Type Definitions ---

interface StatCardProps {
  value: string;
  label: string;
}

// --- Helper Components ---

// StatCard for the About page
const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="text-center">
    <p className="md:text-5xl text-3xl font-extrabold text-green-400 mb-1">
      {value}
    </p>
    <p className="md:text-md text-sm font-medium text-gray-300">{label}</p>
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
    <Briefcase className="h-5 w-5 text-green-400" />
  </div>
);

// --- About Us Component (Full Implementation) ---

const AboutUs: React.FC = () => {
  return (
    <div className="text-white min-h-screen">
      {/* 1. Enhanced Hero / Intro Section */}
      <section className="relative overflow-hidden py-32 md:py-48 rounded-t-3xl">
        <Image
          src="https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg"
          alt="Abstract technology background"
          fill
          className="absolute inset-0 object-cover opacity-20 z-0"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-slate-900/70 to-slate-900/90 z-1" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-100 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />

        {/* Darker overlay for text readability */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight ">
            Pioneering <span className="text-green-400">Innovation</span> for a
            Better Future
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-10 ">
            At Whatechnology, our mission is to drive digital evolution through
            strategic partnership, cutting-edge cloud architecture, and
            human-centric design.
          </p>
          <Link
            href={"/contact"}
            className="bg-green-600 text-white px-10 py-4 font-bold rounded-xl shadow-2xl shadow-green-500/50 hover:bg-green-700 transition duration-300 transform hover:scale-[1.03] "
          >
            Move beoyond hype
          </Link>
        </div>
      </section>

      {/* 2. Stats and Cloud Experts Section */}
      <section className="py-16  relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Stats & Image Grid */}
          <div className="space-y-8">
            <Image
              src="https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_1280.jpg"
              alt="Team Collaboration"
              className="w-full h-72 lg:h-96 rounded-2xl shadow-2xl object-cover"
              width={800}
              height={600}
            />
            <div className="flex justify-around items-center bg-gray-900 p-6 rounded-2xl shadow-inner border border-green-800/50">
              <StatCard value="50+" label="Qualified Staff" />
              <StatCard value="200+" label="Projects Completed" />
              <StatCard value="100%" label="Client Satisfaction" />
            </div>
          </div>

          {/* Right: Cloud Experts Text */}
          <div className="lg:pl-8 space-y-6">
            <h2 className="text-sm font-semibold text-green-400 uppercase tracking-widest">
              Our Mission
            </h2>
            <h3 className="text-4xl font-extrabold text-white leading-tight">
              The Cloud Experts Driving Your{" "}
              <span className="text-green-400">Digital Evolution</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Our team of certified engineers and strategic consultants is
              dedicated to helping organizations navigate the complexities of
              modern IT infrastructure. We turn challenges into opportunities
              for growth.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-3">
                <Award className="h-6 w-6 text-green-400 shrink-0 mt-1" />
                <p className="text-gray-300">
                  <strong className="text-white">Full Coverage:</strong> We
                  provide end-to-end services from initial planning and
                  migration to ongoing management and optimization.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-6 w-6 text-green-400 shrink-0 mt-1" />
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
              <h2 className="text-4xl font-extrabold text-white mb-4 border-b border-green-500/30 pb-3">
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
              <h2 className="text-4xl font-extrabold text-white mb-4 border-b border-green-500/30 pb-3">
                Our Core Values
              </h2>

              <div className="space-y-4">
                <div className="bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-green-500">
                  <h4 className="font-semibold text-white">Innovation</h4>
                  <p className="text-gray-400 text-sm">
                    We constantly seek new ways to solve old problems, staying
                    ahead of the technology curve.
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-green-500">
                  <h4 className="font-semibold text-white">Integrity</h4>
                  <p className="text-gray-400 text-sm">
                    Honesty and ethical conduct guide every decision and
                    relationship we forge.
                  </p>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-md border-l-4 border-green-500">
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
            className="mt-10 bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-green-700 transition duration-300 transform hover:scale-105 font-semibold"
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
    <div className="min-h-screen bg-[#020617] font-sans antialiased flex flex-col p-4 md:p-8 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
      <main className="grow w-full mx-auto">
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
};

export default App;
