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
    field: "Co-founder & Chief Executive Officer",
    description:
      "Shrijeet is a seasoned global supply chain and procurement executive with over 20 years of experience driving innovation, operational excellence, and profitability across multinational, multicultural environments. Most recently, he served as Vice President of Global Supply Chain & Procurement at Beyond Meat, where he led end-to-end supply chain operations and delivered transformative results through digital and AI-enabled solutions, inventory optimization, and sustainable cost management. ",
    desc: "Prior to that, Shrijeet held key leadership roles at Kearney, Kerry, and Mondelez International, where he drove multimillion-dollar value creation through strategic sourcing, procurement transformation initiatives, and innovative commercialization strategies.",
    desc1:
      "A strategic thinker with an entrepreneurial mindset, Shrijeet is recognized for building high-performing teams and fostering cross-functional collaboration to deliver exceptional business outcomes. His areas of expertise include commodity risk management, digital supply chain transformation, sustainability, and mergers & acquisitions.",
    desc2:
      "Shrijeet holds an MBA with honors from the University of Chicago Booth School of Business, as well as a Master’s in Civil Engineering from both Bradley University and Gujarat University.",
    img: "./assets/leader.jpg",
  },
  {
    name: "Shailesh Ganatra",
    field: "Co-founder & Chief Technology Officer",
    description:
      "Shailesh is an accomplished product and technology executive with over 20 years of experience driving innovation and growth across high-impact digital platforms in Financial Services, Healthcare, Human Resources, and Telecom. He has held senior leadership positions including Chief Technology Officer at WellRight, Vice President of Product & Technology at HighGround, and Managing Director of Product & Technology at Charles Schwab. ",
    desc: "Shailesh brings deep expertise across the full technology lifecycle spanning product strategy, architecture, software engineering, cloud infrastructure, data, AI/ML, and cybersecurity. He has successfully led he development and scaling of multiple B2B SaaS products through rapid growth, market expansion, strategic acquisitions, and complex post-merger integrations. A strong advocate for data privacy and regulatory compliance, Shailesh has guided organizations in achieving and maintaining critical standards such as GDPR, CCPA, HIPAA, NIST, and SOC 2.",
    desc1:
      "Shailesh holds a Bachelor's degree in Engineering with a major in Information Technology from Gujarat University, an MBA from the Illinois Institute of Technology, and an Executive Scholar Certificate in Growth & Innovation from the Kellogg School of Management at Northwestern University.",
    desc2: " ",
    img: "./assets/leader2.png",
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

const TestimonialCard = ({
  image,
  name,
  text1,
  text2,
  field,
  text3,
  text4,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 relative flex flex-col items-center max-w-2xl min-h-[500px] cursor-pointer hover:shadow-xl transition-shadow duration-300 border border-gray-200 hover:border-blue-400 group ">
      {/* Profile Image */}
      <div className="absolute -top-14 group-hover:scale-105 transition-transform duration-300">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full border-2 border-white  shadow-lg object-cover"
        />
      </div>

      {/* Content */}
      <div className="mt-14 text-center">
        <h3 className="text-lg group-hover:text-blue-700 text-gray-800 font-semibold">{name}</h3>
        <p className="text-gray-600  text-base font-semibold leading-relaxed">{field}</p>
        <p className="text-gray-700  font-medium mt-2 text-justify text-sm ">{text1}</p>
        <p className="text-gray-700 font-medium  mt-2 text-justify text-sm ">{text2}</p>
        <p className="text-gray-700  font-medium  mt-2 text-justify text-sm ">{text3}</p>
        <p className="text-gray-700  font-medium  mt-2 text-justify text-sm ">{text4}</p>
      </div>
    </div>
  );
};

const Leadership = () => {
  return (
    <section className=" section-padding ">
      <div className="max-w-8xl mx-auto container-padding">
        <motion.div className="text-center mb-5  ">
          <h2 className="text-5xl font-bold text-black">Leadership Team</h2>
        </motion.div>
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="flex gap-6 ">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}

              >
                <TestimonialCard
                  image={item.img}
                  name={item.name}
                  field={item.field}
                  text1={item.description}
                  text2={item.desc}
                  text3={item.desc1}
                  text4={item.desc2}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
