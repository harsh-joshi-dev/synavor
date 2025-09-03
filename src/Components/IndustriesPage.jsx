import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Zap,
  TrendingUp,
  Users,
  ShoppingBag,
  CarFront,
  Hamburger,
  Heart,
  FlaskConical,
} from "lucide-react";

const industries = {
  "Food & Beverage": {
    title: "Food & Beverage",

    description1:
      "Enable transparency, accelerate decision making and drive cost savings in a complex industry with changing consumer preferences",

    image: "./assets/industries1.jpg",
    icon: Hamburger,
  },
  "Automotive & Industrial": {
    title: "Automotive & Industrial",

    description1:
      "Strengthen operational resilience and enhance decision-making by unifying your company’s critical business functions for supporting core manufacturing operations",

    image: "./assets/industries2.jpg",
    icon: CarFront,
  },
  "Healthcare & Pharma": {
    title: "Healthcare & Pharma",

    description1:
      "Fuel innovation and accelerate speed to market through cross functional collaboration while delivering quality and market leading value",

    image: "./assets/industries3.jpg",
    icon: Heart,
  },
  Energy: {
    title: "Energy",

    description1:
      "Foster reliability by minimizing disruptions and securing access to raw materials in the face of changing regulations, demand pressures and supply chain interruptions",

    image: "./assets/industries4.jpg",
    icon: Zap,
  },
  Chemicals: {
    title: "Chemicals",

    description1:
      "Improve competitiveness by breaking silos and connecting workflows in an environment with rapid shifts in labor, materials, capacities and volumes",

    image: "./assets/industries5.jpg",
    icon: FlaskConical,
  },
  "Technology & Telecommunication": {
    title: "Technology & Telecommunication",

    description1:
      "Simplifying complexity, improving transparency and enabling faster innovation through seamless connectivity and modeling in a fast moving and competitive landscape",

    image: "./assets/industries6.jpg",
    icon: Users,
  },
};

export default function IndustriesPage() {
  const [filter, setFilter] = useState("all");

  const filteredIndustries = Object.values(industries);

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

    //         <div className="px-6 text-center py-12">
    //             {/* <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2> */}
    // <motion.div
    //                         initial={{ opacity: 0, y: 20 }}
    //                         whileInView={{ opacity: 1, y: 0 }}
    //                         transition={{ duration: 0.6 }}
    //                         viewport={{ once: true }}
    //                         className="inline-flex items-center px-4 py-4 text-xl bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200 mb-6"
    //                     >
    //                         <Users className="w-4 h-4 mr-2" />
    //                         Industries We Serve
    //                     </motion.div>

    //             {/* Filter buttons */}
    //             {/* <div className="lg:flex hidden justify-center gap-4 mb-8">
    //                 <button
    //                     onClick={() => setFilter("all")}
    //                     className={`px-4 py-2 rounded-full ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
    //                         }`}
    //                 >
    //                     All
    //                 </button>
    //                 {Object.values(industries).map((i) => (
    //                     <button
    //                         key={i.title}
    //                         onClick={() => setFilter(i.title)}
    //                         className={`px-4 py-2 rounded-full ${filter === i.title ? "bg-blue-600 text-white" : "bg-gray-200"
    //                             }`}
    //                     >
    //                         {i.title}
    //                     </button>
    //                 ))}
    //             </div> */}

    //             {/* Grid */}
    //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-32 mt-1">
    //                 <AnimatePresence mode="popLayout">
    //                     {filteredIndustries.map((industry) => {
    //                         const Icon = industry.icon;
    //                         return (
    //                             <motion.div
    //                                 key={industry.title}
    //                                 className="rounded-2xl bg-white overflow-hidden flex flex-col cursor-pointer"
    //                                 variants={cardVariants}
    //                                 initial="hidden"
    //                                 animate="visible"
    //                                 exit="exit"
    //                                 layout
    //                                 whileHover={{
    //                                     scale: 1.03,
    //                                     boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
    //                                     transition: {
    //                                         duration: 0.3,
    //                                         ease: "easeInOut",
    //                                     },
    //                                 }}
    //                                 whileTap={{
    //                                     scale: 0.97,
    //                                 }}
    //                             >
    //                                 <img
    //                                     src={industry.image}
    //                                     alt={industry.title}
    //                                     className="h-40 w-full object-cover"
    //                                 />
    //                                 <div className="p-6  flex flex-col flex-grow">
    //                                     <div className="flex items-center gap-3 mb-4">
    //                                         <Icon className="w-8 h-8 text-blue-600" />
    //                                         <div>
    //                                             <h3 className="text-xl font-semibold">{industry.title}</h3>
    //                                             <p className="text-sm text-gray-500">{industry.subtitle}</p>
    //                                         </div>
    //                                     </div>
    //                                     <p className="text-gray-700 text-sm mb-2">{industry.description1}</p>
    //                                     <p className="text-gray-600 text-sm mb-4">{industry.description2}</p>

    //                                 </div>
    //                             </motion.div>
    //                         );
    //                     })}
    //                 </AnimatePresence>
    //             </div>
    //         </div>
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 inline-flex items-center px-4 py-4 text-xl bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-200 "
        >
          <Users className="w-4 h-4 mr-2" />
          Industries We Serve
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredIndustries.map((industry) => {
              const Icon = industry.icon;
              return (
                <motion.div
                  key={industry.title}
                  className="rounded-2xl text-white  overflow-hidden flex flex-col cursor-pointer shadow-sm  bg-cover bg-center bg-opacity-40"
                  style={{
                    backgroundImage: `linear-gradient(rgba(10,10,10,0.6), rgba(0,0,0,0.6)), url(${industry.image})`,
                  }}
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
                  whileTap={{ scale: 0.97 }}
                >
                  {/* <img
                                        src={industry.image}
                                        alt={industry.title}
                                        className="h-40 w-full object-cover"
                                    /> */}

                  <div className=" p-10 items-center justify-center flex  flex-col flex-grow">
                    <div className="flex items-center justify-center  gap-3 mb-4">
                      <Icon className="w-8 h-8 " />
                      <div className="text-center " >
                        <h3 className="text-xl font-semibold leading-5">
                          {industry.title}
                        </h3>
                        {/* <p className="text-l">{industry.subtitle}</p> */}
                      </div>
                    </div>

                    <p className=" text-l mb-5">{industry.description1}</p>
                   
                    <button className=" group border-2 rounded-full hover:border-blue-700 hover:text-blue-50 py-1 w-[200px]">
                      
                      Explore Solutions 
                    </button>
                    {/* <p className="text-gray-600 text-sm mb-4">{industry.description2}</p> */}
                    {/* <div className="flex flex-wrap gap-2 mt-auto">
                                            {industry.stats.map((stat, i) => (
                                                <span
                                                    key={i}
                                                    className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                                                >
                                                    {stat}
                                                </span>
                                            ))}
                                        </div> */}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
