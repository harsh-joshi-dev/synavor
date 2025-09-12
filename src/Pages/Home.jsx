import React, { useState } from "react";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, TrendingUp, Users } from "lucide-react";
import FeatureSection from "../Components/FeatureSection";
import CollaborationSection from "../Components/CollaborationSection";
import IndustriesPage from "../Components/IndustriesPage";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  const videos = [
    "/assets/home/home1.mp4",
    "/assets/home/home3.mp4",
    "/assets/home/home2.mp4",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
                Transform your{" "}
                <span className="">Procurement & Supply Chain</span> through
                Advanced Digital and AI/ML Solutions
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Optimize procurement & supply chain operations and gain deeper
                visibility, smarter decision-making, and tailored automation
                that drives measurable, sustainable and resilient business
                outcomes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/solutions" className="btn-primary group">
                  Explore solutions
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
                <HashLink smooth to="/AboutUs#contact" className="btn-secondary group">
                  <Play className="w-4 h-4 mr-2" />
                  Request a demo
                </HashLink>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden [mask-image:radial-gradient(circle, rgba(0,0,0,1)_92%, rgba(0,0,0,0)_100%)] [mask-repeat:no-repeat] [mask-position:center] [mask-size:cover] [webkit-mask-image:radial-gradient(circle, rgba(0,0,0,1)_92%, rgba(0,0,0,0)_100%)]">
                <AnimatePresence mode="wait">
                  <motion.video
                    key={currentIndex} // ensures animation triggers when video changes
                    src={videos[currentIndex]}
                    autoPlay
                    muted
                    playsInline
                    onEnded={handleVideoEnd}
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl shadow-inner-2xl shadow-white"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FeatureSection />
      <CollaborationSection />
      <IndustriesPage />
    </div>
  );
};

export default Home;
