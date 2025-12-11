import React from "react";

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
}: {
  name: string;
  percentage: number;
}) => {
  return (
    <div className="mb-8">
      {/* Service Name and Percentage Display */}
      <div className="flex justify-between items-center mb-2 font-medium text-white">
        <span className="text-lg">{name}</span>
        <span className="text-base text-white font-semibold">
          {percentage}%
        </span>
      </div>

      {/* The Progress Bar Container (Grey Track) */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        {/* The Progress Fill (Blue Bar) */}
        <div
          className="bg-indigo-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
};

/**
 * Main App Component
 * Renders the full two-column section (Stats and CTA).
 */
const ValueSection = () => {
  return (
    // Section Container: Uses a light background to define the content area
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid Layout: Two columns on large screens, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT COLUMN: Progress Bars and Stats */}
          <div className="order-2 lg:order-1">
            <h2
              className={`text-xl font-medium text-white mb-10 border-b border-gray-300 pb-3`}
            >
              Our numbers talk
            </h2>

            {/* Map through the data to display the progress bars */}
            <div className="space-y-4">
              {servicesData.map((service, index) => (
                <ProgressBar
                  key={index}
                  name={service.name}
                  percentage={service.percentage}
                />
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Headline and CTA */}
          <div className="order-1 lg:order-2 lg:pl-16">
            <h1
              className={`text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-white mb-10`}
            >
              The values that shape everything better
            </h1>

            {/* CTA Button */}
            <button
              className={`mt-6 px-10 py-4 bg-indigo-500 text-white text-lg font-semibold rounded-lg shadow-xl hover:bg-indigo-600 transition duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-cyan-300`}
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
