import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { 
    TrendingUp, Shield, Users, Zap, BarChart3,
    Clock, DollarSign, Activity, ArrowRight, CheckCircle,
    Database, BarChart, Brain, AlertTriangle, Target, 
    RefreshCw, Layers, PieChart, LineChart
} from "lucide-react";

const solutions = [
    {
        name: "Inventory Controls & Management",
        tagline: "Optimize stock levels with AI-driven precision",
        details: "Transform your inventory operations with advanced machine learning algorithms that predict demand patterns, optimize stock levels, and prevent costly stockouts. Our solution provides real-time visibility across all warehouses and distribution centers with automated reorder points and dynamic safety stock calculations.",
        backgroundImage: "/assets/solution/inventory.jpg",
        icon: BarChart3,
        benefits: [
            "AI-powered demand forecasting with 95% accuracy",
            "Real-time inventory visibility across all locations",
            "Automated reorder point optimization",
            "Dynamic safety stock calculations",
            "Integration with ERP and WMS systems"
        ],
        features: [
            "Multi-echelon inventory optimization",
            "Seasonal demand pattern recognition",
            "Supplier lead time variability analysis",
            "ABC/XYZ classification automation"
        ],
        metrics: {
            "Inventory Reduction": "25-40%",
            "Stockout Prevention": "90%+",
            "Forecast Accuracy": "95%+",
            "Cost Savings": "15-30%"
        },
        color: "blue"
    },
    {
        name: "Commodity Risk Management",
        tagline: "Navigate market volatility with confidence",
        details: "Comprehensive commodity risk management platform that provides real-time market intelligence, price forecasting, and risk assessment tools. Monitor global commodity markets, track price fluctuations, and make data-driven procurement decisions with advanced analytics and predictive modeling.",
        backgroundImage: "/assets/solution/commodity.jpg",
        icon: TrendingUp,
        benefits: [
            "Real-time global market data feeds",
            "Advanced price forecasting models",
            "Comprehensive risk assessment tools",
            "Automated hedging recommendations",
            "Regulatory compliance monitoring"
        ],
        features: [
            "Multi-commodity price tracking",
            "Volatility analysis and alerts",
            "Hedging strategy optimization",
            "Supply chain risk mapping"
        ],
        metrics: {
            "Risk Reduction": "60-80%",
            "Price Prediction Accuracy": "85%+",
            "Cost Avoidance": "10-25%",
            "Compliance Rate": "99.5%"
        },
        color: "green"
    },
    {
        name: "Supplier Segmentation & SRM Support",
        tagline: "Build strategic supplier partnerships",
        details: "Comprehensive supplier lifecycle management platform that streamlines vendor relationships, enhances performance tracking, and drives collaborative procurement processes. Strengthen supplier partnerships with transparent evaluations, automated scorecards, and AI-driven insights for continuous improvement.",
        backgroundImage: "/assets/solution/supplier.jpg",
        icon: Users,
        benefits: [
            "360-degree supplier performance analytics",
            "Automated supplier scorecards",
            "Collaborative procurement workflows",
            "Risk assessment and monitoring",
            "Contract lifecycle management"
        ],
        features: [
            "Supplier segmentation and categorization",
            "Performance KPI tracking and reporting",
            "Collaborative planning and forecasting",
            "Supplier development programs"
        ],
        metrics: {
            "Supplier Performance": "25% improvement",
            "Cost Reduction": "12-20%",
            "On-time Delivery": "95%+",
            "Quality Score": "98%+"
        },
        color: "purple"
    },
    {
        name: "Tariff Impact Management",
        tagline: "Simplify complex international trade regulations",
        details: "Comprehensive trade compliance solution that automates tariff classification, duty calculation, and regulatory compliance across multiple jurisdictions. Stay ahead of evolving international trade regulations with real-time updates, automated documentation, and intelligent compliance monitoring.",
        backgroundImage: "/assets/solution/tarrif.jpg",
        icon: Shield,
        benefits: [
            "Automated HS code classification",
            "Multi-jurisdiction duty calculation",
            "Real-time regulatory updates",
            "Compliance monitoring and alerts",
            "Automated documentation generation"
        ],
        features: [
            "AI-powered classification engine",
            "Free trade agreement optimization",
            "Origin determination automation",
            "Audit trail and reporting"
        ],
        metrics: {
            "Classification Accuracy": "98%+",
            "Duty Optimization": "15-30%",
            "Compliance Rate": "99.8%",
            "Processing Time": "80% reduction"
        },
        color: "red"
    }
];

const industryStats = [
    { label: "Average Cost Reduction", value: "25-40%", icon: DollarSign },
    { label: "Process Efficiency Gain", value: "60-80%", icon: Activity },
    { label: "Implementation Time", value: "3-6 months", icon: Clock },
    { label: "ROI Achievement", value: "12-18 months", icon: TrendingUp }
];

const SolutionsPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [selectedSolution, setSelectedSolution] = useState("inventory-controls-and-management");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const sectionRefs = useRef({});

    const inventoryImages = [
        "/assets/solution/inventory2.png",  // Base layer
        "/assets/solution/inventory1.jpg", // Second layer (popup)
        "/assets/solution/inventory3.png"  // Third layer (top)
    ];

    const commodityImages = [
        "/assets/solution/commodity1.png",  // Base layer
        "/assets/solution/commodity2.png", // Second layer (popup)
        "/assets/solution/commodity3.png"  // Third layer (top)
    ];

    const supplierImages = [
        "/assets/solution/Supplier1.png",  // Base layer
        "/assets/solution/Supplier2.png", // Second layer (popup)
        "/assets/solution/Supplier3.png"  // Third layer (top)
    ];

    const tariffImages = [
        "/assets/solution/Tariffimpact1.png",  // Base layer
        "/assets/solution/Tariffimpact2.png", // Second layer (popup)
        "/assets/solution/Tariffimpact3.png"  // Third layer (top)
    ];

    // Read URL parameter and set initial solution
    useEffect(() => {
        const solutionParam = searchParams.get('solution');
        if (solutionParam !== null) {
            const solutionIndex = parseInt(solutionParam);
            if (solutionIndex >= 0 && solutionIndex < solutions.length) {
                const solution = solutions[solutionIndex];
                const solutionId = solution.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                setSelectedSolution(solutionId);
            }
        }
    }, [searchParams]);

    useEffect(() => {
        if (selectedSolution === "inventory-controls-and-management") {
            // Reset to first image when inventory section is selected
            setCurrentImageIndex(0);
        }
    }, [selectedSolution]);

    // Handle click on solution navigation
    const handleSolutionClick = (solution, index) => {
        const solutionId = solution.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
        setSelectedSolution(solutionId);
        navigate(`/solutions?solution=${index}`, { replace: true });
        
        // Scroll to the solution section
        sectionRefs.current[solutionId]?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    // Handle scroll to update active solution
    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200; // offset for sticky nav
            solutions.forEach((solution) => {
                const solutionId = solution.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
                const el = sectionRefs.current[solutionId];
                if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
                    setSelectedSolution(solutionId);
                }

            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getColorClasses = (color) => {
        const colors = {
            blue: "bg-blue-100 text-blue-600 border-blue-200",
            green: "bg-green-100 text-green-600 border-green-200",
            purple: "bg-purple-100 text-purple-600 border-purple-200",
            red: "bg-red-100 text-red-600 border-red-200",
            indigo: "bg-indigo-100 text-indigo-600 border-indigo-200",
            teal: "bg-teal-100 text-teal-600 border-teal-200"
        };
        return colors[color] || colors.blue;
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="gradient-bg section-padding">
                <div className="max-w-7xl mx-auto container-padding text-center">
                    {/* <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-6 py-3 bg-blue-50 border border-blue-200 text-blue-600 rounded-full text-sm font-semibold shadow-md mb-8"
                    >
                        <Zap className="w-5 h-5 mr-3 text-blue-600" />
                        <span className="text-blue-600 font-semibold">AI-Powered Solutions</span>
                    </motion.div> */}
                    
                    <motion.h1 
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Purpose-built Solutions Engineered<br />
                        <span className="text-blue-600">for Effortless Efficiencies</span>
                    </motion.h1>
                    <motion.p 
                        className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16 text-center font-normal"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Integrated value chain solutions designed to build a transparent, cohesive, and data-driven operational ecosystem. With actionable analytics, industry-leading frameworks, and tailored performance metrics, we enable organizations to enhance efficiency, reduce costs, and make agile, informed decisions.
                    </motion.p>

                    {/* Industry Stats */}
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {/* {industryStats.map((stat, index) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                                        <IconComponent className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            );
                        })} */}
                    </motion.div>
                </div>
            </section>

            {/* Solutions Navigation - Sticky */}
            <div className="sticky top-[72px] z-40 flex justify-center backdrop-blur-md py-4 px-6 bg-white/90">
                <div className="flex gap-6 flex-wrap justify-center mt-3">
                    {solutions.map((solution, index) => {
                        const isActive = selectedSolution === solution.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');

                        return (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleSolutionClick(solution, index)}
                                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                                    isActive 
                                        ? "bg-blue-600 text-white shadow-lg scale-105" 
                                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105"
                                }`}
                            >
                                {solution.name}
                            </motion.button>
                        );
                    })}
                </div>
            </div>

            {/* Inventory Controls & Management Detailed Section */}
            <AnimatePresence>
                {selectedSolution === "inventory-controls-and-management" && (
                    <motion.section
                        ref={(el) => (sectionRefs.current["inventory-controls-and-management"] = el)}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                        className="py-24 gradient-bg scroll-mt-36"
                    >
                        <div className="max-w-7xl mx-auto px-6">

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Left Side - Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-8">
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                            Measure, Control and Optimize Inventory for savings, efficiencies and resilience
                                        </h1>
                                        <p className="text-xl text-gray-600 leading-relaxed">
                                            Enable smarter, data-driven decisions with enterprise-grade controls, cutting-edge algorithms, and AI/ML powered workflow solutions.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Request a Demo
                                        </motion.button>
                                    </div>

                                </motion.div>

                                {/* Right Side - Layered Dashboard Images */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="relative h-[600px] w-full"
                                >
                                    {/* Base Dashboard Image (First Layer) - inventory2.png */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={inventoryImages[0]}
                                            alt="Inventory Dashboard Base"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Second Layer Image (inventory1.jpg) - Popup Animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, -8, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 1.5,
                                            y: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="absolute top-8 left-8 w-80 h-60 z-10"
                                    >
                                        <img
                                            src={inventoryImages[1]}
                                            alt="Inventory Dashboard Second Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Third Layer Image (inventory3.png) - Top Layer */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, 6, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.5,
                                            delay: 2.5,
                                            y: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1
                                            }
                                        }}
                                        className="absolute top-16 right-8 w-72 h-56 z-20"
                                    >
                                        <img
                                            src={inventoryImages[2]}
                                            alt="Inventory Dashboard Third Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                </motion.div>
                            </div>


                            {/* Features Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mt-24 bg-white rounded-2xl p-10"
                            >
                                <div className="text-center mb-20">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
                                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                    {/* Feature 1 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            Robust data integration across company's information ecosystem
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Agnostic to source, format and input source</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Real time updates with accuracy validation</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 2 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                            Advanced analytics and reporting capabilities
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Comprehensive dashboards and real-time insights</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Customizable reports and data visualization</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 3 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                                            Intelligent automation and workflow optimization
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>AI-powered process automation and optimization</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Streamlined workflows and reduced manual effort</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 4 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                            Enterprise-grade security and compliance
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Advanced security protocols and data protection</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Compliance with industry standards and regulations</span>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Commodity Risk Management Detailed Section */}
            <AnimatePresence>
                {selectedSolution === "commodity-risk-management" && (
                    <motion.section
                        ref={(el) => (sectionRefs.current["commodity-risk-management"] = el)}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                        className="py-24 gradient-bg scroll-mt-36"
                    >
                        <div className="max-w-7xl mx-auto px-6">

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Left Side - Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-8">
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                            Commodity Daily Positioning Management Platform for Procurement and Finance teams
                                        </h1>
                                        <p className="text-xl text-gray-600 leading-relaxed">
                                            Empower your teams with integrated, smarter, & nimble solutions that are powered by complex analytics, AI/ML led predictive modeling & industry tested workflows.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Request a Demo
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* Right Side - Layered Dashboard Images */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="relative h-[600px] w-full"
                                >
                                    {/* Base Dashboard Image (First Layer) - commodity1.png */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={commodityImages[0]}
                                            alt="Commodity Dashboard Base"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Second Layer Image (commodity2.png) - Popup Animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, -8, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 1.5,
                                            y: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="absolute top-8 left-8 w-80 h-60 z-10"
                                    >
                                        <img
                                            src={commodityImages[1]}
                                            alt="Commodity Dashboard Second Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Third Layer Image (commodity3.png) - Top Layer */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, 6, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.5,
                                            delay: 2.5,
                                            y: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1
                                            }
                                        }}
                                        className="absolute top-16 right-8 w-72 h-56 z-20"
                                    >
                                        <img
                                            src={commodityImages[2]}
                                            alt="Commodity Dashboard Third Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Features Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mt-24 bg-white rounded-2xl p-10"
                            >
                                <div className="text-center mb-20">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
                                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                    {/* Feature 1 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            Foundational integrated source architecture
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Intelligent agentic AI leveraged mapping to develop coverage / exposure monitoring</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Flexible rule definition per company policy</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 2 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                            Fuel critical decisions efficiently by supercharging your data with right analytics
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Exhaustive and structured analytics to maximize value of daily commodity hedges</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Scenario modelling and commodity price tracking for effective governance</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 3 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                                            Seamless two-way integration with existing system landscape
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Work-flow actions and ability to transfer information in reports supports decision making and compliance tasks</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Consumes and feeds ERP to support finance processes</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 4 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                            Control risks and opportunities with confidence
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Commodity risk management governance support</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Advanced analytics and predictive modelling to enable coverage decisions</span>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Supplier Segmentation & SRM Support Detailed Section */}
            <AnimatePresence>
                {selectedSolution === "supplier-segmentation-and-srm-support" && (
                    <motion.section
                        ref={(el) => (sectionRefs.current["supplier-segmentation-and-srm-support"] = el)}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                        className="py-24 gradient-bg scroll-mt-36"
                    >
                        <div className="max-w-7xl mx-auto px-6">

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Left Side - Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-8">
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                            Unlock competitive advantage through effective supplier management across the full life cycle
                                        </h1>
                                        <p className="text-xl text-gray-600 leading-relaxed">
                                            Monetize longest phase of supplier's relationship, and drive value aligned with business objective through comprehensive end-to-end supplier management solution.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Request a Demo
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* Right Side - Layered Dashboard Images */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="relative h-[600px] w-full"
                                >
                                    {/* Base Dashboard Image (First Layer) - Supplier1.png */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={supplierImages[0]}
                                            alt="Supplier Dashboard Base"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Second Layer Image (Supplier2.png) - Popup Animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, -8, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 1.5,
                                            y: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="absolute top-8 left-8 w-80 h-60 z-10"
                                    >
                                        <img
                                            src={supplierImages[1]}
                                            alt="Supplier Dashboard Second Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Third Layer Image (Supplier3.png) - Top Layer */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, 6, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.5,
                                            delay: 2.5,
                                            y: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1
                                            }
                                        }}
                                        className="absolute top-16 right-8 w-72 h-56 z-20"
                                    >
                                        <img
                                            src={supplierImages[2]}
                                            alt="Supplier Dashboard Third Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Features Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="mt-24 bg-white rounded-2xl p-10"
                            >
                                <div className="text-center mb-20">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
                                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                    {/* Feature 1 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <BarChart3 className="w-6 h-6 text-blue-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            Spend analytics and segmentation
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>AI powered spend analytics and categorization with actionable insights</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Best in class segmentation framework powered by agentic AI solutions</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 2 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Target className="w-6 h-6 text-green-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                            Performance management
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Comprehensive supplier performance tracking and evaluation</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Real-time performance dashboards and reporting</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 3 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <AlertTriangle className="w-6 h-6 text-purple-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                                            Risk profiling
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Advanced risk assessment and monitoring capabilities</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Proactive risk mitigation strategies and alerts</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 4 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Users className="w-6 h-6 text-red-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                            Supplier Relationship Management (SRM) excellence
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Portfolio management, interaction models and SRM governance models and workflows</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Enable communication, change management and tracking using actionable features</span>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>

            {/* Tariff Impact Management Detailed Section */}
            <AnimatePresence>
                {selectedSolution === "tariff-impact-management" && (
                    <motion.section
                        ref={(el) => (sectionRefs.current["tariff-impact-management"] = el)}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.6 }}
                        className="py-24 gradient-bg scroll-mt-36"
                    >
                        <div className="max-w-7xl mx-auto px-6">

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Left Side - Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-8"
                                >
                                    <div className="space-y-8">
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                                            Monitor, Evaluate and Mitigate Tariff impact
                                        </h1>
                                        <p className="text-xl text-gray-600 leading-relaxed">
                                            Effortlessly manage tariff risk seamlessly with impact overview, scenario based "What-if" analysis and mitigate using trade options through AI enabled solutions.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-700 transition-colors duration-200"
                                        >
                                            Request a Demo
                                        </motion.button>
                                    </div>
                                </motion.div>

                                {/* Right Side - Layered Dashboard Images */}
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="relative h-[600px] w-full"
                                >
                                    {/* Base Dashboard Image (First Layer) - Tariffimpact1.png */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.8 }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={tariffImages[0]}
                                            alt="Tariff Dashboard Base"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Second Layer Image (Tariffimpact2.png) - Popup Animation */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, -8, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.2,
                                            delay: 1.5,
                                            y: {
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="absolute top-8 left-8 w-80 h-60 z-10"
                                    >
                                        <img
                                            src={tariffImages[1]}
                                            alt="Tariff Dashboard Second Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>

                                    {/* Third Layer Image (Tariffimpact3.png) - Top Layer */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.7, y: 30 }}
                                        animate={{ 
                                            opacity: 1, 
                                            scale: 1, 
                                            y: 0,
                                            y: [0, 6, 0]
                                        }}
                                        transition={{ 
                                            duration: 1.5,
                                            delay: 2.5,
                                            y: {
                                                duration: 5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: 1
                                            }
                                        }}
                                        className="absolute top-16 right-8 w-72 h-56 z-20"
                                    >
                                        <img
                                            src={tariffImages[2]}
                                            alt="Tariff Dashboard Third Layer"
                                            className="w-full h-full object-contain"
                                        />
                                    </motion.div>
                                </motion.div>
                            </div>

                            {/* Features Section */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="bg-white rounded-2xl p-8"
                            >
                                <div className="text-center mb-20">
                                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Features</h2>
                                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                                    {/* Feature 1 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <BarChart3 className="w-6 h-6 text-blue-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                            Informative tariff impact monitoring
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Description based tariff impact analysis for given spend powered by AI enabled search</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Industry news, predictive spend review and categorized tariff impact dashboard</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 2 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Target className="w-6 h-6 text-green-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                                            Options analysis
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Best alternative to existing impact available through import data analytics</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Full visibility to control and determine optional benefits with visibility and control on calculation methodologies</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 3 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <TrendingUp className="w-6 h-6 text-purple-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                                            Scenario analysis
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Flexible scenario analysis using multiple variable inputs to estimate potential impact</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Seamless information and communication enablement through exportable and built in reports</span>
                                            </li>
                                        </ul>
                                    </motion.div>

                                    {/* Feature 4 */}
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 group"
                                    >
                                        {/* <div className="w-12 h-12 border-2 border-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Shield className="w-6 h-6 text-red-600" />
                                        </div> */}
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                                            Enhance resilience proactively
                                        </h3>
                                        <ul className="space-y-2 text-sm text-gray-600">
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Actionable workflows and an ability to export and report analytics for impact management</span>
                                            </li>
                                            <li className="flex items-start">
                                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                                <span>Executive reporting for leadership and risk committees built in</span>
                                            </li>
                                        </ul>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>


        </div>
    );
};

export default SolutionsPage;

