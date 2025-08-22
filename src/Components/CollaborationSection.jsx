import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Handshake, TrendingUp, Target } from "lucide-react";

const data = [
    {
        title: "Procurement & Sourcing",
        description: "Empower sourcing teams to negotiate better deals and manage procurement processes seamlessly with AI-driven insights.",
        img: "./assets/tier1.jpg",
        bg: "bg-orange-100",
        icon: Target,
        benefits: ["Better negotiations", "Process automation", "AI insights", "Cost optimization"]
    },
    {
        title: "Finance Leaders & Analysts",
        description: "Get real-time insights to make faster and smarter financial decisions with predictive analytics.",
        img: "./assets/tier2.jpg",
        bg: "bg-green-100",
        icon: TrendingUp,
        benefits: ["Real-time insights", "Predictive analytics", "Smart decisions", "Risk management"]
    },
    {
        title: "Spend & Supply Chain Stakeholders",
        description: "Optimize your supply chain and reduce risks with better collaboration and intelligent monitoring.",
        img: "./assets/tier3.jpg",
        bg: "bg-purple-100",
        icon: Handshake,
        benefits: ["Supply optimization", "Risk reduction", "Smart collaboration", "Intelligent monitoring"]
    },
    {
        title: "Private Equity",
        description: "Unlock new opportunities by driving efficiency across portfolio companies with data-driven insights.",
        img: "./assets/tier4.jpg",
        bg: "bg-blue-100",
        icon: Users,
        benefits: ["Portfolio efficiency", "Opportunity identification", "Data insights", "Value creation"]
    },
];

export default function CollaborationSection() {
    return (
        <section className="gradient-bg section-padding">
            <div className="max-w-7xl mx-auto container-padding">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
                    >
                        <Users className="w-4 h-4 mr-2" />
                        Cross-Functional Collaboration
                    </motion.div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Built for <span className="text-gradient">Seamless Collaboration</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Seamlessly collaborate across the business to drive savings, reduce risk, 
                        manage compliance, track progress, and identify new opportunities.
                    </p>
                </div>

                {/* Enhanced Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative rounded-3xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300 bg-white border border-gray-100">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    
                                    {/* Icon Badge */}
                                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-medium">
                                        {(() => {
                                            const IconComponent = item.icon;
                                            return <IconComponent className="w-6 h-6 text-gray-700" />;
                                        })()}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                    
                                    {/* Benefits List */}
                                    <div className="space-y-2 mb-4">
                                        {item.benefits.map((benefit, idx) => (
                                            <div key={idx} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                                <span className="text-xs text-gray-600">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Action Button */}
                                    <button className="w-full flex items-center justify-center text-blue-600 hover:text-blue-700 font-medium text-sm py-2 rounded-lg hover:bg-blue-50 transition-all duration-200 group">
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>

                                {/* Bottom Label */}
                                <div className={`${item.bg} px-6 py-3 text-center`}>
                                    <span className="text-sm font-medium text-gray-800">{item.title}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-gray-600 mb-6">
                        Ready to transform your procurement collaboration?
                    </p>
                    <button className="btn-primary">
                        Start Your Free Trial
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
