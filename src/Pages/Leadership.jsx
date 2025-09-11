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

const data = [
  {
    name: "Shrijeet Desai",
    field: "Co-founder & Chief Executive Officer",
    description:
      "Shrijeet is a seasoned global supply chain and procurement executive with over 20 years of experience driving innovation, operational excellence, and profitability across multinational and multicultural organizations. Most recently, as Vice President of Global Supply Chain & Procurement at Beyond Meat, he led end-to-end operations, delivering transformative results through digital and AI-enabled solutions, inventory optimization, and sustainable cost management.",
    desc: "Shrijeet previously held senior leadership roles at Mondelez, Kerry, and Kearney, where he generated multimillion-dollar value through strategic sourcing, procurement transformation, and commercialization strategies. Recognized as a strategic thinker with an entrepreneurial mindset, he is known for building high-performing teams and fostering cross-functional collaboration to achieve strong business outcomes. His expertise spans commodity risk management, digital supply chain transformation, sustainability, and mergers & acquisitions, and he also serves as an expert advisor with Bain Consulting",
    desc1:
      "Shrijeet holds an MBA from the University of Chicago Booth School of Business, a master’s degree in civil engineering from Bradley University, and a bachelor’s degree in civil engineering from Gujarat University.",
    desc2:
      "",
    img: "./assets/leader.jpg",
  },
  {
    name: "Shailesh Ganatra",
    field: "Co-founder & Chief Technology Officer",
    description:
      "Shailesh is an accomplished product and technology executive with over 20 years of experience driving innovation and growth across high-impact digital platforms in Financial Services, Healthcare, Human Resources, and Telecom. He has held senior leadership positions including Chief Technology Officer at WellRight, Vice President of Product & Technology at HighGround, and Managing Director of Product & Technology at Charles Schwab. ",
    desc: "Shailesh brings deep expertise across the full technology lifecycle spanning product strategy, architecture, software engineering, cloud infrastructure, data, AI/ML, and cybersecurity. He has successfully led he development and scaling of multiple B2B SaaS products through rapid growth, market expansion, strategic acquisitions, and complex post-merger integrations. A strong advocate for data privacy and regulatory compliance, Shailesh has guided organizations in achieving and maintaining critical standards such as GDPR, CCPA, HIPAA, NIST and SOC 2.",
    desc1:
      "Shailesh holds a Bachelor's degree in Engineering with a major in Information Technology from Gujarat University, an MBA from the Illinois Institute of Technology, and an Executive Scholar Certificate in Growth & Innovation from the Kellogg School of Management at Northwestern University.",
    desc2: " ",
    img: "./assets/leader2.png",
  },

];

const TestimonialCard = ({
  image,
  name,
  text1,
  text2,
  field,
  text3,
  text4,
  className,
}) => {
  return (

    <div className={`bg-gradient-to-r from-blue-50 via-white to-blue-50
     p-10 rounded-2xl flex flex-col lg:flex-row items-start 
     gap-20 w-full ${className} border border-gray-200 
     hover:shadow-2xl transition-all duration-300 hover:border-blue-400
     min-h-[500px] group`}>

      {/* Left Section - Image + Name + Role */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/4 text-center ">
        <div className="w-40 h-40 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-800 mt-4 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-600 text-base font-semibold">{field}</p>
      </div>

      {/* Right Section - Bio/Description */}
      <div className="flex-1 text-left w-full lg:w-3/4">
        <p className="text-gray-700 font-medium mb-4 text-[17px] leading-relaxed text-justify">{text1}</p>
        <p className="text-gray-700 font-medium mb-4 text-[17px] leading-relaxed text-justify">{text2}</p>
        <p className="text-gray-700 font-medium mb-4 text-[17px] leading-relaxed text-justify">{text3}</p>
        <p className="text-gray-700 font-medium text-[17px] leading-relaxed text-justify">{text4}</p>
      </div>
    </div>


  );
};

const Leadership = () => {
  return (


    <section className="section-padding">
      <div className="w-full px-6 lg:px-12">
        <motion.div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-black">Leadership Team</h2>
        </motion.div>

        <div className="flex flex-col gap-10 w-full">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <TestimonialCard
                image={item.img}
                name={item.name}
                field={item.field}
                text1={item.description}
                text2={item.desc}
                text3={item.desc1}
                text4={item.desc2}
                className="w-full max-w-6xl mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

};

export default Leadership;
