import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, TrendingUp, Shield, Users, Globe, Zap, Building, Target, BarChart3 } from "lucide-react";

const solutions = [
    {
        name: "Inventory Management",
        tagline: "Smart Inventory. Smarter Business.",
        details: "Optimize inventory management with AI-powered insights. Reduce carrying costs, minimize stockouts, and improve demand forecasting with real-time visibility across warehouses and distribution centers.",
        backgroundImage: "/assets/solution/inventory.jpg",
        icon: BarChart3,
        benefits: ["AI-powered forecasting", "Real-time visibility", "Cost optimization", "Stockout prevention"],
        color: "blue"
    },
    {
        name: "Commodities Trading",
        tagline: "Navigate Market Volatility with Confidence.",
        details: "Gain real-time insights into global commodity markets. Track price fluctuations, assess market risks, and make informed trading decisions with advanced analytics and predictive modeling.",
        backgroundImage: "/assets/solution/commodity.jpg",
        icon: TrendingUp,
        benefits: ["Real-time market data", "Risk assessment", "Predictive analytics", "Global coverage"],
        color: "green"
    },
    {
        name: "Supplier Management",
        tagline: "Building Stronger Supplier Networks.",
        details: "Streamline supplier relationships and procurement processes. Strengthen vendor performance with transparent evaluations, collaborative workflows, and AI-driven insights.",
        backgroundImage: "/assets/solution/supplier.jpg",
        icon: Users,
        benefits: ["Vendor evaluation", "Performance tracking", "Collaborative workflows", "Risk management"],
        color: "purple"
    },
    {
        name: "Trade Compliance",
        tagline: "Simplify Global Trade Compliance.",
        details: "Stay ahead of complex international trade regulations with automated tariff classification, duty calculation, compliance tracking, and real-time regulatory updates.",
        backgroundImage: "/assets/solution/tarrif.jpg",
        icon: Shield,
        benefits: ["Automated classification", "Duty calculation", "Compliance tracking", "Regulatory updates"],
        color: "red"
    },
    {
        name: "Supply Chain Analytics",
        tagline: "Resilient, Agile, Connected.",
        details: "Unlock end-to-end visibility into your supply chain. Build resilience against disruptions with predictive insights, logistics tracking, and AI-driven planning and optimization.",
        backgroundImage: "/assets/solution/supplychain.jpg",
        icon: Globe,
        benefits: ["End-to-end visibility", "Predictive insights", "Logistics tracking", "AI-driven planning"],
        color: "indigo"
    },
    {
        name: "Financial Intelligence",
        tagline: "Transform Finance into a Strategic Powerhouse.",
        details: "Empower your finance teams with AI-driven forecasting, automated reporting, fraud detection tools, and real-time financial insights for strategic decision-making.",
        backgroundImage: "/assets/solution/finance.jpg",
        icon: TrendingUp,
        benefits: ["AI forecasting", "Automated reporting", "Fraud detection", "Strategic insights"],
        color: "emerald"
    },
    {
        name: "Private Equity Solutions",
        tagline: "Smarter Investments. Stronger Returns.",
        details: "Our PE solutions help firms manage portfolios with real-time insights, streamline deal workflows, enhance strategic decision-making, and optimize portfolio performance.",
        backgroundImage: "/assets/solution/PE.jpg",
        icon: Building,
        benefits: ["Portfolio insights", "Deal workflows", "Strategic decisions", "Performance optimization"],
        color: "amber"
    },
    {
        name: "Procurement Optimization",
        tagline: "Procurement Made Intelligent.",
        details: "Transform procurement with digital workflows, supplier analytics, contract management, and AI-powered optimization. Reduce costs, improve compliance, and gain complete visibility.",
        backgroundImage: "/assets/solution/procurement.jpg",
        icon: Target,
        benefits: ["Digital workflows", "Supplier analytics", "Contract management", "Cost reduction"],
        color: "teal"
    }
];

const SolutionsPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = () => {
        const scrollTop = scrollRef.current.scrollTop;
        const sectionHeight = scrollRef.current.scrollHeight / solutions.length;
        const index = Math.floor(scrollTop / sectionHeight);
        setActiveIndex(Math.min(index, solutions.length - 1));
    };

    const getColorClasses = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600",
            green: "bg-green-100 text-green-600",
            purple: "bg-purple-100 text-purple-600",
            red: "bg-red-100 text-red-600",
            indigo: "bg-indigo-100 text-indigo-600",
            emerald: "bg-emerald-100 text-emerald-600",
            amber: "bg-amber-100 text-amber-600",
            teal: "bg-teal-100 text-teal-600"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="max-w-7xl mx-auto container-padding text-center">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
                    >
                        <Zap className="w-4 h-4 mr-2" />
                        AI-Powered Solutions
                    </motion.div> */}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Purpose-built Solutions <span className="">Engineered</span> for Effortless Efficiencies.
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Discover our comprehensive suite of AI-powered solutions designed to transform
                        every aspect of your procurement and supply chain operations.
                    </p>
                </div>
            </section>

            {/* Solutions Showcase */}
            <section className="relative min-h-screen bg-gray-900">
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="h-screen w-full overflow-y-auto scroll-smooth relative"
                >
                    {/* Background Images */}
                    {solutions.map((sol, index) => (
                        <AnimatePresence key={index} mode="wait">
                            {activeIndex === index && (
                                <motion.div
                                    className="fixed inset-0 bg-cover bg-center -z-10"
                                    style={{ backgroundImage: `url(${sol.backgroundImage})` }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 1.2 }}
                                />
                            )}
                        </AnimatePresence>
                    ))}

                    {/* Dark Overlay */}
                    <div className="fixed inset-0 bg-black/60 -z-5 pointer-events-none" />

                    <div className="flex min-h-[200vh] relative z-10">
                        {/* Enhanced Sidebar */}
                        <div className="flex flex-col items-center px-6 py-8 space-y-6 sticky top-0 h-full overflow-y-auto bg-black/20 backdrop-blur-custom rounded-r-2xl">
                            {solutions.map((sol, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        const sectionHeight = scrollRef.current.scrollHeight / solutions.length;
                                        scrollRef.current.scrollTo({
                                            top: sectionHeight * index,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="relative group flex flex-col items-center w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div
                                        className={`h-1 w-12 rounded-full transition-all duration-300 transform ${activeIndex === index
                                                ? "bg-blue-400 scale-x-150"
                                                : "bg-gray-400 group-hover:bg-blue-300 group-hover:scale-x-125"
                                            }`}
                                    />
                                    <span
                                        className={`mt-3 text-sm font-semibold transition-all duration-300 text-center ${activeIndex === index
                                                ? "opacity-100 text-white"
                                                : "opacity-70 group-hover:opacity-100 group-hover:text-blue-200"
                                            }`}
                                    >
                                        {sol.name}
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
                            {solutions.map((sol, index) => (
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
                                            {/* Solution Badge */}
                                            <motion.div
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: activeIndex === index ? 1 : 0, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.2 }}
                                                className={`inline-flex items-center px-4 py-2 ${getColorClasses(sol.color)} rounded-full text-sm font-medium mb-6`}
                                            >
                                                {(() => {
                                                    const IconComponent = sol.icon;
                                                    return <IconComponent className="w-4 h-4 mr-2" />;
                                                })()}
                                                {sol.tagline}
                                            </motion.div>

                                            <motion.h1
                                                className="text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                            >
                                                {sol.name}
                                            </motion.h1>

                                            <motion.p
                                                className="text-xl text-gray-200 leading-relaxed mb-8"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                            >
                                                {sol.details}
                                            </motion.p>

                                            {/* Benefits Grid */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                                className="grid grid-cols-2 gap-4 mb-8"
                                            >
                                                {sol.benefits.map((benefit, idx) => (
                                                    <div key={idx} className="flex items-center space-x-3">
                                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                                        <span className="text-sm text-gray-300">{benefit}</span>
                                                    </div>
                                                ))}
                                            </motion.div>

                                            <motion.button
                                                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                Explore Solution
                                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                            </motion.button>
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

export default SolutionsPage;
