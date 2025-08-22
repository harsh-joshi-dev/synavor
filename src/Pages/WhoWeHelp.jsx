import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Eye, Users, BookOpen, Mail, Target, TrendingUp, Shield, Zap } from "lucide-react";

const whoWeHelp = [
    {
        name: "Vision & Strategy",
        tagline: "Shaping the Future Together.",
        details: "Our vision is to empower organizations with transformative digital solutions that drive efficiency, innovation, and growth. We aim to be a trusted partner in every stage of your digital journey.",
        extra: "We focus on long-term impact, ensuring that our technology solutions deliver sustained value across industries.",
        backgroundImage: "/assets/whywehelp/vision.jpg",
        icon: Eye,
        benefits: ["Strategic planning", "Digital transformation", "Long-term impact", "Innovation focus"],
        color: "blue"
    },
    {
        name: "Leadership & Culture",
        tagline: "Guided by Experience, Driven by Innovation.",
        details: "Our leadership team brings decades of expertise across industries, combining strategic insights with hands-on experience to deliver value-driven outcomes.",
        extra: "We foster a culture of integrity, inclusivity, and innovation that inspires both our employees and clients to succeed.",
        backgroundImage: "/assets/whywehelp/leadership.jpg",
        icon: Users,
        benefits: ["Expert leadership", "Cultural excellence", "Integrity focus", "Innovation culture"],
        color: "green"
    },
    {
        name: "Insights & Knowledge",
        tagline: "Insights that Inspire.",
        details: "Stay updated with our blog, where we share the latest industry trends, digital transformation strategies, and client success stories.",
        extra: "Our blog covers emerging technologies, thought leadership, and practical tips for businesses looking to scale with innovation.",
        backgroundImage: "/assets/whywehelp/blog.jpg",
        icon: BookOpen,
        benefits: ["Industry insights", "Thought leadership", "Best practices", "Trend analysis"],
        color: "purple"
    },
    {
        name: "Partnership & Support",
        tagline: "Let's Build Something Great Together.",
        details: "Reach out to our team to explore how we can help your business thrive in the digital age. Whether you need consulting, solutions, or ongoing support — we are here to assist.",
        extra: "We're available across multiple locations worldwide and always eager to discuss new opportunities.",
        backgroundImage: "/assets/whywehelp/contact.jpg",
        icon: Mail,
        benefits: ["Global support", "Consulting services", "Ongoing assistance", "Partnership focus"],
        color: "orange"
    },
];

const WhoWeHelpPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const contentRef = useRef(null);
    const sidebarRef = useRef(null);

    const handleScroll = () => {
        const scrollTop = contentRef.current.scrollTop;
        const sectionHeight = contentRef.current.scrollHeight / whoWeHelp.length;
        const index = Math.floor(scrollTop / sectionHeight);
        setActiveIndex(Math.min(index, whoWeHelp.length - 1));

        // Scroll sidebar to keep active item centered
        if (sidebarRef.current) {
            const btn = sidebarRef.current.children[index];
            const sidebarHeight = sidebarRef.current.clientHeight;
            const btnOffset = btn.offsetTop + btn.offsetHeight / 2;
            sidebarRef.current.scrollTo({
                top: btnOffset - sidebarHeight / 2,
                behavior: "smooth",
            });
        }
    };

    const getColorClasses = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600",
            green: "bg-green-100 text-green-600",
            purple: "bg-purple-100 text-purple-600",
            orange: "bg-orange-100 text-orange-600"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="max-w-7xl mx-auto container-padding text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
                    >
                        <Target className="w-4 h-4 mr-2" />
                        Who We Help
                    </motion.div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Empowering <span className="text-gradient">Organizations</span> Worldwide
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Discover how we help businesses across industries transform their operations 
                        through innovative technology solutions and strategic partnerships.
                    </p>
                </div>
            </section>

            {/* Interactive Showcase */}
            <section className="relative min-h-screen bg-gray-900">
                <div
                    ref={contentRef}
                    onScroll={handleScroll}
                    className="h-screen w-full overflow-y-auto scroll-smooth relative"
                >
                    {/* Background Images */}
                    {whoWeHelp.map((item, index) => (
                        <AnimatePresence key={index} mode="wait">
                            {activeIndex === index && (
                                <motion.div
                                    className="fixed inset-0 bg-cover bg-center -z-10"
                                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2 }}
                                />
                            )}
                        </AnimatePresence>
                    ))}

                    {/* Enhanced Dark Overlay */}
                    <div className="fixed inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/50 -z-5 pointer-events-none" />

                    <div className="flex min-h-[200vh] relative z-10">
                        {/* Enhanced Sidebar */}
                        <div
                            ref={sidebarRef}
                            className="flex flex-col items-center px-6 py-8 space-y-8 sticky top-0 h-screen overflow-y-auto bg-black/20 backdrop-blur-custom rounded-r-2xl"
                        >
                            {whoWeHelp.map((item, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        const sectionHeight = contentRef.current.scrollHeight / whoWeHelp.length;
                                        contentRef.current.scrollTo({
                                            top: sectionHeight * index,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="relative group flex flex-col items-center w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div
                                        className={`h-1 w-12 rounded-full transition-all duration-300 transform ${
                                            activeIndex === index
                                                ? "bg-blue-400 scale-x-150"
                                                : "bg-gray-400 group-hover:bg-blue-300 group-hover:scale-x-125"
                                        }`}
                                    />
                                    <span
                                        className={`mt-3 text-sm font-semibold transition-all duration-300 text-center ${
                                            activeIndex === index
                                                ? "opacity-100 text-white"
                                                : "opacity-70 group-hover:opacity-100 group-hover:text-blue-200"
                                        }`}
                                    >
                                        {item.name}
                                    </span>
                                    
                                    {/* Active Indicator */}
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -right-2 w-3 h-3 bg-blue-400 rounded-full"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Enhanced Content */}
                        <div className="flex-1 flex flex-col px-8 lg:px-16">
                            {whoWeHelp.map((item, index) => (
                                <div key={index} className="min-h-screen flex flex-col justify-center">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                            exit={{ opacity: 0, y: -30 }}
                                            transition={{ duration: 0.8 }}
                                            className="max-w-2xl text-white"
                                        >
                                            {/* Section Badge */}
                                                                        <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: activeIndex === index ? 1 : 0, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`inline-flex items-center px-4 py-2 ${getColorClasses(item.color)} rounded-full text-sm font-medium mb-6`}
                            >
                                {(() => {
                                    const IconComponent = item.icon;
                                    return <IconComponent className="w-4 h-4 mr-2" />;
                                })()}
                                {item.tagline}
                            </motion.div>

                                            <motion.h1 
                                                className="text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                            >
                                                {item.name}
                                            </motion.h1>

                                            <div className="space-y-8">
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.4 }}
                                                >
                                                    <h2 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3">
                                                        Overview
                                                    </h2>
                                                    <p className="text-xl text-gray-200 leading-relaxed">
                                                        {item.details}
                                                    </p>
                                                </motion.div>
                                                
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.5 }}
                                                >
                                                    <h2 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3">
                                                        Key Benefits
                                                    </h2>
                                                    <p className="text-xl text-gray-200 leading-relaxed mb-4">
                                                        {item.extra}
                                                    </p>
                                                    
                                                    {/* Benefits Grid */}
                                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                                        {item.benefits.map((benefit, idx) => (
                                                            <div key={idx} className="flex items-center space-x-3">
                                                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                                <span className="text-sm text-gray-300">{benefit}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </motion.div>

                                                <motion.button 
                                                    className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                    transition={{ duration: 0.6, delay: 0.6 }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    Learn More
                                                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                                </motion.button>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhoWeHelpPage;
