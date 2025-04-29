
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const socialLinks = [
    { name: "Twitter", href: "#", icon: "X" },
    { name: "Discord", href: "#", icon: "D" },
    { name: "GitHub", href: "#", icon: "G" },
    { name: "Telegram", href: "#", icon: "T" },
    { name: "Medium", href: "#", icon: "M" },
  ];
  
  return (
    <footer className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="text-xl font-bold text-blue-400 mr-2">ELYSIA</div>
            <span className="text-gray-400 text-sm">Blockchain Ecosystem</span>
          </div>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                aria-label={link.name}
                className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Mainnet</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Wallet</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Explorer</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Bridge</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Developer</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Bug Bounty</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Grants</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Community</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Discord</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Forum</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Events</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Tokenomics</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Audit Reports</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Media Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            &copy; {year} ELYSIA Foundation. All rights reserved.
          </div>
          
          <div className="text-xs text-gray-500">
            Made with ♥ by the ELYSIA team
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
