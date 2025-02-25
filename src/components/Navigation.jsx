import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`nav-container fixed w-full z-50 transition-all duration-300 ${scroll ? 'nav-scrolled' : ''}`}
    >
      <div className="nav-content container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="nav-logo text-2xl font-bold text-gray-800 dark:text-white"
          >
            <Link to="/">Portfolio</Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 nav-links">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white capitalize transition-colors ${location.pathname === item.path ? 'active font-semibold text-blue-600 dark:text-blue-400' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-button md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className={`menu-icon ${isMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-nav md:hidden mt-4 py-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-link block px-4 py-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white capitalize ${location.pathname === item.path ? 'active font-semibold text-blue-600 dark:text-blue-400 bg-gray-100 dark:bg-gray-700' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;