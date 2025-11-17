import React from "react";
import { Title, Meta } from "react-head";
import {
  Palette,
  Layout,
  Smartphone,
  Users,
  TrendingUp,
  Zap,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

function CreativeCommunications() {
  const services = [
    "Graphic Design",
    "Landing Page Design",
    "Responsive Web Design",
    "UI-UX Design",
    "Website Redesign",
    "Branding & Strategy",
    "React js Development",
    "Vue js Development",
    "Website Revamp Services",
  ];

  const offerings = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design",
      description:
        "Eye-catching visuals that communicate your brand message effectively across all mediums.",
      features: [
        "Logo Design",
        "Brand Identity",
        "Marketing Collateral",
        "Social Media Graphics",
      ],
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Landing Page Design",
      description:
        "High-converting landing pages optimized to capture leads and drive action.",
      features: [
        "Conversion-Focused",
        "A/B Testing Ready",
        "Mobile Optimized",
        "Fast Loading",
      ],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Responsive Web Design",
      description:
        "Beautiful websites that adapt seamlessly to any device or screen size.",
      features: [
        "Mobile-First",
        "Cross-Browser Compatible",
        "Touch-Friendly",
        "Performance Optimized",
      ],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "UI-UX Design",
      description:
        "User-centered design that creates intuitive and delightful digital experiences.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Website Redesign",
      description:
        "Transform your outdated website into a modern, high-performing digital asset.",
      features: [
        "Modern Aesthetics",
        "Improved Performance",
        "Enhanced UX",
        "SEO Optimization",
      ],
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Branding & Strategy",
      description:
        "Comprehensive brand development that sets you apart from the competition.",
      features: [
        "Brand Positioning",
        "Visual Identity",
        "Brand Guidelines",
        "Market Strategy",
      ],
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "React.js Development",
      description:
        "Powerful, scalable web applications built with React for exceptional performance.",
      features: [
        "Component-Based",
        "Fast & Efficient",
        "SEO-Friendly",
        "Maintainable Code",
      ],
    },
    {
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Vue.js Development",
      description:
        "Progressive web applications with Vue.js for smooth, reactive user experiences.",
      features: [
        "Lightweight",
        "Easy Integration",
        "Flexible Architecture",
        "Great Performance",
      ],
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "Website Revamp Services",
      description:
        "Complete website transformation to align with current trends and technologies.",
      features: [
        "Content Migration",
        "Design Refresh",
        "Tech Stack Update",
        "Performance Boost",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We start by understanding your business, goals, target audience, and competitive landscape.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "We develop a comprehensive creative strategy aligned with your brand vision and objectives.",
    },
    {
      number: "03",
      title: "Design",
      description:
        "Our designers craft stunning visuals and experiences that resonate with your audience.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "We bring designs to life with clean, efficient code and cutting-edge technologies.",
    },
    {
      number: "05",
      title: "Testing",
      description:
        "Rigorous testing ensures everything works flawlessly across all devices and browsers.",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "We deploy your project and provide ongoing support to ensure continued success.",
    },
  ];

  const benefits = [
    "Enhanced Brand Recognition",
    "Improved User Engagement",
    "Higher Conversion Rates",
    "Competitive Advantage",
    "Scalable Solutions",
    "Future-Proof Technology",
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Title>Creative Communication | PRK TECH</Title>
      <Meta
        name="description"
        content="Enhance your brand identity with PRK TECH’s creative communication solutions—crafting impactful messages, visuals, and strategies."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src="/creative-communication-hero.png"
            alt="Creative Design"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-900/60 to-yellow-900/70" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-yellow-400/25 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
          <div className="absolute w-96 h-96 bg-blue-300/15 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-2000" />
        </div>

        {/* Content - Left Aligned */}
        <div className="relative z-10 w-full px-8 py-12">
          <div className="max-w-5xl space-y-6">
            {/* Main Heading */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">
                Creative Communications
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                That Captivate & Convert
              </span>
            </h1>

            {/* Animated Services Text */}
            <div
              className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">Expert in</span>
              <div className="relative h-10 sm:h-12 lg:h-14 overflow-hidden min-w-[320px]">
                <div className="animate-slide-up">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      className="h-10 sm:h-12 lg:h-14 flex items-center font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg"
                      style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
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
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              From stunning visual designs to powerful web development, we
              create digital experiences that tell your story, engage your
              audience, and drive measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link
                to="/contact"
                className="group relative px-7 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/40 text-base inline-block"
                style={{ fontFamily: "Stack Sans Text, sans-serif" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
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
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-blue-950">Our </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              Comprehensive creative and technical solutions tailored to your
              brand's unique needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3
                    className="text-xl font-bold text-blue-950 mb-3"
                    style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed mb-4"
                    style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-600"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        <CheckCircle className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
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

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-blue-950">Our </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              A proven methodology that ensures successful project delivery
              every time
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent mb-4"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  {step.number}
                </div>
                <h3
                  className="text-xl font-bold text-blue-950 mb-3"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
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
                style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
              >
                <span className="text-blue-950">Why Choose </span>
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Our Services?
                </span>
              </h2>
              <p
                className="text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: "Stack Sans Text, sans-serif" }}
              >
                Our creative communication services are designed to elevate your
                brand and deliver tangible results. We combine artistic
                excellence with technical expertise to create solutions that
                truly make a difference.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-blue-950" />
                    </div>
                    <span
                      className="text-gray-700 font-medium"
                      style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-yellow-600 rounded-3xl transform rotate-3" />
              <img
                src="/creative-communication.png"
                alt="Creative Team"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-950 to-yellow-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-yellow-300 rounded-full blur-3xl top-0 left-0" />
          <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl bottom-0 right-0" />
        </div>

        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
          >
            Ready to Elevate Your Brand?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            style={{ fontFamily: "Stack Sans Text, sans-serif" }}
          >
            Let's create something amazing together. Our team is ready to bring
            your vision to life with creativity, expertise, and passion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-950 transition-all duration-300 hover:scale-105 text-lg inline-block"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');

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

export default CreativeCommunications;
