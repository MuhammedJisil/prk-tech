import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  const services = [
    { name: 'Creative Communications', path: '/services/creative-communications' },
    { name: 'Web Solutions', path: '/services/web-solutions' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Software Development', path: '/services/software-development' }
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', hasDropdown: true },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  // Update current path when component mounts or location changes
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const handleMouseEnter = (itemName) => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to prevent flickering
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isActivePath = (path) => currentPath === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');
      `}</style>
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 m-0 p-0">
        <nav className="w-full bg-white m-0 p-0">
          <div className="flex justify-between items-center h-20 px-8">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 cursor-pointer" onClick={closeMobileMenu}>
              <img
                src="/prk-logo.png"
                alt="PRK TECH Logo"
                className="h-20 w-auto"
                onError={(e) => {
                  e.target.src =
                    'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="180" height="60"><rect width="180" height="60" fill="white"/><text x="10" y="35" fill="%23FFD700" font-family="Arial" font-size="28" font-weight="bold">PRK</text><text x="90" y="35" fill="%23000080" font-family="Arial" font-size="28" font-weight="bold">TECH</text></svg>';
                }}
              />
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative" 
                  ref={item.hasDropdown ? dropdownRef : null}
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                  onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        className={`px-5 py-2.5 font-bold flex items-center transition-all duration-200 text-base rounded-full ${
                          services.some((s) => isActivePath(s.path))
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 shadow-lg shadow-yellow-500/30'
                            : 'text-blue-950 hover:text-yellow-600 hover:bg-yellow-50'
                        }`}
                        style={{ fontFamily: 'Stack Sans Text, sans-serif' }}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>

                      {activeDropdown === item.name && (
                        <div className="absolute left-0 top-full pt-2 w-64">
                          <div className="bg-white rounded-xl shadow-2xl border-2 border-yellow-200 p-4">
                            <ul className="space-y-2">
                              {services.map((service) => (
                                <li key={service.path}>
                                  <a
                                    href={service.path}
                                    className="block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 text-blue-950 hover:bg-yellow-50 hover:text-yellow-600"
                                    style={{ fontFamily: 'Stack Sans Text, sans-serif' }}
                                    onClick={closeMobileMenu}
                                  >
                                    {service.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.path}
                      className={`px-5 py-2.5 font-bold transition-all duration-200 text-base rounded-full ${
                        isActivePath(item.path)
                          ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 shadow-lg shadow-yellow-500/30'
                          : 'text-blue-950 hover:text-yellow-600 hover:bg-yellow-50'
                      }`}
                      style={{ fontFamily: 'Stack Sans Text, sans-serif' }}
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-blue-950 hover:text-yellow-600 hover:bg-yellow-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden pb-4 border-t-2 border-yellow-200">
              <div className="py-2 space-y-1 px-4">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <>
                        <button
                          className={`w-full text-left px-4 py-3 font-bold flex items-center justify-between rounded-lg ${
                            services.some((s) => isActivePath(s.path))
                              ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950'
                              : 'text-blue-950 hover:bg-yellow-50 hover:text-yellow-600'
                          }`}
                          style={{ fontFamily: 'Stack Sans Text, sans-serif' }}
                          onClick={() => toggleDropdown(item.name)}
                        >
                          {item.name}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-200 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {activeDropdown === item.name && (
                          <div className="bg-gradient-to-br from-yellow-50 to-blue-50 px-4 py-3 rounded-lg mt-2">
                            <ul className="space-y-2">
                              {services.map((service) => (
                                <li key={service.path}>
                                  <a
                                    href={service.path}
                                    className="block px-4 py-2.5 rounded-lg text-sm font-semibold text-blue-950 hover:bg-white hover:text-yellow-600"
                                    style={{ fontFamily: 'Stack Sans Text, sans-serif' }}
                                    onClick={closeMobileMenu}
                                  >
                                    {service.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.path}
                        className={`w-full text-left block px-4 py-3 font-bold rounded-lg ${
                          isActivePath(item.path)
                            ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 shadow-lg'
                            : 'text-blue-950 hover:bg-yellow-50 hover:text-yellow-600'
                        }`}
                        style={{ fontFamily: 'Stack Sans Text, sans-serif' }}
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;