import React, { useState } from "react";
import { ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
    {
        title: "Improve Demand Planning",
        description:
            "Quickly gain insights and forecast demand with AI-driven analytics, improving accuracy and reducing waste across your supply chain operations.",
        image: "./assets/improve.jpg",
        benefits: ["AI-powered forecasting", "Real-time analytics", "Reduced waste", "Improved accuracy"]
    },
    {
        title: "Flexible and Rapid Supply Planning",
        description:
            "Easily adapt supply chain strategies to meet changing business demands with real-time updates and intelligent automation.",
        image: "./assets/flexible.jpg",
        benefits: ["Adaptive strategies", "Real-time updates", "Intelligent automation", "Quick response"]
    },
    {
        title: "Eliminate Stockouts",
        description:
            "Reduce risks of stockouts by aligning procurement with demand forecasts automatically, ensuring optimal inventory levels.",
        image: "./assets/stock.jpg",
        benefits: ["Risk reduction", "Automatic alignment", "Optimal inventory", "Continuous monitoring"]
    },
    {
        title: "Collaborate in Real Time",
        description:
            "Quickly gain consensus on demand plans by collaborating with all departments in the flow of work using Microsoft Teams integration.",
        image: "./assets/collaborate.jpg",
        benefits: ["Real-time collaboration", "Cross-department sync", "Microsoft Teams integration", "Quick consensus"]
    },
];

export default function FeatureSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-white section-padding">
            <div className="max-w-7xl mx-auto container-padding">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
                    >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Core Features
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Transform Your <span className="text-gradient">Procurement</span> Operations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Leverage cutting-edge AI/ML technology to optimize every aspect of your supply chain 
                        and procurement processes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left side - Enhanced Accordion */}
                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <motion.div 
                                key={index} 
                                className="group"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                                        activeIndex === index 
                                            ? 'border-blue-200 bg-blue-50 shadow-medium' 
                                            : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className={`text-xl font-semibold transition-colors ${
                                            activeIndex === index ? "text-blue-700" : "text-gray-800"
                                        }`}>
                                            {feature.title}
                                        </h3>
                                        <ChevronDown
                                            className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                                                activeIndex === index ? "rotate-180 text-blue-600" : "rotate-0"
                                            }`}
                                        />
                                    </div>

                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-4 space-y-4"
                                        >
                                            <p className="text-gray-600 leading-relaxed">
                                                {feature.description}
                                            </p>
                                            
                                            <div className="grid grid-cols-2 gap-2">
                                                {feature.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-center space-x-2">
                                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                        <span className="text-sm text-gray-700">{benefit}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            
                                            <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                                                Learn More
                                                <ArrowRight className="w-4 h-4 ml-1" />
                                            </button>
                                        </motion.div>
                                    )}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right side - Enhanced Image Display */}
                    <div className="relative">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl"></div>
                            <img
                                src={features[activeIndex]?.image || "/assets/dashboard.jpg"}
                                alt={features[activeIndex]?.title}
                                className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border border-gray-100 transition-all duration-500 ease-in-out"
                            />
                            
                            {/* Feature Highlight Overlay */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-large p-6 border border-gray-100 max-w-xs">
                                <h4 className="font-semibold text-gray-900 mb-2">
                                    {features[activeIndex]?.title}
                                </h4>
                                <p className="text-sm text-gray-600 mb-3">
                                    {features[activeIndex]?.description.substring(0, 100)}...
                                </p>
                                <div className="flex items-center text-blue-600 text-sm font-medium">
                                    <span>Explore Feature</span>
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
