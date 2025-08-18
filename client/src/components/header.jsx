import React, { useState } from "react";
import img1 from "../assets/images/img-2.png";
import img2 from "../assets/images/img-3.png";
import img3 from "../assets/images/img-1.png";
import SplitText from "../animations/SplitText";
import { Slide } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Whitepaper", href: "#", action: () => window.open("https://your-whitepaper-link.com", "_blank") },
    { name: "Roadmap", href: "#roadmap", action: (e) => handleNavClick(e, "roadmap") },
    { name: "Traitswap", href: "#traitswap", action: (e) => handleNavClick(e, "traitswap") },
    { name: "Staking", href: "#socials", action: (e) => handleNavClick(e, "socials") },
    { name: "Socials", href: "#socials", action: (e) => handleNavClick(e, "socials") },
  ];

  return (
    <header className="bg-[#1C1C2A] w-full min-h-screen flex flex-col items-center justify-center px-4 relative">
      {/* Images */}
      <div className="flex justify-center items-end relative">
        <Slide direction="up" triggerOnce delay={200} duration={3000} className="z-10 -mr-25">
          <img
            src={img1}
            alt="NFT 1"
            className="w-56 sm:w-60 md:w-64 lg:w-72 h-72 object-cover relative transform scale-x-[-1]"
          />
        </Slide>
        <Slide direction="up" triggerOnce delay={200} duration={1500} className="z-20">
          <img
            src={img2}
            alt="NFT 2"
            className="w-56 sm:w-60 md:w-64 lg:w-72 h-72 object-cover relative"
          />
        </Slide>
        <Slide direction="up" triggerOnce delay={200} duration={3000} className="z-10 -ml-25">
          <img
            src={img3}
            alt="NFT 3"
            className="w-56 sm:w-60 md:w-64 lg:w-72 h-72 object-cover relative "
          />
        </Slide>
      </div>

      {/* White container */}
      <div className="bg-white rounded-lg shadow-xl border-2 border-black p-6 md:p-10 max-w-5xl w-full relative z-40">
        {/* Navigation */}
        <div className="flex justify-center items-center mb-10 relative">
          {/* Mobile menu button */}
          <button
            className="md:hidden absolute left-0 top-0 p-2 rounded-lg border border-gray-300 z-50"
            onClick={() => setIsOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex flex-wrap justify-center gap-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="rounded-full px-6 py-2 text-lg boton-elegante"
                onClick={link.action}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Fullscreen Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#1C1C2A] text-white flex flex-col justify-center items-center z-50"
            >
              {/* Close button top-right */}
              <button
                className="absolute top-6 right-6 p-2 rounded-lg border border-gray-500"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>

              {/* Nav links */}
              <motion.nav
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-8 text-2xl font-bold"
              >
                {navLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={link.action}
                    className="hover:text-gray-300 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Text */}
        <div className="text-center space-y-6">
          <h1>
            <SplitText
              text="The Pandarianz"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold"
              delay={350}
              duration={2}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={1}
            />
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700">
            We Push NFT Boundaries
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
