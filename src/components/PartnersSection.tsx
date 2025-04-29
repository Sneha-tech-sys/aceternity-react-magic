
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedText from "./AnimatedText";

const partners = [
  { name: "Partner 1", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p1" },
  { name: "Partner 2", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p2" },
  { name: "Partner 3", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p3" },
  { name: "Partner 4", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p4" },
  { name: "Partner 5", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p5" },
  { name: "Partner 6", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p6" },
  { name: "Partner 7", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p7" },
  { name: "Partner 8", logo: "https://api.dicebear.com/7.x/identicon/svg?seed=p8" },
];

const PartnersSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <section className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-center justify-center md:justify-between mb-16">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
              className="w-24 h-24 m-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
