"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

// Data for the services and their completion percentages
const servicesData = [
  { name: "Software Development & Maintenance", percentage: 90 },
  { name: "DevOps & Security", percentage: 96 },
  { name: "Cloud Services", percentage: 92 },
  { name: "IT Consulting", percentage: 83 },
];

/**
 * Reusable Progress Bar Component
 * Renders the service name, percentage, and the visual progress bar.
 */
const ProgressBar = ({
  name,
  percentage,
  index,
}: {
  name: string;
  percentage: number;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8"
    >
      {/* Service Name and Percentage Display */}
      <div className="flex justify-between items-center mb-2 font-medium text-gray-900 dark:text-white">
        <span className="text-lg">{name}</span>
        <span className="text-base font-semibold">{percentage}%</span>
      </div>

      {/* The Progress Bar Container (Grey Track) */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        {/* The Progress Fill (Blue Bar) */}
        <motion.div
          className="bg-green-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></motion.div>
      </div>
    </motion.div>
  );
};

/**
 * Main App Component
 * Renders the full two-column section (Stats and CTA).
 */
const ValueSection = () => {
  return (
    // Section Container: Uses a light background to define the content area
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout: Two columns on large screens, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN: Progress Bars and Stats */}
          <div className="order-2 lg:order-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-xl font-medium text-gray-900 dark:text-white mb-10 border-b border-gray-300 dark:border-gray-700 pb-3`}
            >
              Our numbers talk
            </motion.h2>

            {/* Map through the data to display the progress bars */}
            <div className="space-y-4">
              {servicesData.map((service, index) => (
                <ProgressBar
                  key={index}
                  name={service.name}
                  percentage={service.percentage}
                  index={index}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Headline and CTA */}
          <div className="order-1 lg:order-2 lg:pl-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white mb-10`}
            >
              The values that shape everything better
            </motion.h1>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href={"/contact"}
                className={`inline-block mt-6 px-10 py-4 bg-green-600 dark:bg-green-500 text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-green-700 dark:hover:bg-green-600 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-cyan-300`}
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
