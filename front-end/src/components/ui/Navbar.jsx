import React, { useState, useEffect } from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState([]);

  const handleClick = (e, itemName) => {
    e.preventDefault();
    const element = document.getElementById(itemName);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navbarItems = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/About-us" },
    { name: "Service", to: "services", function: handleClick },
    { name: "Testimonal", url: "/Testimonal" },
    { name: "Contact", url: "/contact" },
    { name: "Sign Up", url: "/sign-up" },
  ];

  // Check for visible items based on IDs
  useEffect(() => {
    const checkVisibleItems = () => {
      const items = navbarItems
        .map((item) => {
          if (item.to) {
            return document.getElementById(item.to) ? item : null;
          }
          return item;
        })
        .filter(Boolean);
      setVisibleItems(items);
    };

    checkVisibleItems();
    window.addEventListener("resize", checkVisibleItems);
    return () => window.removeEventListener("resize", checkVisibleItems);
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * custom,
        duration: 0.4,
      },
    }),
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed w-full z-20 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "bg-white/95 py-2 shadow-md" : "bg-white/85 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img
              src="/staticImage/logo.png"
              alt="Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md"
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {visibleItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  custom={index}
                  variants={itemVariants}
                >
                  <a
                    href={item.url || "#"}
                    className="text-wedding-dark hover:text-wedding-purple transition-all duration-300 py-2 px-1 relative group"
                    onClick={(e) =>
                      item.function ? item.function(e, item.to) : null
                    }
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
              <Button
                text="Login"
                onClick={() => {
                  window.location.href = "/login";
                }}
              />
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden"
          >
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-wedding-dark hover:bg-gray-100 transition-colors duration-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden absolute left-0 right-0 bg-white shadow-lg"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {visibleItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={item.url || "#"}
                      className="block px-4 py-2 text-wedding-dark hover:bg-gray-50 rounded-md transition-colors duration-200"
                      onClick={(e) => {
                        if (item.function) {
                          item.function(e, item.to);
                        }
                        setMobileMenuOpen(false);
                      }}
                    >
                      {item.name}
                    </a>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: visibleItems.length * 0.05 }}
                  className="px-4 py-3"
                >
                  <Button text="Login" href="/login" fullWidth={true} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
