"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Particles from "@/components/Particles";
import { motion } from "framer-motion";

export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    console.log("Contact form data:", data);
  };

  return (
    <div className="bg-background text-foreground min-h-screen transition-colors duration-300">
      <section className="py-24 bg-background relative transition-colors duration-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Let&apos;s <span>Build Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            Ready to start a project? Send us a message or connect using the
            details below.
          </motion.p>
        </div>
      </section>

      <div className="absolute top-0 left-0 w-full h-full opacity-90 pointer-events-none">
        <Particles
          particleColors={["#4ade80", "#22c55e"]} // Adjusted for visibility on both themes
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <section className="py-20 bg-background relative transition-colors duration-300">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info (Left Column - 1/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-1"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">info@whatechnology.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Call Us</h4>
                  <p className="text-gray-600 dark:text-gray-400">+1 (240) 470-6048</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-green-600 dark:text-green-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Visit Our Office</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    16315 Eddinger Road bowie MD 20716 USA
                  </p>
                </div>
              </div>
            </div>
            {/* Background Orb */}

            {/* Map Placeholder */}
            <div className="h-64 bg-card rounded-xl flex items-center justify-center text-muted-foreground font-bold border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.5434628230164!2d-76.72738852406144!3d38.9344111717161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7ec7d0633eced%3A0x701eccbd36829b4c!2s16315%20Eddinger%20Rd%2C%20Bowie%2C%20MD%2020716%2C%20USA!5e0!3m2!1sen!2sng!4v1767704324230!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: "0", borderRadius: "0.75rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form (Right Column - 2/3 width) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card p-8 md:p-12 rounded-2xl shadow-2xl border border-border transition-colors duration-300"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-500 transition duration-300"
                />
                {/* Email */}
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-500 transition duration-300"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-500 transition duration-300"
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message"
                required
                rows={5}
                className="w-full p-4 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-green-500 transition duration-300 resize-none"
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-green-600 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-green-500/50 hover:bg-green-700 transition duration-300 transform hover:scale-[1.01]"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
