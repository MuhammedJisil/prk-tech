import React from "react";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Award,
  Globe,
  Zap,
} from "lucide-react";
import { Title, Meta } from "react-head";
import { Link } from "react-router-dom";

function Home() {
  const services = [
    "Creative Communications",
    "Web Solutions",
    "Digital Marketing",
    "Software Development",
  ];

  const whyChooseUs = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Proven Track Record",
      description:
        "Since 2012, we've been the trusted digital partner for thousands of businesses. Our extensive experience enables us to deliver strategies that work while avoiding common pitfalls.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Results-Driven Approach",
      description:
        "We don't just build websites—we create digital experiences optimized for search engines and user engagement. Through data analytics, we track performance and continuously refine strategies to meet your goals.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Partnership Mindset",
      description:
        "We're committed to your long-term success. Beyond project delivery, we provide ongoing support and strategic guidance to ensure your digital presence continues to thrive.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Expert Team",
      description:
        "Our specialists in web development, design, and digital marketing stay ahead of industry trends. Each project benefits from a dedicated team committed to delivering exceptional results.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Industry Expertise",
      description:
        "We've partnered with businesses across diverse sectors, giving us unique insights into different markets. This breadth of experience allows us to craft tailored solutions for your specific industry.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Built to Scale",
      description:
        "As your business evolves, your digital strategy must keep pace. Our solutions are designed to grow with you, ensuring you maintain a competitive edge at every stage.",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Title>PRK TECH</Title>
      <Meta
        name="description"
        content="Learn more about PRK and our expertise."
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src="/home.png"
            alt="Technology Background"
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
                Transforming Ideas
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                into Digital Realities
              </span>
            </h1>

            {/* Animated Services Text */}
            <div
              className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">
                We Specialize in
              </span>
              <div className="relative h-10 sm:h-12 lg:h-14 overflow-hidden min-w-[280px]">
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
              From innovative creative solutions to cutting-edge software
              development, we deliver excellence in every project. Let's build
              something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <Link
                to="/contact"
                className="group relative px-7 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/40 text-base"
                style={{ fontFamily: "Stack Sans Text, sans-serif" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                to="/about"
                className="px-7 py-3 bg-white border-2 border-blue-950 text-blue-950 font-bold rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-base"
                style={{ fontFamily: "Stack Sans Text, sans-serif" }}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Comprehensive digital solutions tailored to elevate your business
              and drive meaningful results
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Creative Communications */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-blue-950"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-blue-950 mb-4"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  Creative Communications
                </h3>
                <p
                  className="text-gray-700 leading-relaxed mb-4"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  Strategic brand messaging and creative content that resonates
                  with your audience. We craft compelling narratives across all
                  platforms.
                </p>
                <ul
                  className="space-y-2 text-gray-600"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span>Brand Strategy & Identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span>Content Creation & Copywriting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span>Social Media Management</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Web Solutions */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-blue-950 mb-4"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  Web Solutions
                </h3>
                <p
                  className="text-gray-700 leading-relaxed mb-4"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  Modern, responsive websites designed for optimal user
                  experience and business growth. Built with the latest
                  technologies.
                </p>
                <ul
                  className="space-y-2 text-gray-600"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>Custom Website Design & Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>E-commerce Platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>Website Maintenance & Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Digital Marketing */}
            <div className="group relative bg-gradient-to-br from-yellow-50 to-blue-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-blue-950"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-blue-950 mb-4"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  Digital Marketing
                </h3>
                <p
                  className="text-gray-700 leading-relaxed mb-4"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  Data-driven marketing strategies that increase visibility,
                  drive traffic, and convert leads into loyal customers.
                </p>
                <ul
                  className="space-y-2 text-gray-600"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span>SEO & Search Marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span>Pay-Per-Click Advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">✓</span>
                    <span>Email Marketing Campaigns</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Software Development */}
            <div className="group relative bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3
                  className="text-2xl font-bold text-blue-950 mb-4"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  Software Development
                </h3>
                <p
                  className="text-gray-700 leading-relaxed mb-4"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  Custom software solutions that streamline operations and solve
                  complex business challenges with scalable technology.
                </p>
                <ul
                  className="space-y-2 text-gray-600"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>Custom Application Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>Mobile App Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-900 mt-1">✓</span>
                    <span>API Integration & Development</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-blue-950">Why Partner </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                With Us?
              </span>
            </h2>
            <p
              className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              Looking for a powerful digital presence? We've empowered thousands
              of businesses since 2012 with proven web design, development, and
              digital marketing solutions. Let's accelerate your growth
              together.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-300"
              >
                <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3
                  className="text-xl font-bold text-blue-950 mb-3"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA at the bottom of section */}
          <div className="text-center mt-16">
            <Link
              to="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/40 text-lg inline-block"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');

        @keyframes slide-up {
          0%, 25% {
            transform: translateY(0%);
          }
          27%, 50% {
            transform: translateY(-25%);
          }
          52%, 75% {
            transform: translateY(-50%);
          }
          77%, 100% {
            transform: translateY(-75%);
          }
        }

        .animate-slide-up {
          animation: slide-up 12s infinite;
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

export default Home;
