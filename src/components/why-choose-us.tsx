import React from "react";
import { CheckCircle2, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * @typedef {Object} Feature
 * @property {string} title
 * @property {string} description
 */

const features = [
  {
    title: "Proven Track Record",
    description: "Trusted by major names like Harrys.com, Citibank, and Tata.",
  },
  {
    title: "Business-Aligned Outcomes",
    description:
      "We don't just deploy tech — we deliver measurable results in cost, speed, and scalability.",
  },
  {
    title: "Cloud-Native Experts",
    description:
      "Deep specialization in AWS, Azure, GCP, and hybrid cloud setups.",
  },
  {
    title: "Tailored Teams",
    description:
      "Whether you need consulting, a dedicated squad, or individual engineers — we've got you covered.",
  },
];

const WhyChooseSection = () => {
  return (
    <div className="w-full bg-white font-sans text-slate-900 relative">
      {/* Top Section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Visual Column */}
        <div className="relative order-2 lg:order-1">
          {/* Main Image Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/5 max-w-md mx-auto lg:ml-0 border-8 border-white">
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
              alt="Professional at Whatechnology"
              className="w-full h-full object-cover"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Play
                  className="fill-[#020617] text-[#020617] ml-1"
                  size={24}
                />
              </button>
            </div>
          </div>

          {/* Floating UI Card 1: Revenue/Graph */}
          <div className="absolute -top-6 -left-4 md:-left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block w-52 animate-bounce-slow">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-4 border-green-500 border-r-transparent animate-spin-slow"></div>
              </div>
              <div>
                <p className="text-[10px] text-green-400 font-bold uppercase">
                  Growth
                </p>
                <p className="text-sm font-bold text-slate-800">+124.5%</p>
              </div>
            </div>
            <div className="flex items-end gap-1 h-12">
              <div className="flex-1 bg-slate-100 h-1/2 rounded-sm"></div>
              <div className="flex-1 bg-green-400 h-3/4 rounded-sm"></div>
              <div className="flex-1 bg-slate-100 h-1/3 rounded-sm"></div>
              <div className="flex-1 bg-[#020617] h-full rounded-sm"></div>
              <div className="flex-1 bg-slate-100 h-2/3 rounded-sm"></div>
            </div>
          </div>

          {/* Floating UI Card 2: Summary Circular Progress */}
          <div className="absolute -bottom-10 -right-4 md:-right-8 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 hidden md:block w-64">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
              Summary
            </h4>
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-slate-100"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="213"
                    strokeDashoffset="60"
                    className="bg-[#020617]"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="213"
                    strokeDashoffset="160"
                    className="text-emerald-400"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-slate-800">92%</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#020617]"></div>
                  <span className="text-[10px] font-bold text-slate-600 whitespace-nowrap">
                    Invoice Sent
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-[10px] font-bold text-slate-600 whitespace-nowrap">
                    Paid Invoice
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="order-1 lg:order-2 space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-100 rounded-full px-4 py-1.5">
              <span className="bg-green-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase italic">
                New
              </span>
              <span className="text-xs text-green-700 font-medium">
                Monitoring is now available in Beta for Enterprise.
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-[#001c4d] leading-[1.1] tracking-tight">
              Why Choose <span className="text-green-500">Whatechnology?</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex gap-4 group">
                <div className="shrink-0">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-green-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#001c4d] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Area */}
          <div className="flex flex-col sm:flex-row items-center gap-8 pt-4 border-t border-slate-100">
            <Link
              href={"/contact"}
              className="w-full sm:w-auto px-10 py-5 bg-[#020617] hover:bg-green-500 text-white font-black rounded-xl shadow-xl shadow-blue-200 transition-all hover:-translate-y-1 active:scale-95"
            >
              Get Started Today
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-100">
                <Image
                  width={48}
                  height={48}
                  src="https://i.pravatar.cc/150?u=whatech"
                  alt="Support Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  Or Call Us
                </p>
                <p className="text-lg font-black text-[#001c4d] tabular-nums tracking-tight">
                  +1 (240) 470-6048
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section with Diagonal Cut */}
      <div className="relative mt-20">
        <div
          className="absolute top-0 left-0 w-full h-24 bg-white -translate-y-1/2"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
        <section
          className="bg-linear-to-br from-[#020617] to-[#001233] text-white py-32 px-6 relative"
          style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-12 h-1 bg-white/20 mx-auto rounded-full"></div>

            <p className="text-2xl md:text-4xl font-semibold leading-snug italic text-blue-50">
              &ldquo;The quality of service is top notch and exceeded my
              expectations. The customer service team was very helpful and made
              sure all my questions were answered.&rdquo;
            </p>

            <div className="w-12 h-1 bg-white/20 mx-auto rounded-full"></div>

            <div className="pt-6">
              <h5 className="text-2xl font-black tracking-tight">
                Dapo Adejuwon
              </h5>
              <p className="text-green-400 font-bold uppercase tracking-widest text-xs mt-1">
                CEO Hostloni
              </p>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default WhyChooseSection;
