import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative min-h-screen bg-[#020617] overflow-hidden flex flex-col items-center pt-20 pb-12 px-6 ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-green-900" />
          Modern Digital Solutions
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
          Innovate faster with <br />
          <span className="bg-linear-to-r from-green-400 to-green-800 bg-clip-text text-transparent">
            Whatechnology
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Whatechnology provides cutting-edge software solutions designed to
          scale your business and streamline your workflow with the power of
          next-gen technology.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <Link
            href={"/contact"}
            className="flex items-center justify-center px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href={"/contact"}
            className="flex items-center justify-center px-8 py-3.5 bg-transparent text-white font-semibold rounded-full border border-white/20 hover:bg-white/5 transition-all"
          >
            Contact Sales
          </Link>
        </div>

        {/* Product Mockup */}
        <div
          className="relative w-full max-w-4xl mx-auto group"
          style={{ perspective: "1000px" }}
        >
          <div className="relative p-px rounded-2xl bg-linear-to-b from-white/20 to-transparent shadow-2xl transition-transform duration-500 ease-out transform translate-y-0 rotate-x-15 group-hover:rotate-x-[5deg] group-hover:-translate-y-2">
            <div className="bg-[#0f172a] rounded-2xl overflow-hidden shadow-inner border border-white/5">
              {/* Mock Header */}
              <div className="h-8 border-b border-white/10 bg-slate-900/50 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>

              {/* Image */}
              <Image
                width={400}
                height={250}
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426"
                alt="Whatechnology Dashboard"
                className="w-full h-auto object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-green-500/20 blur-3xl rounded-full -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
