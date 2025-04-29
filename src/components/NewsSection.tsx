
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const newsItems = [
  {
    id: 1,
    title: "ELYSIA Foundation Launches $10M Ecosystem Grants Program",
    date: "Apr 18, 2025",
    author: {
      name: "ELYSIA Team",
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=elysia"
    },
    summary: "The ELYSIA Foundation has announced a $10 million grants program to fund projects building on the ELYSIA blockchain, with a focus on DeFi, NFT infrastructure, and cross-chain solutions.",
    link: "#"
  },
  {
    id: 2,
    title: "ELYSIA Protocol v2 Migration Scheduled for Next Month",
    date: "Apr 12, 2025",
    author: {
      name: "ELYSIA Dev",
      avatar: "https://api.dicebear.com/7.x/identicon/svg?seed=elysiadev"
    },
    summary: "The highly anticipated ELYSIA Protocol v2 upgrade is scheduled to go live next month, bringing improved scalability, reduced gas fees, and new smart contract capabilities.",
    link: "#"
  }
];

const NewsSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
          text="News"
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          delay={0.1}
        />
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {newsItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800 card-hover"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={item.author.avatar} 
                  alt={item.author.name}
                  className="w-10 h-10 rounded-full bg-gray-800" 
                />
                <div>
                  <div className="text-sm font-medium text-white">{item.author.name}</div>
                  <div className="text-xs text-gray-500">{item.date}</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.summary}</p>
              
              <div className="flex justify-between items-center">
                <a href={item.link} className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                  Read more →
                </a>
                <div className="flex items-center gap-3">
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                  <button className="text-gray-500 hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;
