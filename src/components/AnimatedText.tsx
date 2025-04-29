
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: React.ElementType;
  wordByWord?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  duration = 0.5,
  as: Component = "div",
  wordByWord = false
}) => {
  const words = text.split(" ");
  
  if (wordByWord) {
    return (
      <Component className={cn("inline-block", className)}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="inline-block mr-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: duration, 
              delay: delay + i * 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
          >
            {word}
          </motion.span>
        ))}
      </Component>
    );
  }
  
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      as={Component}
    >
      {text}
    </motion.div>
  );
};

export default AnimatedText;
