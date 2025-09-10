import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const whoWeHelp = [
    {
        id: "procurement",
        mainSection: {
            title: "Procurement & Sourcing",
            image: "/Procurement1.png",
            description:
                "Leading strategic benefit to leverage technology and AI / ML solutions for procurement function is to become a business partner and delivering enterprise value",
            keyPoints: [
                "Smarter and agile decision making allow deployment of more sophisticated solution set",
                "Reduce administrative burden and simplify self-serve",
                "Increased insights through leverage of internal and external data powered by analytics",
                "Democratization of data format, sources and timing. Focus on speed, transparency and accuracy",
                "Monetize supplier value through life cycle management",
                "Competitive advantage by being a leader",
            ],
        },
        bottomSections: [
            {
                title: "Supply Continuity",
                description:
                    "Optimized partnerships, improved inventory controls, long term resilience and risk management",
            },
            {
                title: "Innovation Excellence",
                description:
                    "Preferential access to supplier driven innovation. Strong positioning and governance",
            },
            {
                title: "Total Cost Advantage",
                description:
                    "Commodity management and forecasting typically deliver 3%-8% in cost savings, while supplier relationship management provides a sustained structural advantage.",
            },
            {
                title: "Resilience",
                description:
                    "60% of leading organizations achieved higher supply resilience by leveraging effective SRM and resource allocations",
            },
        ],
    },
    {
        id: "supplychain",
        mainSection: {
            title: "Supply Chain & Inventory",
            image: "/supply.png",
            description:
                "Empowering Supply Chain and Inventory controls team with AI/ML solutions enables resilience, transparency and data driven decision making. Resulting in a highly efficient function",
            keyPoints: [
                "Implement robust risk assessment and comprehensive scenario planning frameworks.",
                "Diversify supplier networks, explore regionalization, and maintain strategic buffer inventories.",
                "Measure and track resilience as a key performance indicator.",
                "Actively dismantle functional silos; establish and empower integrative roles ",
                "Formalize decision rights; foster seamless information flow and collaborative planning with internal and external partners. ",
                "Develop comprehensive capability-building programs focusing on analytical, digital, and leadership skills for supply chain professionals.",
            ],
        },
        bottomSections: [
            {
                title: "Supply Continuity & Resilience",
                description:
                    "Proactive, agile and flexible practices to support changing needs and demanding working environments",
            },
            {
                title: "Quality Excellence",
                description:
                    "Process control and seamless transparency / traceability to monitor, control and improve quality performance",
            },
            {
                title: "Total Cost Advantage",
                description:
                    "Structured cost advantage through optimized processes, scenario and optimization modelling to implement continuous learning strategies",
            },
            {
                title: "Efficient Customer Service",
                description:
                    "Best in class frameworks and automation support with transparency and resilience built in improves customer communications and deliverables",
            },
        ],
    },
    {
        id: "finance",
        mainSection: {
            title: "Finance & Treasury",
            image: "/finance.png",
            description:
                "Critical supply chain and procurement inputs for finance and treasury processes are elevated through seamless connectivity and timely information, resulting in savings and compliance efficiencies",
            keyPoints: [
                "Drive accelerated savings and efficiency with stronger cost control and optimized working capital utilization.",
                "Strengthen financial reporting, governance, and compliance through enhanced spend visibility, contract discipline, and AI-powered optimization.",
                "Mitigate risk and build agility via connected controls, robust policy compliance, fraud prevention, and proactive exposure management.",
                "Elevate strategic decision-making with greater transparency, executive alignment, and insights from timely reporting and forward-looking planning.",
                "Maximize margins and manage costs through effective commodity strategies and productivity-driven performance.",
            ],
        },
        bottomSections: [
            {
                title: "Supply Continuity & Resilience",
                description:
                    "Proactive, agile and flexible practices to support changing needs and demanding working environments",
            },
            {
                title: "Quality Excellence",
                description:
                    "Process control and seamless transparency / traceability to monitor, control and improve quality performance",
            },
            {
                title: "Total Cost Advantage",
                description:
                    "Structured cost advantage through optimized processes, scenario and optimization modelling to implement continuous learning strategies",
            },
            {
                title: "Efficient Customer Service",
                description:
                    "Best in class frameworks and automation support with transparency and resilience built in improves customer communications and deliverables",
            },
        ],
    }
];

const WhoWeHelpPage = () => {

    const [active, setActive] = useState(whoWeHelp[0].id);
    const sectionRefs = useRef({});

    const handleClick = (id) => {
        sectionRefs.current[id]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        setActive(id);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200; // offset for sticky nav
            whoWeHelp.forEach((section) => {
                const el = sectionRefs.current[section.id];
                if (el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
                    setActive(section.id);
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="max-w-7xl mx-auto container-padding text-center">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200 mb-6"
                    >
                        <Target className="w-4 h-4 mr-2" />
                        Who We Help
                    </motion.div> */}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Empowering <span className="">Teams Worldwide</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Discover how we help businesses transform their operations through intelligent and pragmatic solutions.
                    </p>
                </div>
            </section>

            <div className="sticky top-[72px] z-40 flex justify-center backdrop-blur-md py-3 px-6">
                <div className="flex gap-4">
                    {whoWeHelp.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => handleClick(section.id)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 mt-2 ${active === section.id
                                ? "bg-blue-600 text-white shadow-lg scale-105"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                                }`}
                        >
                            {section.mainSection.title}
                        </button>
                    ))}
                </div>
            </div>


            <div className="max-w-7xl mx-auto px-6 py-12">
                {whoWeHelp.map((sectionData, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        className="mb-24 scroll-mt-36 relative"
                        ref={(el) => (sectionRefs.current[sectionData.id] = el)}
                    >
                        {/* Supply Chain Fading Background */}
                        {sectionData.id === "supplychain" && (
                            <div className="absolute -inset-6 bg-gradient-to-tr from-blue-300 via-blue-100 to-purple-200 opacity-40 pointer-events-none rounded-2xl"></div>
                        )}

                        {/* Top Section */}
                        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-center relative z-10">
                            {/* Left Image */}
                            <motion.div
                                className="lg:w-1/2 flex justify-center"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="w-full h-[550px] lg:h-[550px] flex-shrink-0">
                                    <img
                                        src={sectionData.mainSection.image}
                                        alt={sectionData.mainSection.title}
                                        className="w-full h-full object-cover rounded-2xl shadow-2xl"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Content */}
                            <motion.div
                                className="lg:w-1/2 flex flex-col justify-start"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                                    {sectionData.mainSection.title}
                                </h2>
                                <p className="text-lg mb-6 leading-relaxed">
                                    {sectionData.mainSection.description}
                                </p>
                                <ul className="space-y-4">
                                    {sectionData.mainSection.keyPoints.map((point, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                        >
                                            <span className="mr-3 text-blue-400 font-bold">•</span>
                                            <span className="leading-relaxed">{point}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Bottom 4 Sections */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                            {sectionData.bottomSections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    className="relative p-6 rounded-2xl gradient-bg text-black shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-default"
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                >
                                    <h3 className="text-xl font-bold mb-3 text-center">{section.title}</h3>
                                    <p className="text-gray-800 text-sm leading-relaxed">{section.description}</p>

                                    {/* Subtle decorative glow */}
                                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"></div>
                                    <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-blue-200/10 rounded-full blur-2xl pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default WhoWeHelpPage;
