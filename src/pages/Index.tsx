
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EcosystemSection from "@/components/EcosystemSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import RoadmapSection from "@/components/RoadmapSection";
import PartnersSection from "@/components/PartnersSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const targetId = href.replace('#', '');
          
          if (targetId === '') {
            // Scroll to top if href is just '#'
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              const yOffset = -80; // Adjust for fixed navbar height
              const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
              
              window.scrollTo({
                top: y,
                behavior: 'smooth'
              });
            }
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">
      <Navbar />
      <HeroSection />
      
      <div id="ecosystem">
        <EcosystemSection />
      </div>
      
      <div id="stats">
        <StatsSection />
      </div>
      
      <div id="news">
        <NewsSection />
      </div>
      
      <div id="roadmap">
        <RoadmapSection />
      </div>
      
      <div id="partners">
        <PartnersSection />
      </div>
      
      <div id="faq">
        <FaqSection />
      </div>
      
      <Footer />
    </main>
  );
};

export default Index;
