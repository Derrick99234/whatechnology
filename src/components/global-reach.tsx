"use client";

import { motion } from "framer-motion";
import Globe from "./globe";

const stats = [
  { value: "40-75%", label: "Reduction in manual effort" },
  { value: "30-80%", label: "Increase in productivity" },
  { value: "30-90%", label: "Reduction in error rates" },
  { value: "30-40%", label: "Increase in efficiency" },
  { value: "35-50%", label: "Reduction in costs" },
  { value: "~50%", label: "Time saved" },
];

export default function GlobalReach() {
  return (
    <section className="py-20 bg-background transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-4">
                 <div className="w-4 h-4 rounded-full border-2 border-blue-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Global Reach,<br />
              <span className="text-gray-900 dark:text-white">Real Impact</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-lg">
              Power your business with intelligent automation solutions from Whatechnology, designed to streamline operations and drive ROI.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-l-2 border-gray-200 dark:border-gray-700 pl-4"
                >
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            {/* Gradient background behind globe for effect */}
            <div className="absolute inset-0 bg-radial-gradient from-blue-500/10 to-transparent opacity-50 blur-3xl" />
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
