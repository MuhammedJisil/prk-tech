import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Creative Communications', path: '/services/creative-communications' },
    { name: 'Web Solutions', path: '/services/web-solutions' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Software Development', path: '/services/software-development' }
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, url: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, url: '#', name: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#', name: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', name: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, url: '#', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/prk-logo.png"
                alt="PRK TECH Logo"
                className="h-16 w-auto mb-3 brightness-0 invert"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="180" height="60"><rect width="180" height="60" fill="white"/><text x="10" y="35" fill="%23FFFFFF" font-family="Arial" font-size="28" font-weight="bold">PRK</text><text x="90" y="35" fill="%23FFFFFF" font-family="Arial" font-size="28" font-weight="bold">TECH</text></svg>';
                }}
              />
              <p className="text-sm font-semibold text-orange-400">
                Transforming Ideas into Digital Realities
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              Your trusted digital partner since 2012. We deliver innovative web solutions, creative communications, 
              and digital marketing strategies that drive real business growth.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.name}
                  className="p-2.5 bg-blue-800/50 rounded-full hover:bg-orange-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400">
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@prktech.com"
                  className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-200 group text-sm"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>info@prktech.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-start gap-3 text-gray-300 hover:text-orange-400 transition-colors duration-200 group text-sm"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-300 text-sm">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-orange-400" />
                  <span>
                    123 Digital Street<br />
                    Tech City, TC 12345<br />
                    United States
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/50">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} PRK TECH. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;