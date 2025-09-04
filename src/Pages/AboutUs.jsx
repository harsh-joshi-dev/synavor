import React from "react";
import { motion } from "framer-motion";
import {
    Users, Target, Eye, Heart, Clock, Award, Building, Zap, Shield,
    Cpu,
    Database,
    ShieldCheck,
    Monitor,
    Bot,
} from "lucide-react";
import Leadership from "./Leadership";
import ContactUs from "./ContactUs"


const aboutUsData = [
    {
        title: "Best-in-class Industry Solutions",
        image: "/assets/about/ourmission.jpg",
        description: "Our built-in frameworks and models empower your functional teams with readily available analytics and information for strategic decision-making and efficient execution.",
        icon: Target,
        color: "blue"
    },
    {
        title: "Analytics & Automation First",
        image: "/assets/about/vision.jpg",
        description: "We embed data and automation into the heart of every process-empowering teams to shift away from low-value manual work and focus on strategic, high-return tasks.",
        icon: Eye,
        color: "green"
    },
    {
        title: "Smart Solutions, Delivered Fast",
        image: "/assets/about/team.jpg",
        description: "We rapidly implement intelligent solutions with agility and precision-bringing actionable insights and measurable results.",
        icon: Users,
        color: "purple"
    },
    {
        title: "Data-Driven Decision Making",
        image: "/assets/about/values.jpg",
        description: "Through intuitive dashboards, KPIs, proactive alerts, and workflow automation, we put real-time insights in the hands of decision-makers, enabling optimized resource allocation and continuous value creation.",
        icon: Heart,
        color: "red"
    },
    // {
    //     title: "Our History",
    //     image: "/assets/about/history.jpg",
    //     description: "Founded in 2010, we've evolved from a startup to a global leader, serving 500+ companies across 15+ countries with proven results.",
    //     icon: Clock,
    //     color: "yellow"
    // },
    // {
    //     title: "Our Clients",
    //     image: "/assets/about/client.jpg",
    //     description: "Trusted by Fortune 500 companies and innovative startups alike, we've delivered measurable results across diverse industries worldwide.",
    //     icon: Building,
    //     color: "indigo"
    // },
    // {
    //     title: "Our Culture",
    //     image: "/assets/about/culture.jpg",
    //     description: "We foster creativity, collaboration, and continuous learning, creating an environment where innovation thrives and excellence is the standard.",
    //     icon: Zap,
    //     color: "orange"
    // },
    // {
    //     title: "Our Technology",
    //     image: "/assets/about/technology.jpg",
    //     description: "Leveraging the latest AI/ML advancements, cloud computing, and data analytics to deliver cutting-edge solutions that drive real business value.",
    //     icon: Shield,
    //     color: "teal"
    // },
    // {
    //     title: "Our Commitment",
    //     image: "/assets/about/commitment.jpg",
    //     description: "Committed to quality, customer satisfaction, and continuous improvement, ensuring we remain at the forefront of procurement technology.",
    //     icon: Award,
    //     color: "pink"
    // },
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
        strong: "At the heart of our platform is uncompromised data accuracy and reliability.",

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
        strong: "We move beyond buzzwords-our AI and machine learning capabilities drive real outcomes. ",

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
            "Our platform is built for mission-critical environments-engineered for resilience, fault tolerance, and consistent performance, no matter the load or conditions.",
        bullets: [
            "Architected for fault tolerance and redundancy",
            "Continuous monitoring, backup, and disaster recovery built in",
            "Elastic architecture that supports on-demand scaling for high-volume workloads",
        ],
        icon: Bot,
    },
];

const AboutUs = () => {
    const getColorClasses = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600",
            green: "bg-green-100 text-green-600",
            purple: "bg-purple-100 text-purple-600",
            red: "bg-red-100 text-red-600",
            yellow: "bg-yellow-100 text-yellow-600",
            indigo: "bg-indigo-100 text-indigo-600",
            orange: "bg-orange-100 text-orange-600",
            teal: "bg-teal-100 text-teal-600",
            pink: "bg-pink-100 text-pink-600"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gray-50" id="about">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="max-w-7xl mx-auto container-padding text-center">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-6 py-4 bg-blue-50 text-blue-700 rounded-full text-base font-medium border border-blue-200 mb-6"
                    >
                        <Users className="w-4 h-4 mr-2" />
                        About Synavor
                    </motion.div> */}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Driving Innovation in<br /><span className="text-gradient">Procurement & Supply Chain</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        At Synavor, we enable procurement and supply-chain functions to be smarter, speeder and smaller by driving transformative change through technology enablement.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="bg-white section-padding">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl font-bold text-blue-600 mb-2">13+</div>
                            <div className="text-gray-600">Years of Experience</div>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                            <div className="text-gray-600">Global Clients</div>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl font-bold text-purple-600 mb-2">15+</div>
                            <div className="text-gray-600">Countries Served</div>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl font-bold text-orange-600 mb-2">30%</div>
                            <div className="text-gray-600">Average Cost Reduction</div>
                        </motion.div>
                    </div>
                </div>
            </section> */}

            {/* About Grid Section */}
            <section className="bg-gray-50 section-padding">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Our <span className="text-gradient">Approach</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Synavor gives you freedom to focus on insights, strategy and impact.
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

                                            {/* Icon Badge */}
                                            <div
                                                className={`absolute top-4 right-4 w-12 h-12 ${getColorClasses(
                                                    item.color
                                                )} rounded-xl flex items-center justify-center shadow-medium`}
                                            >
                                                {(() => {
                                                    const IconComponent = item.icon;
                                                    return <IconComponent className="w-6 h-6" />;
                                                })()}
                                            </div>

                                            {/* Gradient Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 leading-relaxed flex-grow">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Hover Overlay */}
                                        <motion.div
                                            className="absolute inset-0 bg-blue-600/90 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                            <p className="text-sm leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Our Technology */}
            <section className="bg-white py-20">
                {/* Section Header */}
                <div className="max-w-5xl mx-auto text-center mb-16 px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Our <span className="text-gradient">Technology</span>
                    </h2>
                    <p className="text-gray-700 text-base">
                        Our enterprise solution is a cutting-edge digital platform built for scale, intelligence, and trust. Designed with a modern enterprise in mind, it seamlessly integrates into your existing ecosystem while delivering best-in-class user experience, data security, and AI-powered insights. Here’s how we deliver across the core pillars:
                    </p>
                </div>

                {/* Cards */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
                    {solutionDetails.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-lg hover:border-blue-400 transition-all duration-300"
                            >
                                {/* Icon + Title side by side */}
                                <div className="flex items-center gap-3 mb-4">
                                    {/* Icon */}
                                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 shadow-md">
                                        <Icon className="text-blue-600 w-6 h-6" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                    <span className="font-bold text-gray-700  text-sm ">{item.strong}</span> {item.description}
                                </p>

                                {/* Bullets */}
                                <ul className="space-y-3 text-gray-800 text-sm">
                                    {item.bullets.map((point, i) => (
                                        <li key={i} className="flex items-start">
                                            {/* Icon (fixed width, won’t shrink) */}
                                            <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-blue-600 text-xs mt-0.5">
                                                ✓
                                            </span>
                                            {/* Text (perfect line alignment) */}
                                            <p className="ml-3 leading-relaxed">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="bg-white section-padding">
                <div className="max-w-4xl mx-auto container-padding text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your <span className="text-gradient">Procurement </span>?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            Join hundreds of companies that have already revolutionized their supply chain
                            operations with Synavor's AI-powered solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn-primary">
                                Request a Demo
                            </button>
                            <button className="btn-secondary">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            <div id="leadership"><Leadership /></div>

            <div id="contact"><ContactUs /></div>
        </div>
    );
};

export default AboutUs;
