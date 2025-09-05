import React from "react";
import { Separator } from "../ui/separator";

export const Footer = (): JSX.Element => {
  return (
    <footer className="py-12 px-4 lg:px-8 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <Separator className="bg-[#333333] mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl font-bold text-[#e8ff8c]">DOT</div>
              <div className="text-sm text-white/60">CLUB</div>
            </div>
            <p className="text-white/60 text-sm">
              Student-run design community of IIIT Vadodara
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#products" className="block text-white/60 hover:text-white transition-colors duration-200">
                Products
              </a>
              <a href="#about" className="block text-white/60 hover:text-white transition-colors duration-200">
                About
              </a>
              <a href="#size-chart" className="block text-white/60 hover:text-white transition-colors duration-200">
                Size Chart
              </a>
              <a href="#faq" className="block text-white/60 hover:text-white transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-white/60 text-sm">
              <p>IIIT Vadodara</p>
              <p>Gandhinagar Campus</p>
              <p>Gujarat, India</p>
            </div>
          </div>
        </div>

        <div className="text-center text-white/40 text-sm">
          <p>&copy; 2025 DOT Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};