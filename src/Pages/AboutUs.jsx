import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Eye, Heart, Clock, Award, Building, Zap, Shield } from "lucide-react";

const aboutUsData = [
    { 
        title: "Our Mission", 
        image: "/assets/about/ourmission.jpg", 
        description: "To revolutionize procurement and supply chain operations through cutting-edge AI/ML technology, enabling businesses to achieve unprecedented efficiency and cost savings.",
        icon: Target,
        color: "blue"
    },
    { 
        title: "Our Vision", 
        image: "/assets/about/vision.jpg", 
        description: "To be the global leader in AI-powered procurement solutions, creating a world where supply chains are intelligent, sustainable, and perfectly optimized.",
        icon: Eye,
        color: "green"
    },
    { 
        title: "Our Team", 
        image: "/assets/about/team.jpg", 
        description: "A diverse team of industry experts, data scientists, and technology innovators passionate about transforming how businesses manage their supply chains.",
        icon: Users,
        color: "purple"
    },
    { 
        title: "Our Values", 
        image: "/assets/about/values.jpg", 
        description: "Integrity, innovation, excellence, and customer success drive everything we do, ensuring we deliver value that exceeds expectations.",
        icon: Heart,
        color: "red"
    },
    { 
        title: "Our History", 
        image: "/assets/about/history.jpg", 
        description: "Founded in 2010, we've evolved from a startup to a global leader, serving 500+ companies across 15+ countries with proven results.",
        icon: Clock,
        color: "yellow"
    },
    { 
        title: "Our Clients", 
        image: "/assets/about/client.jpg", 
        description: "Trusted by Fortune 500 companies and innovative startups alike, we've delivered measurable results across diverse industries worldwide.",
        icon: Building,
        color: "indigo"
    },
    { 
        title: "Our Culture", 
        image: "/assets/about/culture.jpg", 
        description: "We foster creativity, collaboration, and continuous learning, creating an environment where innovation thrives and excellence is the standard.",
        icon: Zap,
        color: "orange"
    },
    { 
        title: "Our Technology", 
        image: "/assets/about/technology.jpg", 
        description: "Leveraging the latest AI/ML advancements, cloud computing, and data analytics to deliver cutting-edge solutions that drive real business value.",
        icon: Shield,
        color: "teal"
    },
    { 
        title: "Our Commitment", 
        image: "/assets/about/commitment.jpg", 
        description: "Committed to quality, customer satisfaction, and continuous improvement, ensuring we remain at the forefront of procurement technology.",
        icon: Award,
        color: "pink"
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
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="max-w-7xl mx-auto container-padding text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
                    >
                        <Users className="w-4 h-4 mr-2" />
                        About Synavor
                    </motion.div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Driving <span className="text-gradient">Innovation</span> in Procurement
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        For over a decade, we've been at the forefront of procurement technology, 
                        helping businesses transform their supply chains through intelligent automation, 
                        predictive analytics, and AI-powered insights.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-white section-padding">
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
            </section>

            {/* About Grid Section */}
            <section className="bg-gray-50 section-padding">
                <div className="max-w-7xl mx-auto container-padding">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            What Makes Us <span className="text-gradient">Different</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover the core elements that define Synavor and drive our success 
                            in transforming procurement operations worldwide.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {aboutUsData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative overflow-hidden rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 bg-white border border-gray-100">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <motion.img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        
                                        {/* Icon Badge */}
                                        <div className={`absolute top-4 right-4 w-12 h-12 ${getColorClasses(item.color)} rounded-xl flex items-center justify-center shadow-medium`}>
                                            {(() => {
                                                const IconComponent = item.icon;
                                                return <IconComponent className="w-6 h-6" />;
                                            })()}
                                        </div>
                                        
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
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
            </section>

            {/* CTA Section */}
            <section className="bg-white section-padding">
                <div className="max-w-4xl mx-auto container-padding text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your <span className="text-gradient">Procurement</span>?
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
            </section>
        </div>
    );
};

export default AboutUs;
