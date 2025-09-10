import React, { useEffect, useState } from "react";
import { ChevronDown, CheckCircle, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const features = [
  {
    title: "Inventory Controls & Management",
    description: (
      <>
        Leverage digital{" "}
        <strong>
          integrated inventory management and controls solutions.{" "}
        </strong>
        Unify your supply chain, sales, procurement, and finance decision-making
        through robust inventory controls algorithms and frameworks, to drive
        strategies with execution excellence.
      </>
    ),
    image: [
      "./assets/Inventory/Picture1.png",
      // "./assets/Inventory/Picture2.png",
      // "./assets/Inventory/Picture3.png",
    ],
    benefits: [
      "Robust data integration",
      "Modelling, simulations & optimization tools", // fixed wording
      "Analytics with KPI dashboard",
      "Transparency, accuracy & speed",
    ],
    video: ["./assets/Inventory/video.mp4"],
  },
  {
    title: "Commodities Risk Management",
    description: (
      <>
        Robust{" "}
        <strong>
          daily commodity positioning reporting and management solution.
        </strong>{" "}
        Connected product and material metadata with granular finance data to
        get full understanding of each material entity. Efficient analytics
        including predictive modeling to evaluate, report and manage commodity
        physical and financial risks & opportunities.
      </>
    ),
    image: [
      "./assets/Commodity/Picture1.png",
      // "./assets/Commodity/Picture2.png",
      // "./assets/Commodity/Picture3.png",
    ],
    benefits: [
      // Left column
      "Agile & automated solutions",
      "AI/ML driven prediction analytics",

      // Right column
      "Built-in Mark-to-Market and Hedge P&L reports",
      "Commodity risk management governance support",
    ],
    video: ["./assets/Commodity/video.mp4"],
  },
  {
    title: "Supplier Segmentation & SRM Support",
    description: (
      <>
        Best-in-class <strong>supplier lifecycle management solution</strong>{" "}
        with end-to-end building blocks for strategic sourcing. Leveraging
        internal, supplier-led, and market intelligence, powered by Gen AI and
        Agentic AI, to drive segmentation, portfolio, performance management,
        optimize relationships, and deliver incremental value.
      </>
    ),
    image: [
      "./assets/Supplier/Picture1.png",
      // "./assets/Supplier/Picture2.png",
      // "./assets/Supplier/Picture3.png",
    ],
    benefits: [
      "Supplier segmentation & positioning models",
      "Performance score cards",
      "Risk profiles and heat maps",
      "SRM activity management workflows",
    ],
    video: ["./assets/Supplier/video.mp4"],
  },
  {
    title: "Tariff Impact Management",
    description: (
      <>
        Comprehensive and adaptable{" "}
        <strong>tariff assessment and management solution.</strong> Simple
        description-based tariff impact analysis of existing spend with scenario
        planning and alternative sourcing evaluation functionalities. Uses AI
        powered source discovery and analytics.
      </>
    ),
    image: [
      "./assets/Tariff/Picture1.png",
      // "./assets/Tariff/Picture2.png",
      // "./assets/Tariff/Picture3.png",
    ],
    benefits: [
      "What-if analysis tools",
      "Alternate tariff optimization sources",
      "Predictive spend analytics",
      "Real time tariff news and impact dashboards",
    ],
  },
];

export default function FeatureSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);

  // auto rotate images every 2s
  useEffect(() => {
    const images = features[activeIndex]?.image || [];
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="bg-white section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
          >
            <CheckCircle className="w-4 h-4 mr-2" />
            Core Solutions
          </motion.div>
          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your <span className="">Procurement & Supply Chain </span>{" "}
            Operations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage advanced AI/ML technologies to optimize core supply chain
            and procurement processes.
          </p> */}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Accordion */}
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
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeIndex === index
                      ? "border-blue-200 bg-blue-50 shadow-medium"
                      : "border-gray-200 hover:border-blue-200 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3
                      className={`text-xl font-semibold transition-colors ${
                        activeIndex === index
                          ? "text-blue-700"
                          : "text-gray-800"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <ChevronDown
                      className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${
                        activeIndex === index
                          ? "rotate-180 text-blue-600"
                          : "rotate-0"
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

                      {/* <div className="grid grid-cols-2 gap-2 ">
                        {feature.benefits.map((benefit, idx) => (
                          <div
                            key={idx}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 leading-[17px]">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div> */}
                      <a
                        href="#"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </a>
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Right side - Image Preview (always fixed position) */}
          {/* <div className="relative flex justify-center md:sticky md:top-24">
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
                className="relative w-full max-w-md mx-auto rounded-3xl shadow-2xl border border-gray-100 transition-all duration-500 ease-in-out"
              />

              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-large p-6 border border-gray-100 max-w-xs">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {features[activeIndex]?.title || "Smart Supply Chain Transformation"}
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  {features[activeIndex]?.description.substring(0, 100) || "Harness AI-driven insights to streamline procurement, cut costs, and boost efficiency across your supply chain."}...
                </p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Explore Feature</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          </div> */}

          {/* <div className="relative flex justify-center md:sticky md:top-24 flex-1">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl"></div>
              <div className="hidden md:block relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl border border-gray-100">
                <AnimatePresence mode="wait" custom={imgIndex}>
                  <motion.img
                    key={imgIndex}
                    src={
                      features[activeIndex]?.image?.[imgIndex] || "/assets/dashboard.jpg"
                    }
                    alt={features[activeIndex]?.title}
                    className="absolute inset-0 w-full h-full object-fill"
                    custom={imgIndex}
                    initial={{
                      opacity: 0,
                      x: imgIndex % 2 === 0 ? 150 : -150, // 👈 even = right, odd = left
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{
                      opacity: 0,
                      x: imgIndex % 2 === 0 ? -150 : 150, // 👈 leave opposite side
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>

              </div>
            </motion.div>
          </div> */}

          <div className="relative md:flex justify-center md:sticky md:top-28 flex-1 mb-20 hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-[80%] max-w-3xl mx-auto h-auto"
            >
              {/* Background effect */}
              <div className="absolute inset-0 rounded-2xl blur-xl"></div>

              {/* Main image */}
              <div className="hidden md:block top-12 relative w-full h-[450px] overflow-hidden rounded-2xl">
                <AnimatePresence mode="wait" custom={imgIndex}>
                  <video
                    src={features[activeIndex].video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* 🎥 Video card - bottom left */}
              {features[activeIndex]?.video && (
                <motion.div
                  className="absolute -top-2 -left-16 bg-white rounded-lg shadow-lg border border-gray-100 w-64 h-45 z-20 overflow-hidden"
                  // animate={{ y: [0, -10, 0, 10, 0] }} // Up-down motion
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <motion.img
                    key={imgIndex}
                    src={
                      features[activeIndex]?.image?.[imgIndex] ||
                      "/assets/dashboard.jpg"
                    }
                    alt={features[activeIndex]?.title}
                    className="absolute inset-0 w-full h-full object-contain"
                    custom={imgIndex}
                    // initial={{ opacity: 0, x: imgIndex % 2 === 0 ? 150 : -150 }}
                    // animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: imgIndex % 2 === 0 ? -150 : 150 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
              )}

              {/* 📋 Benefits card - bottom right */}
              {features[activeIndex]?.benefits?.length > 0 && (
                <motion.div
                  className="absolute -bottom-24 -right-36 bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-full z-20"
                  // animate={{ y: [0, -10, 0, 10, 0] }} // Up-down motion
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    {features[activeIndex]?.title}
                  </h4>

                  {/* <ul className="space-y-1 text-xs text-gray-700 mb-3">
                    { => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-600 mr-1">✔</span>
                        {benefit}
                      </li>
                    ))}
                  </ul> */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-3">
                    {features[activeIndex].benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 leading-[17px]">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 "
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
