import React from "react";

// Main component, named App as required for the single-file React format.
// This component displays a clean "Under Construction" landing page with a confirmed launch date.
const App: React.FC = () => {
  return (
    // Mimicking the body and container styling of the original HTML for full-screen centering
    <div className="bg-gray-50 flex items-center justify-center min-h-screen p-4">
      {/* Construction Card */}
      <div
        className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center 
                           transition-all duration-500 hover:scale-[1.01] border-t-8 border-yellow-500"
      >
        {/* Icon/Indicator */}
        <div className="mb-6">
          {/* Simple SVG of a wrench and hammer, replacing the image URL for self-containment */}
          <svg
            className="w-20 h-20 text-yellow-500 mx-auto animate-pulse"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            ></path>
          </svg>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          🚧 Site Under Construction 🚧
        </h1>

        {/* Subtitle/Message */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We&apos;re busy building something awesome! We appreciate your
          patience and look forward to showing you the finished product.
        </p>

        {/* Confirmed Launch Date Announcement */}
        <div className="bg-gray-100 p-8 rounded-xl border-4 border-dashed border-gray-400 shadow-inner">
          <p className="text-sm font-semibold text-gray-700 uppercase mb-3 tracking-widest">
            Launch Date
          </p>
          <p className="text-5xl font-black text-gray-900 leading-none">
            January 1st
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
