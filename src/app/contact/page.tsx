"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted! Data ready for processing.");
  };

  return (
    <div className="text-white min-h-screen">
      <section className="py-24 bg-gray-900 rounded-t-3xl border-b border-indigo-700/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold text-white mb-4">
            Let&apos;s <span className="text-indigo-400">Build Together</span>
          </h1>
          <p className="text-xl text-gray-400">
            Ready to start a project? Send us a message or connect using the
            details below.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-800 rounded-b-3xl">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info (Left Column - 1/3 width) */}
          <div className="space-y-8 lg:col-span-1">
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Email Us</h4>
                  <p className="text-gray-400">contact@whatechnology.io</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Call Us</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-indigo-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Visit Our Office</h4>
                  <p className="text-gray-400">
                    100 Tech Drive, Suite 200, Innovation City, TX 78701
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-700 rounded-xl flex items-center justify-center text-gray-500 font-bold border border-indigo-800/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3101368338594!2d3.3551413748325603!3d6.608331193385675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92353daf72c1%3A0x4d53ffdb65e0c673!2sArk%20of%20Light%20for%20all%20Nations!5e0!3m2!1sen!2sng!4v1764494587277!5m2!1sen!2sng"
                width="600"
                height="250"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form (Right Column - 2/3 width) */}
          <div className="lg:col-span-2 bg-gray-900 p-8 md:p-12 rounded-2xl shadow-2xl border border-indigo-800/50">
            <h2 className="text-3xl font-bold text-white mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition duration-300"
                />
                {/* Email */}
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition duration-300"
                />
              </div>
              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition duration-300"
              />
              {/* Message */}
              <textarea
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition duration-300 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-indigo-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-indigo-500/50 hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01]"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

// --- Header Component (Minimal) ---

const Header: React.FC = () => {
  return (
    <header className="w-full max-w-6xl mx-auto mb-6">
      <div className="flex justify-start items-center p-4 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-indigo-700/50 shadow-xl">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-extrabold text-white">
          <span className="text-indigo-400">Wha</span>technology
        </div>
      </div>
    </header>
  );
};

// Main App Component
// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-800 font-sans antialiased flex flex-col p-4 md:p-8">
//       <style>{`
//                 /* Custom scrollbar for aesthetics */
//                 ::-webkit-scrollbar { width: 8px; }
//                 ::-webkit-scrollbar-track { background: #1f2937; }
//                 ::-webkit-scrollbar-thumb { background: #4f46e5; border-radius: 4px; }
//                 ::-webkit-scrollbar-thumb:hover { background: #6366f1; }
//             `}</style>

//       <Header />

//       <main className="grow w-full mx-auto">
//         <ContactUs />
//       </main>
//     </div>
//   );
// };

// export default App;
