
import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const faqItems = [
  {
    question: "What is ELYSIA?",
    answer: "ELYSIA is a next-generation blockchain platform designed for high scalability and interoperability. It features a unique consensus mechanism, advanced smart contracts, and seamless cross-chain capabilities."
  },
  {
    question: "How do I stake ELYSIA tokens?",
    answer: "You can stake your ELYSIA tokens through the official ELYSIA wallet or supported third-party wallets. Navigate to the staking section, select the amount you wish to stake, and confirm the transaction."
  },
  {
    question: "What are the minimum system requirements to run a validator node?",
    answer: "To run a validator node, you need a machine with at least 16GB RAM, 4 CPU cores, 1TB SSD storage, and a stable internet connection with at least 100Mbps bandwidth."
  },
  {
    question: "Is ELYSIA compatible with existing Ethereum dApps?",
    answer: "Yes, ELYSIA is fully EVM-compatible, which means that existing Ethereum dApps can be easily deployed on the ELYSIA blockchain with minimal modifications."
  },
  {
    question: "How does governance work on ELYSIA?",
    answer: "ELYSIA implements an on-chain governance system where token holders can propose and vote on protocol changes, parameter adjustments, and funding allocations from the ecosystem treasury."
  }
];

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <AnimatedText 
          text="FAQ"
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          delay={0.1}
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-3"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/40 border border-gray-800 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-gray-800/30 transition-colors"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-medium">{item.question}</span>
                <span className="transform transition-transform duration-200" style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-gray-300 border-t border-gray-800">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
