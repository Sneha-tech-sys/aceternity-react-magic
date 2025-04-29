
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const roadmapItems = [
  {
    title: "Research & Core Architecture Design & Prototype",
    quarter: "Q3 2024",
    description: "Initial research phase focusing on consensus mechanisms, tokenomics, and cross-chain architecture design.",
    gradientClass: "bg-roadmap-gradient-1"
  },
  {
    title: "Mainnet FiCO Development tests",
    quarter: "Q4 2024",
    description: "Development and internal testing of the ELYSIA mainnet, including validator node implementation and security audits.",
    gradientClass: "bg-roadmap-gradient-2"
  },
  {
    title: "Public Testnets & EVM Governance",
    quarter: "Q1 2025",
    description: "Launch of public testnet for community testing and integration, accompanied by decentralized governance implementation.",
    gradientClass: "bg-roadmap-gradient-3"
  }
];

const RoadmapSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <AnimatedText 
          text="Roadmap"
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          delay={0.1}
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {roadmapItems.map((item, index) => (
            <motion.div
              key={item.quarter}
              variants={itemVariants}
              className="overflow-hidden rounded-xl card-hover"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`${item.gradientClass} h-36 p-6 flex flex-col justify-between`}>
                <div className="text-white/80 font-medium">{item.quarter}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RoadmapSection;
