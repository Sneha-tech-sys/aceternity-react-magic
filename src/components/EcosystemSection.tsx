
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const ecosystemItems = [
  {
    title: "ELYSIA",
    description: "Core blockchain platform with advanced smart contracts and cross-chain compatibility",
    images: [
      "/lovable-uploads/f90faa30-c088-4793-8ee8-b9b93d2ba65b.png",
      "https://images.unsplash.com/photo-1617791160536-598cf32026fb?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1634&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  },
  {
    title: "ELVI",
    description: "Decentralized finance protocol enabling secure and efficient asset management",
    images: [
      "https://images.unsplash.com/photo-1638788293050-15359672212c?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]
  }
];

const EcosystemSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
      }
    })
  };
  
  return (
    <section id="ecosystem" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <AnimatedText 
          text="ELYSIA Ecosystem"
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          delay={0.1}
        />
        
        <div className="space-y-24">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={variants}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">{item.title}</h3>
              <p className="text-gray-300 mb-8">{item.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {item.images.map((img, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    className="relative overflow-hidden rounded-lg aspect-video card-hover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={img} 
                      alt={`${item.title} visual ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="text-sm font-medium text-white">Explore {item.title}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
