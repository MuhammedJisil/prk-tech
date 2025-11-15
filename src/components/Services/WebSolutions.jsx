import React from 'react';
import { Title, Meta } from "react-head";
import {
  Globe,
  Code,
  ShoppingCart,
  Layers,
  FileText,
  Database,
  Smartphone,
  Settings,
  Zap,
  ArrowRight,
  CheckCircle,
  Monitor,
  Server,
  Shield,
  TrendingUp
} from "lucide-react";

function WebSolutions() {
  const services = [
    "Website Design",
    "Website Development",
    "E-commerce Development",
    "Web Application Development",
    "WordPress Development",
    "Django Web Development",
    "Mobile Apps Development",
    "Python Development",
    "Website Maintenance Service"
  ];

  const offerings = [
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Website Design",
      description: "Stunning, user-friendly website designs that reflect your brand identity and engage visitors.",
      features: ["Custom Design", "Responsive Layout", "Brand Integration", "Modern UI/UX"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Professional website development using cutting-edge technologies for optimal performance.",
      features: ["Clean Code", "SEO Optimized", "Fast Loading", "Cross-Browser Compatible"]
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Development",
      description: "Full-featured online stores with secure payment gateways and inventory management.",
      features: ["Payment Integration", "Shopping Cart", "Order Management", "Product Catalog"]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Web Application Development",
      description: "Custom web applications tailored to your business processes and workflows.",
      features: ["Scalable Architecture", "API Integration", "Real-time Features", "Cloud-Ready"]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "WordPress Development",
      description: "Powerful WordPress websites with custom themes and plugins for easy content management.",
      features: ["Custom Themes", "Plugin Development", "WooCommerce", "Easy Updates"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Django Web Development",
      description: "Robust, secure web applications built with Django framework for enterprise-level solutions.",
      features: ["Python-Powered", "Secure by Default", "Admin Panel", "RESTful APIs"]
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Native Performance", "Cross-Platform", "Push Notifications", "Offline Support"]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Python Development",
      description: "Versatile Python solutions for web backends, data processing, and automation.",
      features: ["Fast Development", "Scalable Solutions", "Data Processing", "API Development"]
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Website Maintenance Service",
      description: "Ongoing support and maintenance to keep your website secure, updated, and performing optimally.",
      features: ["Regular Updates", "Security Monitoring", "Backup Management", "Performance Optimization"]
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Vue.js", icon: "💚" },
    { name: "WordPress", icon: "📝" },
    { name: "Django", icon: "🐍" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "🟢" },
    { name: "PHP", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" }
  ];

  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable infrastructure for peace of mind."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "High Performance",
      description: "Optimized for speed with fast loading times and smooth user experience."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "SEO Optimized",
      description: "Search engine friendly architecture to help you rank higher and get discovered."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Scalable Solutions",
      description: "Built to grow with your business, handling increased traffic and features."
    }
  ];

  const benefits = [
    "Custom Solutions Tailored to Your Needs",
    "Responsive Design for All Devices",
    "Fast & Secure Implementation",
    "Ongoing Support & Maintenance",
    "Cost-Effective Development",
    "Proven Track Record"
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Title>Web Solutions | PRK</Title>
      <Meta name="description" content="Comprehensive web solutions from design to development, maintenance, and beyond." />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="Web Development"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-orange-900/70" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-orange-300/25 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
          <div className="absolute w-96 h-96 bg-blue-300/15 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-2000" />
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 w-full px-8 py-12">
          <div className="max-w-5xl space-y-6">
            {/* Main Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">
                Web Solutions
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                That Drive Results
              </span>
            </h1>

            {/* Animated Services Text */}
            <div
              className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">
                Specializing in
              </span>
              <div className="relative h-10 sm:h-12 lg:h-14 overflow-hidden min-w-[350px]">
                <div className="animate-slide-up">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="h-10 sm:h-12 lg:h-14 flex items-center font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg"
                      style={{ fontFamily: "Sigmar One, sans-serif" }}
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p
              className="max-w-2xl text-base sm:text-lg text-white leading-relaxed font-medium drop-shadow-md"
              style={{ fontFamily: "Open Sans, sans-serif" }}
            >
              From elegant website design to powerful web applications, we deliver comprehensive 
              web solutions that combine stunning aesthetics with robust functionality.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button
                className="group relative px-7 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 text-base"
                style={{ fontFamily: "Sigmar One, sans-serif" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                className="px-7 py-3 bg-white border-2 border-blue-900 text-blue-900 font-bold rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-base"
                style={{ fontFamily: "Sigmar One, sans-serif" }}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-blue-900">Our </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              End-to-end web solutions designed to elevate your online presence
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-blue-900">Technologies </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                We Use
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We leverage the latest and most reliable technologies to build your web solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-blue-900">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-blue-900">Why Choose </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-3xl p-8 md:p-12">
            <h3
              className="text-3xl font-bold text-blue-900 mb-8 text-center"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              What You Get
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-orange-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-orange-300 rounded-full blur-3xl top-0 left-0" />
          <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl bottom-0 right-0" />
        </div>
        
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Sigmar One, sans-serif" }}
          >
            Ready to Build Your Web Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's turn your vision into a powerful web solution. Our expert team is 
            ready to deliver results that exceed your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group relative px-8 py-4 bg-white text-blue-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Get Started Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 text-lg"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              Request Quote
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sigmar+One&family=Open+Sans:wght@400;500;600;700&display=swap');

        @keyframes slide-up {
          0% { transform: translateY(0%); }
          10% { transform: translateY(0%); }
          11.11% { transform: translateY(-11.11%); }
          21.11% { transform: translateY(-11.11%); }
          22.22% { transform: translateY(-22.22%); }
          32.22% { transform: translateY(-22.22%); }
          33.33% { transform: translateY(-33.33%); }
          43.33% { transform: translateY(-33.33%); }
          44.44% { transform: translateY(-44.44%); }
          54.44% { transform: translateY(-44.44%); }
          55.55% { transform: translateY(-55.55%); }
          65.55% { transform: translateY(-55.55%); }
          66.66% { transform: translateY(-66.66%); }
          76.66% { transform: translateY(-66.66%); }
          77.77% { transform: translateY(-77.77%); }
          87.77% { transform: translateY(-77.77%); }
          88.88% { transform: translateY(-88.88%); }
          98.88% { transform: translateY(-88.88%); }
          100% { transform: translateY(-88.88%); }
        }

        .animate-slide-up {
          animation: slide-up 18s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.8;
          }
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}

export default WebSolutions;