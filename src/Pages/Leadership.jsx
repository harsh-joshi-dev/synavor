import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Users,
  BookOpen,
  Mail,
  Target,
  TrendingUp,
  Shield,
  Zap,
  Handshake,
} from "lucide-react";
// import { ArrowRight, TrendingUp, Target } from "lucide-react";
const data = [
  {
    name: "Shrijeet Desai",
    field: "Co-founder and CEO",
    description:
      "Shrijeet is a global supply chain and procurement expert with over two decades of experience delivering innovation, operational excellence, and long-term value across diverse industries. He has held leadership roles at companies like Mondelez, Beyond Meat, and Kerry, and has also worked with A.T. Kearney, where he advised clients on operations strategy, performance improvement, and M&A. With deep expertise in digital supply chain transformation, commodity risk management, sustainability, and cross-functional optimization, Shrijeet is known for combining strategic thinking with hands-on execution. ",
    desc: "Shrijeet holds an MBA with honors from the University of Chicago Booth School of Business, a Master’s in Civil Engineering from Bradley University, and a Bachelor’s in Civil Engineering from Gujarat University. A collaborative and entrepreneurial leader, he continues to drive measurable impact by building high-performance teams and delivering transformative results across the global supply chain landscape.",
    img: "./assets/leader.jpg",
  },
  {
    name: "Shailesh Ganatra",
    field: "Co-founder and CTO",
    description:
      "Shailesh is a global supply chain and procurement expert with over two decades of experience delivering innovation, operational excellence, and long-term value across diverse industries. He has held leadership roles at companies like Mondelez, Beyond Meat, and Kerry, and has also worked with A.T. Kearney, where he advised clients on operations strategy, performance improvement, and M&A. With deep expertise in digital supply chain transformation, commodity risk management, sustainability, and cross-functional optimization, Shrijeet is known for combining strategic thinking with hands-on execution. ",

    desc: "He holds an MBA with honors from the University of Chicago Booth School of Business, a Master’s in Civil Engineering from Bradley University, and a Bachelor’s in Civil Engineering from Gujarat University. A collaborative and entrepreneurial leader, he continues to drive measurable impact by building high-performance teams and delivering transformative results across the global supply chain landscape",
    img: "./assets/leader2.jpg",
  },
  // {
  //     title: "Private Equity",
  //     description: "Unlock new opportunities by driving efficiency across portfolio companies with data-driven insights.",
  //     img: "./assets/tier4.jpg",
  //     bg: "bg-blue-100",
  //     icon: Users,
  //     benefits: ["Portfolio efficiency", "Opportunity identification", "Data insights", "Value creation"]
  // },
];

const Leadership = () => {
  return (
    <section className="gradient-bg section-padding ">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Leadership
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-medium hover:shadow-large transition-all duration-300  border border-gray-100">
                {/* Image Container */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}

                </div>

                {/* Content */}
                <div>
                  <div className="flex flex-col mt-5 items-center justify-center">
                    <h3 className="text-xl font-semibold text-gray-900 not-only: group-hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                    </h3>
                    <p className="text-base font-bold text-blue-700">
                      {item.field}
                    </p>
                  </div>
                  <div className="p-6 text-justify mb-2 text-gray-600 text-l font-light ">
                    <p>{item.description}</p>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
