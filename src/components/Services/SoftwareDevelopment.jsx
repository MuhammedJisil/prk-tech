import React from 'react';
import { Title, Meta } from "react-head";
import {
  Code,
  Monitor,
  Package,
  Globe,
  Cloud,
  Layers,
  Server,
  Settings,
  Zap,
  ArrowRight,
  CheckCircle,
  Laptop,
  Database,
  Shield,
  TrendingUp,
  Award,
  Users
} from "lucide-react";

function SoftwareDevelopment() {
  const services = [
    "Custom Web Application Development",
    "Custom Desktop Application Development",
    "Custom ERP Developmenet",
    "Web App Development",
    "SaaS Applcaition Development",
    "Custom Software Development",
    "Full Stack Development",
    "Cloud & Devops"
  ];

  const offerings = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Custom Web Application Development",
      description: "Build powerful, scalable web applications tailored to your unique business requirements and workflows.",
      features: ["Custom Architecture", "API Integration", "Real-time Features", "Progressive Web Apps"]
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "Custom Desktop Application Development",
      description: "Native desktop applications for Windows, macOS, and Linux with optimal performance and user experience.",
      features: ["Cross-Platform", "Native Performance", "Offline Capabilities", "System Integration"]
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Custom ERP Development",
      description: "Enterprise Resource Planning systems designed to streamline your business operations and improve efficiency.",
      features: ["Module Integration", "Workflow Automation", "Reporting & Analytics", "Multi-User Access"]
    },
    {
      icon: <Laptop className="w-12 h-12" />,
      title: "Web App Development",
      description: "Modern web applications with responsive design and seamless user experiences across all devices.",
      features: ["Responsive Design", "Fast Performance", "SEO Optimized", "Security First"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "SaaS Application Development",
      description: "Cloud-based Software as a Service solutions with subscription models and multi-tenant architecture.",
      features: ["Multi-Tenancy", "Subscription Billing", "Auto-Scaling", "High Availability"]
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software Development",
      description: "End-to-end custom software solutions built from the ground up to solve your specific business challenges.",
      features: ["Requirement Analysis", "Agile Development", "Quality Assurance", "Maintenance Support"]
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Full Stack Development",
      description: "Complete front-end and back-end development services for robust, feature-rich applications.",
      features: ["Frontend & Backend", "Database Design", "API Development", "DevOps Integration"]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Cloud & DevOps",
      description: "Cloud infrastructure setup and DevOps practices for continuous integration and deployment.",
      features: ["CI/CD Pipeline", "Cloud Migration", "Container Orchestration", "Infrastructure as Code"]
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" }
  ];

  const features = [
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Secure Architecture",
      description: "Built with security best practices to protect your data and users from threats."
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "High Performance",
      description: "Optimized code and architecture for fast, responsive applications that scale."
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: "Maintainable Code",
      description: "Clean, well-documented code that's easy to maintain and extend over time."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business and handle increasing demands."
    }
  ];

  const developmentProcess = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, define project scope, and create a detailed development roadmap."
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "User interface design, system architecture planning, and interactive prototypes for validation."
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development with regular sprints, code reviews, and continuous integration."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Comprehensive testing including unit tests, integration tests, and user acceptance testing."
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth deployment to production with monitoring, documentation, and training."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, bug fixes, updates, and feature enhancements as needed."
    }
  ];

  const benefits = [
    "Custom Solutions Tailored to Your Needs",
    "Agile Development Methodology",
    "Experienced Development Team",
    "Transparent Communication",
    "Quality Code & Documentation",
    "Post-Launch Support"
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Title>Software Development | PRK</Title>
      <Meta name="description" content="Custom software development solutions - from web applications to enterprise systems and cloud services." />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop"
            alt="Software Development"
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
                Software Development
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                Built for Your Success
              </span>
            </h1>

            {/* Animated Services Text */}
            <div
              className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">
                Expertise in
              </span>
              <div className="relative h-10 sm:h-12 lg:h-14 overflow-hidden min-w-[400px]">
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
              From enterprise applications to cloud solutions, we develop robust, scalable software 
              that transforms your business processes and drives operational excellence.
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
              Comprehensive software development services to bring your vision to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <span className="text-blue-900">Our Tech </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Stack
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-blue-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-sm text-gray-600">{tech.category}</span>
                </div>
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
                Our Development
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-blue-900">Our Development </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that ensures successful software delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentProcess.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4"
                  style={{ fontFamily: "Sigmar One, sans-serif" }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2
                className="text-4xl sm:text-5xl font-normal"
                style={{ fontFamily: "Sigmar One, sans-serif" }}
              >
                <span className="text-blue-900">Partner With </span>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  The Best
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't just write code—we build solutions that solve real business problems. 
                Our team combines technical expertise with business acumen to deliver software 
                that drives measurable results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-orange-600 rounded-3xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="Development Team"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
              />
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
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's discuss your project and create a software solution that exceeds your expectations. 
            Our team is ready to turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group relative px-8 py-4 bg-white text-blue-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 text-lg"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sigmar+One&family=Open+Sans:wght@400;500;600;700&display=swap');

        @keyframes slide-up {
          0% { transform: translateY(0%); }
          11% { transform: translateY(0%); }
          12.5% { transform: translateY(-12.5%); }
          23.5% { transform: translateY(-12.5%); }
          25% { transform: translateY(-25%); }
          36% { transform: translateY(-25%); }
          37.5% { transform: translateY(-37.5%); }
          48.5% { transform: translateY(-37.5%); }
          50% { transform: translateY(-50%); }
          61% { transform: translateY(-50%); }
          62.5% { transform: translateY(-62.5%); }
          73.5% { transform: translateY(-62.5%); }
          75% { transform: translateY(-75%); }
          86% { transform: translateY(-75%); }
          87.5% { transform: translateY(-87.5%); }
          98.5% { transform: translateY(-87.5%); }
          100% { transform: translateY(-87.5%); }
        }

        .animate-slide-up {
          animation: slide-up 16s infinite;
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

export default SoftwareDevelopment;