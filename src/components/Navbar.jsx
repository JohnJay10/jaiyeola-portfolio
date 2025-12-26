import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  // Glass background styles for both scrolled and non-scrolled states
  const getNavbarStyle = () => {
    const baseStyle = 'backdrop-blur-xl';
    
    if (isOpen) {
      // When mobile menu is open, always show strong glass effect
      return `${baseStyle} bg-white/90 dark:bg-gray-900/90 shadow-lg`;
    }
    
    if (scrolled) {
      return `${baseStyle} bg-white/80 dark:bg-gray-900/80 shadow-lg`;
    }
    
    return `${baseStyle} bg-white/60 dark:bg-gray-900/60`;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarStyle()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center"
            >
              <span className="font-bold text-white text-sm">JJ</span>
            </motion.div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Jaiyeola John
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group relative"
              >
                <span className={`text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-blue-600 dark:text-cyan-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400'
                }`}>
                  {item.label}
                </span>
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? 
                <FiMoon size={18} className="text-gray-700" /> : 
                <FiSun size={18} className="text-yellow-400" />
              }
            </button>
            
            <motion.a
              href="/JayCV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium shadow-lg shadow-blue-500/25"
              download
            >
              <FiDownload />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <FiX size={20} className="text-gray-900 dark:text-white" /> : 
              <FiMenu size={20} className="text-gray-900 dark:text-white" />
            }
          </button>
        </div>

        {/* Mobile Menu - Always has glass background */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 overflow-hidden"
          >
            <div className="backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 rounded-xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 text-blue-600 dark:text-cyan-400 font-medium border-l-4 border-blue-500'
                      : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100/80 dark:hover:bg-gray-800/80 backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200/80 dark:border-gray-700/80">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      toggleTheme();
                      setIsOpen(false);
                    }}
                    className="flex items-center justify-center space-x-3 py-3 px-4 rounded-lg bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-200/80 dark:hover:bg-gray-700/80 transition-colors w-full"
                  >
                    {theme === 'light' ? (
                      <>
                        <FiMoon className="text-gray-700" />
                        <span className="text-gray-700 font-medium">Switch to Dark</span>
                      </>
                    ) : (
                      <>
                        <FiSun className="text-yellow-400" />
                        <span className="text-gray-300 font-medium">Switch to Light</span>
                      </>
                    )}
                  </button>
                  
                  <a
                    href="/JayCV.pdf"
                    className="flex items-center justify-center space-x-2 py-3 px-4 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                    download
                    onClick={() => setIsOpen(false)}
                  >
                    <FiDownload />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;