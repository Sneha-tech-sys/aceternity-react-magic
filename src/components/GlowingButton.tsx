
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ 
  children, 
  className = "", 
  href,
  onClick
}) => {
  const ButtonComponent = href ? "a" : "button";
  
  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <ButtonComponent
        href={href}
        onClick={onClick}
        className={cn(
          "relative z-10 px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md",
          "overflow-hidden transition-all duration-300",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500 before:to-violet-500",
          "before:opacity-0 hover:before:opacity-100 before:transition-opacity",
          "flex items-center justify-center",
          className
        )}
      >
        {children}
      </ButtonComponent>
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 opacity-30 blur group-hover:opacity-60 animate-glow" />
    </motion.div>
  );
};

export default GlowingButton;
