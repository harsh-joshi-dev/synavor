import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, Zap, TrendingUp, Users, ShoppingBag } from "lucide-react";

const industries = {
    "Consumer Packaged Goods": {
        title: "Consumer Packaged Goods",
        subtitle: "Transforming Consumer Businesses",
        description1: "Driving innovation and efficiency for leading CPG companies worldwide with AI-powered insights.",
        description2: "Helping businesses improve customer engagement and streamline supply chains for maximum profitability.",
        image: "./assets/industries1.jpg",
        icon: ShoppingBag,
        stats: ["40% cost reduction", "60% faster delivery", "25% inventory optimization"]
    },
    "Energy & Industrials": {
        title: "Energy, Chemicals & Industrials",
        subtitle: "Building a Sustainable Future",
        description1: "Ensuring consistent, cost-efficient supply of resources in a disrupted market with predictive analytics.",
        description2: "Supporting organizations in achieving sustainable profitability through intelligent procurement solutions.",
        image: "./assets/industries2.jpg",
        icon: Building2,
        stats: ["35% efficiency gain", "50% risk reduction", "30% sustainability improvement"]
    },
    "Financial Services": {
        title: "Financial Services",
        subtitle: "Future of Digital Finance",
        description1: "Helping global banks modernize digital systems for efficiency and regulatory compliance.",
        description2: "Client success story on reducing operational costs by 40% while improving service quality.",
        image: "./assets/industries3.jpg",
        icon: TrendingUp,
        stats: ["40% cost reduction", "45% faster processing", "60% compliance improvement"]
    },
    "Life Sciences": {
        title: "Life Sciences",
        subtitle: "Innovating Healthcare",
        description1: "Revolutionizing patient care with AI-driven solutions and predictive healthcare analytics.",
        description2: "Enabling providers to reduce costs and improve outcomes through intelligent supply chain management.",
        image: "./assets/industries4.jpg",
        icon: Zap,
        stats: ["50% supply chain efficiency", "35% cost savings", "40% faster delivery"]
    },
    "Retail": {
        title: "Retail",
        subtitle: "Smarter Shopping Experiences",
        description1: "Driving personalization and efficiency in retail operations with data-driven insights.",
        description2: "Helping retailers adapt to the digital-first customer through intelligent inventory management.",
        image: "./assets/industries5.jpg",
        icon: Users,
        stats: ["45% inventory optimization", "30% cost reduction", "55% customer satisfaction"]
    },
};

export default function IndustriesPage() {
    const [filter, setFilter] = useState("all");

    const filteredIndustries =
        filter === "all"
            ? Object.values(industries)
            : Object.values(industries).filter((i) => i.title === filter);

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
        exit: {
            opacity: 0,
            y: -40,
            scale: 0.9,
            transition: {
                duration: 0.4,
                ease: "easeIn",
            },
        },
    };

    return (
        // <section className="relative min-h-screen w-full overflow-hidden bg-gray-900">
        //     {/* Background with fade effect */}
        //     <AnimatePresence mode="wait">
        //         <motion.div
        //             key={active}
        //             className="absolute inset-0 bg-cover bg-center"
        //             style={{ backgroundImage: `url(${industries[active].image})` }}
        //             initial={{ opacity: 0 }}
        //             animate={{ opacity: 1 }}
        //             exit={{ opacity: 0 }}
        //             transition={{ duration: 1.2 }}
        //         />
        //     </AnimatePresence>

        //     {/* Enhanced Dark Overlay with gradient */}
        //     <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        //     <div className="relative flex h-screen text-white">
        //         {/* Enhanced Sidebar */}
        //         <div className="flex flex-col items-start px-6 lg:px-8 py-8 lg:py-12 overflow-y-auto space-y-3 lg:space-y-4 bg-black/20 backdrop-blur-custom">
        //             {industryKeys.map((industry, index) => (
        //                 <motion.button
        //                     key={industry}
        //                     onClick={() => setActiveIndex(index)}
        //                     className={`flex justify-between items-center text-left text-base lg:text-lg font-semibold py-3 px-4 rounded-xl border-l-4 pl-4 w-full transition-all duration-300 ${
        //                         active === industry
        //                             ? "border-blue-400 text-white bg-white/10 backdrop-blur-custom"
        //                             : "border-transparent text-gray-300 hover:text-white hover:border-blue-300 hover:bg-white/5"
        //                     }`}
        //                     whileHover={{ x: 5 }}
        //                     whileTap={{ scale: 0.98 }}
        //                 >
        //                     <span>{industry}</span>
        //                     {active === industry && (
        //                         <motion.div
        //                             initial={{ opacity: 0, scale: 0 }}
        //                             animate={{ opacity: 1, scale: 1 }}
        //                             className="w-2 h-2 bg-blue-400 rounded-full"
        //                         />
        //                     )}
        //                 </motion.button>
        //             ))}
        //         </div>

        //         {/* Enhanced Right Content */}
        //         <div className="flex-1 flex flex-col justify-center px-12 lg:px-16">
        //             <AnimatePresence mode="wait">
        //                 <motion.div
        //                     key={active}
        //                     initial={{ opacity: 0, y: 30 }}
        //                     animate={{ opacity: 1, y: 0 }}
        //                     exit={{ opacity: 0, y: -30 }}
        //                     transition={{ duration: 0.8 }}
        //                     className="max-w-2xl"
        //                 >
        //                     {/* Industry Badge */}
        //                     <motion.div
        //                         initial={{ opacity: 0, x: -20 }}
        //                         animate={{ opacity: 1, x: 0 }}
        //                         transition={{ duration: 0.6, delay: 0.2 }}
        //                         className="inline-flex items-center px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-400/30 mb-6"
        //                     >
        //                         {(() => {
        //                             const IconComponent = industries[active].icon;
        //                             return <IconComponent className="w-4 h-4 mr-2" />;
        //                         })()}
        //                         {industries[active].subtitle}
        //                     </motion.div>

        //                     <motion.h1 
        //                         className="text-5xl lg:text-6xl font-bold mb-4 leading-tight"
        //                         initial={{ opacity: 0, y: 20 }}
        //                         animate={{ opacity: 1, y: 0 }}
        //                         transition={{ duration: 0.6, delay: 0.3 }}
        //                     >
        //                         {industries[active].title}
        //                     </motion.h1>

        //                     <div className="space-y-8">
        //                         <motion.div
        //                             initial={{ opacity: 0, y: 20 }}
        //                             animate={{ opacity: 1, y: 0 }}
        //                             transition={{ duration: 0.6, delay: 0.4 }}
        //                         >
        //                             <h2 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3">
        //                                 Industry Impact
        //                             </h2>
        //                             <p className="text-xl text-gray-200 leading-relaxed">
        //                                 {industries[active].description1}
        //                             </p>
        //                         </motion.div>

        //                         <motion.div
        //                             initial={{ opacity: 0, y: 20 }}
        //                             animate={{ opacity: 1, y: 0 }}
        //                             transition={{ duration: 0.6, delay: 0.5 }}
        //                         >
        //                             <h2 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-3">
        //                                 Success Metrics
        //                             </h2>
        //                             <p className="text-xl text-gray-200 leading-relaxed mb-4">
        //                                 {industries[active].description2}
        //                             </p>

        //                             {/* Stats Grid */}
        //                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        //                                 {industries[active].stats.map((stat, idx) => (
        //                                     <motion.div
        //                                         key={idx}
        //                                         initial={{ opacity: 0, scale: 0.9 }}
        //                                         animate={{ opacity: 1, scale: 1 }}
        //                                         transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
        //                                         className="bg-white/10 backdrop-blur-custom rounded-lg p-3 border border-white/20"
        //                                     >
        //                                         <div className="text-sm text-blue-300 font-medium">{stat}</div>
        //                                     </motion.div>
        //                                 ))}
        //                             </div>
        //                         </motion.div>

        //                         <motion.button 
        //                             className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 group"
        //                             initial={{ opacity: 0, y: 20 }}
        //                             animate={{ opacity: 1, y: 0 }}
        //                             transition={{ duration: 0.6, delay: 0.7 }}
        //                             whileHover={{ scale: 1.05 }}
        //                         >
        //                             Explore Solutions
        //                             <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        //                         </motion.button>
        //                     </div>
        //                 </motion.div>
        //             </AnimatePresence>
        //         </div>
        //     </div>
        // </section>

        <div className="px-6 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>

            {/* Filter buttons */}
            <div className="lg:flex hidden justify-center gap-4 mb-8">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded-full ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
                        }`}
                >
                    All
                </button>
                {Object.values(industries).map((i) => (
                    <button
                        key={i.title}
                        onClick={() => setFilter(i.title)}
                        className={`px-4 py-2 rounded-full ${filter === i.title ? "bg-blue-600 text-white" : "bg-gray-200"
                            }`}
                    >
                        {i.title}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-32 mt-1">
                <AnimatePresence mode="popLayout">
                    {filteredIndustries.map((industry) => {
                        const Icon = industry.icon;
                        return (
                            <motion.div
                                key={industry.title}
                                className="rounded-2xl bg-white overflow-hidden flex flex-col cursor-pointer"
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                layout
                                whileHover={{
                                    scale: 1.03,
                                    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    },
                                }}
                                whileTap={{
                                    scale: 0.97,
                                }}
                            >
                                <img
                                    src={industry.image}
                                    alt={industry.title}
                                    className="h-40 w-full object-cover"
                                />
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                        <div>
                                            <h3 className="text-xl font-semibold">{industry.title}</h3>
                                            <p className="text-sm text-gray-500">{industry.subtitle}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-2">{industry.description1}</p>
                                    <p className="text-gray-600 text-sm mb-4">{industry.description2}</p>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {industry.stats.map((stat, i) => (
                                            <span
                                                key={i}
                                                className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                                            >
                                                {stat}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}
