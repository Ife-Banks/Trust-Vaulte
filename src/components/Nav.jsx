// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const mobileMenu = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const navLinks = ["AboutUs", "Use Case", "Pricing", "Contact"];

  return (  
    <motion.nav 
      className="bg-transparent w-[90%] mx-auto px-4 py-3 font-kumah"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <motion.h1 
          className="text-xl sm:text-2xl font-semibold text-white"
          variants={item}
          whileHover={{ scale: 1.05 }}
        >
          TrustVaulte
        </motion.h1>

        {/* Desktop Navigation - Hidden on mobile */}
        <motion.ul 
          className="hidden md:flex gap-4 lg:gap-6 text-base lg:text-lg font-medium items-center"
          variants={container}
        >
          {navLinks.map((link, index) => (
            <motion.li key={index} variants={item}>
              <motion.a 
                href="#"
                className="relative px-2 py-1 text-white hover:text-purple-300 transition-colors"
              >
                {link}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Desktop Buttons - Hidden on mobile */}
        <motion.div 
          className="hidden md:flex gap-3 items-center"
          variants={container}
        >
          <motion.button 
            type="button" 
            className="px-4 py-1.5 sm:px-5 sm:py-2 bg-[#2A2A2A] rounded-lg text-white text-sm sm:text-base"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            SignUp
          </motion.button>
          <motion.button 
            type="button"
            className="px-4 py-1.5 sm:px-5 sm:py-2 rounded-lg text-white text-sm sm:text-base hover:bg-white/10 transition-colors"
            variants={item}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Login
          </motion.button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-white p-1"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          variants={item}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-sm w-full overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenu}
          >
            <motion.ul className="flex flex-col px-4 py-2 gap-1">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  variants={item}
                  className="border-b border-gray-700 last:border-0"
                >
                  <a 
                    href="#"
                    className="block py-3 px-2 text-white text-lg hover:text-purple-300 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
              <div className="flex gap-3 mt-2 px-2 py-3">
                <motion.button 
                  type="button" 
                  className="flex-1 py-2 bg-[#2A2A2A] rounded-lg text-white text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SignUp
                </motion.button>
                <motion.button 
                  type="button"
                  className="flex-1 py-2 bg-transparent border border-gray-400 rounded-lg text-white text-center"
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  Login
                </motion.button>
              </div>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;