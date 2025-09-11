import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const solutionDetail = [
  {
    heading: "Inventory Controls & Management",
    title:
      "Measure, Control and Optimize Inventory for savings, efficiencies and resilience",
    description:
      "Enable smarter, data-driven decisions with enterprise-grade controls, cutting edge algorithms, and AI/ML powered workflow solutions",
    features: [
      {
        title: "Robust data integration across company’s information ecosystem",
        points: [
          "Agnostic to source, format and input source",
          "Real time updates with accuracy validation",
        ],
      },
      {
        title:
          "Layers of built-in capabilities for best-in-class inventory controls and optimization",
        points: [
          "Intuitive dashboards for timely execution",
          "Advanced analytics for data driven decision making and boost performance",
          "Optimization / Modelling capabilities for scenario simulation and cost improvement",
        ],
      },
      {
        title:
          "Turn daily actions and numbers into knowledge and power using AI/ML solutions",
        points: [
          "Work-flow optimization with Human in the loop (HITL) approach and automation",
          "Descriptive analytics and efficient user interface to enable expert led execution",
        ],
      },
      {
        title: "Mitigate risk and improve resilience",
        points: [
          "Batching, micro-batching and real streams of data with provides timely and complete data for better decision making",
          "Advanced analytics and optimization modeling proactively mitigates risks",
        ],
      },
    ],
    image: [
      "./assets/Inventory/Picture1.png",
      "./assets/Inventory/Picture2.png",
      "./assets/Inventory/Picture3.png",
    ],
  },
  {
    heading: "Commodity Risk Management",
    title:
      "Commodity Daily Positioning Management Platform for Procurement and Finance teams",
    description:
      "Empower your teams with integrated, smarter, & nimble solutions that are powered by complex analytics, AI/ML led predictive modeling & industry tested workflows",
    features: [
      {
        title: "Foundational integrated source architecture",
        points: [
          "Intelligent agentic AI leveraged mapping to develop coverage / exposure monitoring",
          "Flexible rule definition per company policy",
        ],
      },
      {
        title:
          "Fuel critical decisions efficiently by supercharging your data with right analytics",
        points: [
          "Exhaustive and structured analytics to maximize value of daily commodity hedges",
          "Scenario modelling and commodity price tracking for effective governance",
        ],
      },
      {
        title: "Seamless two-way integration with existing system landscape",
        points: [
          "Work-flow actions and ability to transfer information in reports supports decision making and compliance tasks",
          "Consumes and feeds ERP to support finance processes",
        ],
      },
      {
        title: "Control risks and opportunities with confidence",
        points: [
          "Commodity risk management governance support",
          "Advanced analytics and predictive modelling to enable coverage decisions",
        ],
      },
    ],
    image: [
      "./assets/Commodity/Picture1.png",
      "./assets/Commodity/Picture2.png",
      "./assets/Commodity/Picture3.png",
    ],
  },
  {
    heading: "Supplier Segmentation & SRM Support",
    title:
      "Unlock Competitive Advantage by effectively managing suppliers through the full life cycle",
    description:
      "Monetize longest phase of supplier’s relationship, and drive value aligned with business objective through comprehensive end-to-end supplier management solution",
    features: [
      {
        title: "Spend analytics and segmentation",
        points: [
          "AI powered spend analytics and categorization with actionable insights",
          "Best in class segmentation framework powered by agentic AI solutions",
        ],
      },
      {
        title: "Autonomous loop for performance management",
        points: [
          "Analytics and modelling engine to feed performance tracking and reporting",
          "Built in frameworks for supplier positioning & profiling using AI enabled search algorithms",
        ],
      },
      {
        title: "Risk profiling for resilience and risk management",
        points: [
          "Real-time alerts and proactive mitigation support",
          "Flexible drill-down user interfaces to empower teams for more control",
        ],
      },
      {
        title: "Supplier Relationship Management (SRM) excellence",
        points: [
          "Portfolio management, interaction models and SRM governance models and workflows",
          "Enable communication, change management and tracking using actionable features",
        ],
      },
    ],
    image: [
      "./assets/Supplier/Picture1.png",
      "./assets/Supplier/Picture2.png",
      "./assets/Supplier/Picture3.png",
    ],
  },
  {
    heading: "Tariff Impact Management",
    title: "Monitor, Evaluate and Mitigate Tariff impact",
    description:
      "Effortlessly manage tariff risk seamlessly with impact overview, scenario based 'What-if' analysis and mitigate using trade options through AI enabled solutions",
    cta: "Request a Demo",
    features: [
      {
        title: "Informative tariff impact monitoring",
        points: [
          "Description based tariff impact analysis for given spend powered by AI enabled search",
          "Industry news, predictive spend review and categorized tariff impact dashboard",
        ],
      },
      {
        title: "Scenario analysis",
        points: [
          "Flexible scenario analysis using multiple variable inputs to estimate potential impact",
          "Seamless information and communication enablement through exportable and built in reports",
        ],
      },
      {
        title: "Options analysis",
        points: [
          "Best alternative to existing impact available through import data analytics",
          "Full visibility to control and determine optional benefits with visibility and control on calculation methodologies",
        ],
      },
      {
        title: "Enhance resilience proactively",
        points: [
          "Actionable workflows and an ability to export and report analytics for impact management",
          "Executive reporting for leadership and risk committees built in",
        ],
      },
    ],
    image: [
      "./assets/Tariff/Picture1.png",
      "./assets/Tariff/Picture2.png",
      "./assets/Tariff/Picture3.png",
    ],
  },
];

const SolutionsPage = () => {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState(solutionDetail[0].heading);
  const sectionRefs = useRef({});
  const isProgrammaticScroll = useRef(false);

  const handleClick = (id) => {
    setActive(id); // Set active immediately
    isProgrammaticScroll.current = true; // Disable scroll listener

    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Re-enable scroll listener after scroll completes
    setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 1000);
  };

  // Handle URL parameters for direct navigation to specific sections
  useEffect(() => {
    const solutionIndex = searchParams.get("solution");
    if (solutionIndex !== null && solutionDetail[parseInt(solutionIndex)]) {
      const targetSection = solutionDetail[parseInt(solutionIndex)];
      setActive(targetSection.heading);
      isProgrammaticScroll.current = true; // Disable scroll listener

      // Scroll to the section after a short delay to ensure the page is loaded
      setTimeout(() => {
        const element = sectionRefs.current[targetSection.heading];
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }

        // Re-enable scroll listener after scroll completes
        setTimeout(() => {
          isProgrammaticScroll.current = false;
        }, 1000);
      }, 100);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      if (isProgrammaticScroll.current) return; // Skip if we're programmatically scrolling

      const scrollPos = window.scrollY + 200;
      solutionDetail.forEach((section) => {
        const el = sectionRefs.current[section.heading];
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActive(section.heading);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen cursor-default">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2">
            Purpose-built Solutions Engineered for Effortless Efficiencies.
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Integrated value chain solutions designed to build a transparent,
            cohesive, and data-driven operational ecosystem. With actionable
            analytics, industry-leading frameworks, and tailored performance
            metrics, we enable organizations to enhance efficiency, reduce
            costs, and make agile, informed decisions.
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-[72px] z-40 md:flex hidden justify-center backdrop-blur-md py-3 px-6">
        <div className="flex gap-4 flex-wrap justify-center">
          {solutionDetail.map((section) => (
            <button
              key={section.heading}
              onClick={() => handleClick(section.heading)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 mt-2 ${active === section.heading
                  ? "bg-blue-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                }`}
            >
              {section.heading}
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {solutionDetail.map((sectionData, sectionIndex) => {
          // Decide background: even = default, odd = gradient
          const isGradient = sectionIndex % 2 !== 0;
          const sectionBg = isGradient
            ? "gradient-bg"
            : "";

          const [showExtras, setShowExtras] = useState(false);

          useEffect(() => {
            if (active === sectionData.heading) {
              const timer = setTimeout(() => setShowExtras(true), 5000); // 5 sec delay
              return () => clearTimeout(timer);
            } else {
              setShowExtras(false);
            }
          }, [active, sectionData.heading]);

          return (
            <div
              key={sectionIndex}
              className={`${sectionBg} relative scroll-mt-36 px-6 py-12 rounded-3xl`}
              ref={(el) => (sectionRefs.current[sectionData.heading] = el)}
              data-solution={sectionData.heading
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/&/g, "and")}
            >
              {/* Left-Right Section */}
              <div className="flex flex-col lg:flex-row gap-12 items-center mb-8">
                {/* Left: Title & Description */}
                <motion.div
                  className="lg:w-1/2 flex flex-col justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                    {sectionData.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    {sectionData.description}
                  </p>
                  <HashLink
                    smooth
                    to="/AboutUs#contact"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
                  >
                    Request a demo
                  </HashLink>
                </motion.div>

                {/* Right: Image */}
                <motion.div
                  className="lg:w-1/2 flex justify-center relative"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Main image */}
                  <div className="w-full h-[300px] sm:h-[350px] lg:h-[400px] relative">
                    <img
                      src={sectionData.image[0] || "/placeholder.jpg"}
                      alt={sectionData.title}
                      className="w-full h-full object-cover rounded-2xl shadow-lg"
                    />

                    {/* Bottom-right image (2nd) */}
                    {showExtras && (
                      <motion.img
                        src={sectionData.image[1] || "/placeholder.jpg"}
                        alt={`${sectionData.title} secondary`}
                        className="absolute -bottom-8 -right-8 w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-2xl shadow-md border-4 border-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                      />
                    )}

                    {/* Top-left image (3rd) */}
                    {showExtras && (
                      <motion.img
                        src={sectionData.image[2] || "/placeholder.jpg"}
                        alt={`${sectionData.title} tertiary`}
                        className="absolute -top-8 -left-8 w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-2xl shadow-md border-4 border-white"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    )}
                  </div>
                </motion.div>
              </div>

              {/* Features Section */}
              <div className="text-center mt-16">
                {/* <h3 className="text-2xl md:text-3xl font-bold mb-12 text-gray-900">
                  Features
                </h3> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {sectionData.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="gradient-bg rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
                      // className="bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold mb-4 text-black">
                        {feature.title}
                      </h4>
                      <ul className="space-y-2">
                        {feature.points.map((point, i) => (
                          <li
                            key={i}
                            className="flex items-start text-gray-700 text-sm"
                          >
                            <span className="mr-2 text-blue-400">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SolutionsPage;
