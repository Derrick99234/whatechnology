import React from "react";
import {
  Database,
  BarChart3,
  Share2,
  Zap,
  PieChart,
  Layers,
  ArrowRight,
  Workflow,
  Search,
} from "lucide-react";
import Image from "next/image";
import ContactUs from "../../contact/page";

/**
 * Big Data Service Item Type
 */
const bigDataServices = [
  {
    title: "Data Warehousing",
    description:
      "Architecting scalable Snowflake, BigQuery, or Redshift environments to centralize your enterprise data for high-speed querying.",
    icon: Database,
  },
  {
    title: "Real-time Streaming",
    description:
      "Leverage Apache Kafka and Spark Streaming to process millions of events per second for instant business insights.",
    icon: Zap,
  },
  {
    title: "Data Lakehouse Design",
    description:
      "Combining the flexibility of data lakes with the performance of warehouses using Delta Lake and Iceberg architectures.",
    icon: Layers,
  },
  {
    title: "Advanced ETL Pipelines",
    description:
      "Robust automated pipelines that ingest, clean, and transform raw data into analytics-ready formats using dbt and Airflow.",
    icon: Workflow,
  },
  {
    title: "Business Intelligence",
    description:
      "Custom interactive dashboards and data visualizations that turn complex datasets into clear, actionable business strategies.",
    icon: BarChart3,
  },
  {
    title: "Data Governance",
    description:
      "Ensuring data quality, lineage, and compliance across your entire organization with automated cataloging and security.",
    icon: Search,
  },
];

const App = () => {
  return (
    <div className="bg-white min-h-screen font-sans overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 bg-[#020617] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-11/12 bg-green-600/10 blur-[120px] rounded-full pointer-events-none" />
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px] -ml-24 -mb-24"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2">
                <Share2 className="w-4 h-4 text-green-500" />
                <span className="text-green-500 text-xs font-bold uppercase tracking-widest">
                  Enterprise Data Engineering
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05]">
                Turn Raw Data into{" "}
                <span className="text-green-500">Strategic Insights.</span>
              </h1>
              <p className="text-blue-100/70 text-lg lg:text-xl max-w-xl leading-relaxed font-medium">
                Whatechnology builds the pipelines that power modern
                enterprises. We help you ingest, process, and analyze massive
                datasets at the speed of business.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-black rounded-xl transition-all flex items-center gap-2 shadow-xl shadow-blue-500/20">
                  Optimize Your Stack <ArrowRight className="w-4 h-4" />
                </button>
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black rounded-xl transition-all">
                  Data Architecture Review
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden border-12 border-white/5 shadow-2xl aspect-4/3">
                <Image
                  width={400}
                  height={400}
                  src="https://images.unsplash.com/photo-1501526029524-a8ea952b15be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Big Data Visualization"
                  className="w-full h-full object-cover"
                />
                {/* Floating Insight Card */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/20 w-64 hidden sm:block">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <PieChart className="w-5 h-5 text-green-600" />
                    </div>
                    <p className="text-[10px] font-black uppercase text-slate-400">
                      Processing Speed
                    </p>
                  </div>
                  <p className="text-2xl font-black text-slate-900">
                    Petabyte-Scale
                  </p>
                  <div className="mt-3 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-[88%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Services Grid --- */}
      <section className="py-24 lg:py-32 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-green-500">
            Data Expertise
          </h2>
          <p className="text-4xl lg:text-5xl font-black">
            Built for Speed and Scalability
          </p>
          <div className="w-20 h-1.5 bg-blue-100 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bigDataServices.map((service, index) => (
            <div
              key={index}
              className="group p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:bg-green-500 transition-colors">
                <service.icon className="w-8 h-8 text-green-500 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Process Section --- */}
      <section className="relative mt-20">
        <div
          className="absolute top-0 left-0 w-full h-24 bg-white -translate-y-1/2"
          style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
        ></div>
        <div
          className="bg-slate-50 py-32"
          style={{ clipPath: "polygon(0 5%, 100% 0, 100% 100%, 0 100%)" }}
        >
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  width={400}
                  height={400}
                  src="https://images.unsplash.com/photo-1561233835-f937539b95b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGRhdGElMjBjZW50ZXJ8ZW58MHx8MHx8fDA%3D"
                  alt="Data Engineering Center"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl z-0"></div>
            </div>

            <div className="order-1 lg:order-2 space-y-10">
              <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                Your Data-to-Decision Pipeline
              </h2>
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Ingestion & Discovery",
                    desc: "Mapping your data landscape and building secure connectors for disparate internal and external sources.",
                  },
                  {
                    step: "02",
                    title: "Transformation & Modeling",
                    desc: "Automating the ETL process to ensure high data integrity and building efficient schemas for analytics.",
                  },
                  {
                    step: "03",
                    title: "Visualization & Insights",
                    desc: "Deploying high-performance dashboards that provide real-time visibility into your KPIs and operational health.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <span className="text-4xl font-black text-blue-100 group-hover:text-green-500 transition-colors">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-32 bg-[#020617] text-white text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="max-w-3xl mx-auto space-y-10 relative z-10">
          <h2 className="text-4xl lg:text-6xl font-black leading-tight">
            Stop Guessing. Start Knowing.
          </h2>
          <p className="text-blue-100/70 text-xl font-medium">
            Whatechnology bridges the gap between raw data and competitive
            advantage. Scale your insights with us today.
          </p>
          <div className="pt-6">
            <button className="px-12 py-6 bg-green-500 hover:bg-blue-400 text-white font-black rounded-2xl shadow-2xl shadow-blue-500/40 transition-all text-lg hover:-translate-y-1">
              Start Your Data Journey
            </button>
          </div>
        </div>
      </section>
      <ContactUs />
    </div>
  );
};

export default App;
