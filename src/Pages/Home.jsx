    import React from 'react'
    import { Link } from "react-router-dom";
    import { motion } from "framer-motion";
    import { ArrowRight, Play, Shield, Zap, TrendingUp, Users } from "lucide-react";
    import FeatureSection from '../Components/FeatureSection'
    import CollaborationSection from '../Components/CollaborationSection'
    import IndustriesPage from '../Components/IndustriesPage'

    const Home = () => {
        return (
            <div>
                {/* Hero Section */}
                <section className="gradient-bg section-padding h-[100vh]">
                    <div className="max-w-7xl mx-auto container-padding">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                {/* <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                                    <Zap className="w-4 h-4 mr-2" />
                                    AI-Powered Procurement Solutions
                                </div> */}

                                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                                    Optimizing {" "}
                                    <span className="text-gradient">Procurement & Supply Chain</span>{" "}
                                    through Advanced Digital and AI/ML Solutions
                                </h1>

                                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                    Transform your procurement & supply chain operations and gain deeper visibility, smarter decision-making, and tailored automation that drives measurable, sustainable and resilient business outcomes.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/solutions" className="btn-primary group">
                                        Explore Solutions
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <button className="btn-secondary group">
                                        <Play className="w-4 h-4 mr-2" />
                                        Request Demo
                                    </button>
                                </div>

                                {/* <div className="flex items-center space-x-8 pt-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-sm text-gray-600">Trusted by 500+ companies</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-sm text-gray-600">99.9% uptime guarantee</span>
                                    </div>
                                </div> */}
                            </motion.div>

                            <motion.div
                                className="relative"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl"></div>
                                    <motion.img
                                        src="/assets/business.jpg"
                                        alt="AI/ML Procurement Dashboard"
                                        className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl border border-white/20"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>

                                {/* Floating Stats Card */}
                                <motion.div
                                    className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-large p-4 border border-gray-100"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                            <TrendingUp className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">30% Cost Reduction</div>
                                            <div className="text-xs text-gray-500">Average savings</div>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                {/* <section className="bg-white section-padding">
                    <div className="max-w-7xl mx-auto container-padding">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                                <p className="text-gray-600">Global Companies Trust Us</p>
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">30%</h3>
                                <p className="text-gray-600">Average Cost Reduction</p>
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <Users className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">24/7</h3>
                                <p className="text-gray-600">AI-Powered Support</p>
                            </motion.div>
                        </div>
                    </div>
                </section> */}

                <FeatureSection />
                <CollaborationSection />
                <IndustriesPage />
            </div>
        )
    }

    export default Home
