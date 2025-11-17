import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    {
      name: "Creative Communications",
      path: "/services/creative-communications",
    },
    { name: "Web Solutions", path: "/services/web-solutions" },
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "Software Development", path: "/services/software-development" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/share/1AQ8odrTaT/",
      name: "Facebook",
    },

    {
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/prktechindia?igsh=dzRqMzliNnM0dGxv",
      name: "Instagram",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');
      `}</style>
      <footer
        className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white"
        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
      >
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div>
                <img
                  src="/prk-logo.png"
                  alt="PRK TECH Logo"
                  className="h-16 w-auto mb-3"
                  onError={(e) => {
                    e.target.src =
                      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="180" height="60"><rect width="180" height="60" fill="white"/><text x="10" y="35" fill="%23FFFFFF" font-family="Arial" font-size="28" font-weight="bold">PRK</text><text x="90" y="35" fill="%23FFFFFF" font-family="Arial" font-size="28" font-weight="bold">TECH</text></svg>';
                  }}
                />
                <p
                  className="text-sm font-semibold text-yellow-400"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  Transforming Ideas into Digital Realities
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Your trusted digital partner since 2012. We deliver innovative
                web solutions, creative communications, and digital marketing
                strategies that drive real business growth.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.name}
                    className="p-2.5 bg-blue-900/50 rounded-full hover:bg-yellow-500 hover:text-blue-950 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/30"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3
                className="text-lg font-bold mb-6 text-yellow-400"
                style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
              >
                Our Services
              </h3>

              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3
                className="text-lg font-bold mb-6 text-yellow-400"
                style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
              >
                Quick Links
              </h3>

              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3
                className="text-lg font-bold mb-6 text-yellow-400"
                style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
              >
                Get In Touch
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:Ceo@prktechindia.in"
                    className="flex items-start gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200 group text-sm"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>Ceo@prktechindia.in</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+9606171055"
                    className="flex items-start gap-3 text-gray-300 hover:text-yellow-400 transition-colors duration-200 group text-sm"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span>+91 9606171055</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-300 text-sm">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-yellow-400" />
                    <span>
                      PRK Global 360
                      <br />
                      Bangalore
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} PRK TECH. All rights reserved.
              </p>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-400">Sited by:</span>
                <a
                  href="https://www.acceleratein.org/"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1 font-semibold"
                >
                  Accelerate
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
