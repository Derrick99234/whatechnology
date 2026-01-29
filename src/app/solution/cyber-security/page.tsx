"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  ShieldAlert,
  Terminal,
  UserCheck,
  ArrowRight,
  Fingerprint,
  Activity,
} from "lucide-react";
import Image from "next/image";
import ContactUs from "@/app/contact/page";

/**
 * Cyber Security Service Item Type
 */
const securityServices = [
  {
    title: "Managed Detection & Response",
    description:
      "24/7 proactive monitoring and rapid incident response to neutralize threats before they impact your business operations.",
    icon: Activity,
  },
  {
    title: "Zero Trust Architecture",
    description:
      "Implement a modern security framework that never trusts and always verifies every request, regardless of origin.",
    icon: UserCheck,
  },
  {
    title: "Penetration Testing",
    description:
      "Rigorous ethical hacking to identify and patch vulnerabilities in your applications, networks, and cloud infrastructure.",
    icon: Terminal,
  },
  {
    title: "Threat Intelligence",
    description:
      "Real-time global data analysis to predict and prepare for emerging cyber threats specific to your industry sector.",
    icon: Eye,
  },
  {
    title: "Endpoint Protection",
    description:
      "Securing every device in your network with advanced AI-driven antivirus and mobile device management solutions.",
    icon: ShieldAlert,
  },
  {
    title: "Identity & Access Management",
    description:
      "Streamline secure access with multi-factor authentication and role-based controls tailored to your workforce.",
    icon: Fingerprint,
  },
];

const Security = () => {
  return (
    <div className="bg-background text-foreground min-h-screen font-sans overflow-x-hidden transition-colors duration-300">
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-background overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 bg-secondary border border-border rounded-full px-4 py-2">
                <Lock className="w-4 h-4 text-foreground" />
                <span className="text-foreground text-xs font-bold uppercase tracking-widest">
                  Advanced Defense Systems
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-[1.05]">
                Fortify Your Digital{" "}
                <span>Enterprise.</span>
              </h1>
              <p className="text-muted-foreground text-lg lg:text-xl max-w-xl leading-relaxed font-medium">
                Whatechnology provides ironclad security for the modern age. We
                protect your data, your reputation, and your future with
                intelligence-led security solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary hover:bg-green-600 text-primary-foreground font-black rounded-xl transition-all flex items-center gap-2 shadow-xl shadow-green-500/10">
                  Request Security Audit <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-secondary hover:bg-muted text-secondary-foreground border border-border font-black rounded-xl transition-all">
                  Incident Response
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[2.5rem] overflow-hidden border-12 border-white/5 shadow-2xl aspect-4/3">
                <Image
                  width={400}
                  height={400}
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000"
                  alt="Cyber Security Operations"
                  className="w-full h-full object-cover"
                />
                {/* Floating Insight Card */}
                <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-border w-64 hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-secondary rounded-lg">
                      <ShieldCheck className="w-5 h-5 text-foreground" />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400">
                      Security Posture
                    </p>
                  </div>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">
                    Optimized{" "}
                    <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                      A+
                    </span>
                  </p>
                  <div className="mt-3 h-1 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[94%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-muted-foreground">
            Strategic Defense
          </h2>
          <p className="text-4xl lg:text-5xl font-black text-gray-900 dark:text-white">
            Resilience Against Evolving Threats
          </p>
          <div className="w-20 h-1.5 bg-blue-100 dark:bg-blue-900/30 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 rounded-3xl bg-card border border-border hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary shadow-sm flex items-center justify-center mb-8 group-hover:bg-primary transition-colors">
                <service.icon className="w-8 h-8 text-foreground group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="relative mt-20">
        <div
          className="absolute top-0 left-0 w-full h-24 bg-background -translate-y-1/2"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
        <div
          className="bg-background py-32"
          style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-border">
                <Image
                  width={400}
                  height={400}
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
                  alt="Cyber Security Analysis"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl z-0"></div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-10"
            >
              <h2 className="text-4xl lg:text-5xl font-black leading-tight text-gray-900 dark:text-white">
                Our Multi-Layered Security Methodology
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Gap Analysis & Audit",
                    desc: "A comprehensive review of your current infrastructure to identify hidden entry points and compliance risks.",
                  },
                  {
                    step: "02",
                    title: "Hardening & Mitigation",
                    desc: "Deploying ironclad defenses, encryption protocols, and monitoring tools to eliminate discovered gaps.",
                  },
                  {
                    step: "03",
                    title: "Continuous Vigilance",
                    desc: "Ongoing management and threat hunting to ensure your organization stays ahead of new attack vectors.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="text-4xl font-black text-blue-100 dark:text-blue-900/50 group-hover:text-green-500 transition-colors">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-32 bg-background text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-10 relative z-10"
        >
          <h2 className="text-4xl lg:text-6xl font-black leading-tight">
            Don&apos;t Wait for a Breach to Act.
          </h2>
          <p className="text-muted-foreground text-xl font-medium">
            Whatechnology secures your growth by neutralizing risks before they
            become disasters. Protect your data today.
          </p>
          <div className="pt-6">
            <button className="px-12 py-6 bg-primary hover:bg-green-600 text-primary-foreground font-black rounded-2xl shadow-2xl shadow-green-500/10 transition-all text-lg hover:-translate-y-1">
              Consult a Security Advisor
            </button>
          </div>
        </motion.div>
      </section>
      <ContactUs />
    </div>
  );
};

export default Security;
