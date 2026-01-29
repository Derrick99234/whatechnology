"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative min-h-screen bg-background text-foreground overflow-hidden flex flex-col items-center pt-20 pb-12 px-6 transition-colors duration-300 ${className}`}
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-600/5 dark:bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-medium text-slate-600 dark:text-slate-300 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-green-600 dark:bg-green-900" />
          Modern Digital Solutions
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-[1.1]"
        >
          Innovate faster with <br />
          <span className="bg-gradient-to-r from-green-500 to-green-700 dark:from-green-400 dark:to-green-800 bg-clip-text text-transparent">
            Whatechnology
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
        >
          Whatechnology provides cutting-edge software solutions designed to
          scale your business and streamline your workflow with the power of
          next-gen technology.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-20"
        >
          <Link
            href={"/contact"}
            className="flex items-center justify-center px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-slate-200 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
          <Link
            href={"/contact"}
            className="flex items-center justify-center px-8 py-3.5 bg-transparent text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/5 transition-all"
          >
            Contact Sales
          </Link>
        </motion.div>

        {/* Product Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative w-full max-w-5xl mx-auto group"
          style={{ perspective: "1000px" }}
        >
          <div className="relative p-2 rounded-2xl bg-gradient-to-b from-gray-200/50 to-transparent dark:from-white/20 dark:to-transparent shadow-2xl transition-transform duration-500 ease-out transform translate-y-0 rotate-x-6 hover:rotate-x-2 hover:-translate-y-2">
            <div className="bg-white dark:bg-[#0f172a] rounded-xl overflow-hidden shadow-inner border border-gray-200 dark:border-white/5">
              {/* Mock Header */}
              <div className="h-8 border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-slate-900/50 flex items-center px-4 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>

              {/* Image - User Provided Image */}
              <div className="relative aspect-[1536/638] w-full">
                <Image
                  src="/Client-and-Technology-1536x638.png"
                  alt="Whatechnology Client and Technology"
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-green-500/20 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
