
import React from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import GlowingButton from "./GlowingButton";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px]" />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 text-sm font-light tracking-widest text-blue-400 uppercase"
        >
          Discover the future of blockchain
        </motion.div>
        
        <AnimatedText 
          text="World of"
          className="text-5xl md:text-7xl font-bold text-white mb-2"
          as="h1"
          delay={0.2}
        />
        
        <AnimatedText 
          text="Endless Possibilities"
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6"
          as="h1"
          delay={0.4}
          wordByWord
        />
        
        <AnimatedText 
          text="A revolutionary decentralized platform enabling seamless cross-chain transactions and innovative DeFi solutions"
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
          delay={0.8}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <GlowingButton href="#explore">Explore Now</GlowingButton>
          <GlowingButton className="bg-transparent border border-blue-500 hover:bg-blue-800/20">
            Learn More
          </GlowingButton>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex items-center text-sm text-gray-500">
          <span>Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="ml-2"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
