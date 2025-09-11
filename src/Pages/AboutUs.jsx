import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Target,
  Eye,
  Heart,
  Clock,
  Award,
  Building,
  Zap,
  Shield,
  Cpu,
  Database,
  Scaling,
  ShieldCheck,
  Monitor,
  MonitorCheck,
  Bot,
} from "lucide-react";
import Leadership from "./Leadership";
import ContactUs from "./ContactUs";
import { useLocation } from "react-router-dom";

const aboutUsData = [
  {
    title: "Best-in-class Industry Solutions",
    image: "/assets/about/about1.png",
    description:
      "Our built-in frameworks and models empower your functional teams with readily available analytics and information for strategic decision-making and efficient execution.",
    icon: Target,
    color: "blue",
  },
  {
    title: "Analytics & Automation First",
    image: "/assets/about/about.2.png",
    description:
      "We embed data and automation into the heart of every process-empowering teams to shift away from low-value manual work and focus on strategic, high-return tasks.",
    icon: Eye,
    color: "green",
  },
  {
    title: "Smart Solutions, Delivered Fast",
    image: "/assets/about/about.3.jpg",
    description:
      "We rapidly implement intelligent solutions with agility and precision-bringing actionable insights and measurable results.",
    icon: Users,
    color: "purple",
  },
  {
    title: "Data-driven Decision Making",
    image: "/assets/about/about.4.png",
    description:
      "Through intuitive dashboards, KPIs, proactive alerts, and workflow automation, we put real-time insights in the hands of decision-makers, enabling optimized resource allocation and continuous value creation.",
    icon: Heart,
    color: "red",
  },
];

const solutionDetails = [
  {
    title: "Ecosystem and Integrations",
    strong: "Our solution is built to fit,",
    description:
      " not force. With robust API frameworks and connectors, it integrates effortlessly with leading ERP, SCM, CRM, and analytics platforms. This flexible architecture ensures fast adoption and zero disruption-maximizing the value of your existing tools while extending their capabilities.",
    bullets: [
      "Seamless integration with internal systems and third-party platforms",
      "Modular design for flexible deployment across business functions",
      "Real-time data synchronization and automated workflows",
    ],
    icon: Cpu,
  },
  {
    title: "Data Integrity",
    strong:
      "At the heart of our platform is uncompromised data accuracy and reliability.",

    description:
      " We ensure a single source of truth by unifying fragmented data streams and applying rigorous validation checks at every touchpoint.",
    bullets: [
      "End-to-end data lineage and traceability",
      "Automated data validation and anomaly detection",
      "Centralized governance with role-based access to maintain control",
    ],
    icon: Database,
  },
  {
    title: "Secure by Design",
    strong: "Security is not an afterthought-it’s built into the foundation.",

    description:
      "From encryption protocols to compliance frameworks, every layer of our solution is designed to protect your most sensitive information.",
    bullets: [
      "End-to-end encryption and role-based access control",
      "Compliance with global standards",
      "Continuous threat monitoring and proactive vulnerability management",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Easy to Use",
    strong: "Technology should empower, not overwhelm.",

    description:
      "Our platform is designed for real users-intuitive interfaces, streamlined workflows, and personalized dashboards make complex operations simple and accessible.",
    bullets: [
      "Clean, responsive UI with a focus on usability",
      "Intuitive tools for configuration and automation",
      "Contextual help, onboarding guides, and in-app support for smooth adoption",
    ],
    icon: Monitor,
  },
  {
    title: "AI/ML with Impact",
    strong:
      "We move beyond buzzwords-our AI and machine learning capabilities drive real outcomes. ",

    description:
      "From predictive analytics to intelligent recommendations, our models learn, adapt, and deliver insights that matter.",
    bullets: [
      "Real-time anomaly detection and proactive alerts",
      "Forecasting models for demand, inventory, and supply chain risks",
      "Natural language processing for smarter search and data exploration",
    ],
    icon: Bot,
  },

  {
    title: "High Availability and Performance",
    strong: "Downtime is not an option.",

    description:
      "Our platform is built for mission-critical environments—engineered for resilience, fault tolerance, and consistent performance, no matter the load or conditions",
    bullets: [
      "Architected for fault tolerance and redundancy",
      "Continuous monitoring, backup, and disaster recovery built in",
      "Elastic architecture that supports on-demand scaling for high-volume workloads",
    ],
    icon: MonitorCheck,
  },
];

const AboutUs = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // wait for DOM render
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen scroll-mt-20 bg-gray-50 cursor-default" id="about">
      {/* Hero Section */}

      <section className="gradient-bg section-padding ">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="">Approach</span>
            </h2>
            <p className="text-xl font-normal text-gray-600 max-w-4xl mb-4 mx-auto">
              At Synavor, we enable procurement and supply-chain functions to be
              smarter, speeder and smaller by driving transformative change
              through technology enablement.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Synavor gives you freedom to focus on insights, strategy and
              impact.
            </p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {aboutUsData.map((item, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 bg-white border border-gray-100 flex flex-col h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div><p className="text-xl p-2 mt-4 font-bold text-center">{item.title}</p></div>

                    <div className="p-6 flex flex-col flex-grow">
                      <p className="text-gray-600 leading-relaxed flex-grow ">
                        {item.description}
                      </p>
                    </div>

                    {/* Content */}

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-slate-900 via-blue-900 to-blue-500/80
 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-base leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Technology */}
      <section className="bg-white py-20 pt-10 pb-2">
        {/* Section Header */}
        <div className="max-w-5xl mx-auto text-center mb-16 px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="">Technology</span>
          </h2>
          <p className="text-gray-700 text-xl">
            Our enterprise solution is a cutting-edge digital platform built for
            scale, intelligence, and trust. Designed with a modern enterprise in
            mind, it seamlessly integrates into your existing ecosystem while
            delivering best-in-class user experience, data security, and
            AI-powered insights. Here’s how we deliver across the core pillars:
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {solutionDetails.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-300 w-full"
                >
                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12">
                      <Icon className="text-blue-600 w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed cursor-default">
                    <span className="font-bold text-gray-700 text-base">
                      {item.strong}
                    </span>{" "}
                    <span className="text-base">
                      {item.description}
                    </span>
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 text-gray-800 text-sm cursor-default">
                    {item.bullets.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-blue-600 text-xs mt-0.5">
                          ✓
                        </span>
                        <p className="ml-3 leading-relaxed">{point}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <div id="leadership" className="scroll-mt-20">
        <Leadership />
      </div>

      <div id="contact" className="scroll-mt-20">
        <ContactUs />
      </div>
    </div>
  );
};

export default AboutUs;
