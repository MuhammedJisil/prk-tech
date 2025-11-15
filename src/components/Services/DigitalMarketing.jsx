import React from 'react';
import { Title, Meta } from "react-head";
import {
  Search,
  TrendingUp,
  MapPin,
  Mouse,
  Users,
  BarChart3,
  ShoppingBag,
  Target,
  Zap,
  ArrowRight,
  CheckCircle,
  LineChart,
  Award,
  Rocket,
  Globe
} from "lucide-react";

function DigitalMarketing() {
  const services = [
    "SEO Services",
    "SMO Services",
    "Local SEO Services",
    "Google Ads Management",
    "ORM Services",
    "Digital Marketing Services",
    "Data Analytics Services",
    "Ecommerce SEO Services",
    "SEO Packages"
  ];

  const offerings = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Services",
      description: "Boost your organic rankings and drive qualified traffic with our comprehensive SEO strategies.",
      features: ["Keyword Research", "On-Page Optimization", "Link Building", "Technical SEO"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "SMO Services",
      description: "Amplify your brand presence across social media platforms with engaging content and strategies.",
      features: ["Social Strategy", "Content Creation", "Community Management", "Performance Tracking"]
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Local SEO Services",
      description: "Dominate local search results and attract nearby customers to your business.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Content"]
    },
    {
      icon: <Mouse className="w-12 h-12" />,
      title: "Google Ads Management",
      description: "Maximize ROI with expertly managed PPC campaigns that target the right audience.",
      features: ["Campaign Setup", "Keyword Bidding", "Ad Copy Optimization", "Conversion Tracking"]
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: "ORM Services",
      description: "Protect and enhance your online reputation with proactive monitoring and management.",
      features: ["Reputation Monitoring", "Review Management", "Crisis Response", "Brand Protection"]
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Digital Marketing Services",
      description: "Comprehensive digital marketing solutions tailored to achieve your business goals.",
      features: ["Strategy Development", "Multi-Channel Marketing", "Content Marketing", "Email Campaigns"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Data Analytics Services",
      description: "Turn data into actionable insights with advanced analytics and reporting.",
      features: ["Analytics Setup", "Performance Tracking", "Custom Reports", "Data Visualization"]
    },
    {
      icon: <ShoppingBag className="w-12 h-12" />,
      title: "Ecommerce SEO Services",
      description: "Drive more sales with SEO strategies specifically designed for online stores.",
      features: ["Product Optimization", "Category Pages", "Schema Markup", "Shopping Feed"]
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "SEO Packages",
      description: "Flexible SEO packages designed to fit businesses of all sizes and budgets.",
      features: ["Starter Package", "Growth Package", "Enterprise Package", "Custom Solutions"]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Increased Traffic",
      description: "Drive more qualified visitors to your website through organic and paid channels."
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: "Better Targeting",
      description: "Reach the right audience at the right time with precision targeting strategies."
    },
    {
      icon: <LineChart className="w-10 h-10" />,
      title: "Higher Conversions",
      description: "Convert more visitors into customers with optimized campaigns and landing pages."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Brand Visibility",
      description: "Increase your brand presence across search engines and social media platforms."
    }
  ];

  const whyChooseUs = [
    "Proven Track Record of Success",
    "Data-Driven Strategies",
    "Transparent Reporting",
    "Dedicated Account Manager",
    "ROI-Focused Approach",
    "Cutting-Edge Tools & Techniques"
  ];

  const industries = [
    "E-commerce",
    "Healthcare",
    "Real Estate",
    "Finance",
    "Education",
    "Technology",
    "Hospitality",
    "Retail"
  ];

  return (
    <div className="w-full overflow-x-hidden">
      <Title>Digital Marketing | PRK</Title>
      <Meta name="description" content="Grow your business with our comprehensive digital marketing services - from SEO to social media and beyond." />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Low Opacity */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?q=80&w=2074&auto=format&fit=crop"
            alt="Digital Marketing"
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
                Digital Marketing
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                That Drives Growth
              </span>
            </h1>

            {/* Animated Services Text */}
            <div
              className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl lg:text-3xl font-bold"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">
                Master in
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
              From SEO to social media, PPC to analytics, we deliver integrated digital marketing 
              strategies that increase visibility, drive traffic, and generate measurable results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button
                className="group relative px-7 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/40 text-base"
                style={{ fontFamily: "Sigmar One, sans-serif" }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button
                className="px-7 py-3 bg-white border-2 border-blue-900 text-blue-900 font-bold rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-xl text-base"
                style={{ fontFamily: "Sigmar One, sans-serif" }}
              >
                View Our Work
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
              Comprehensive digital marketing solutions to elevate your online presence and drive business growth
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300">
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
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-blue-900">Why Digital Marketing </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Matters
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              The impact of strategic digital marketing on your business success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <div className="text-orange-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl transform -rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
                alt="Marketing Team"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2
                className="text-4xl sm:text-5xl font-normal"
                style={{ fontFamily: "Sigmar One, sans-serif" }}
              >
                <span className="text-blue-900">Why Choose </span>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Our Agency?
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't just run campaigns—we build long-term strategies that deliver sustainable 
                growth. Our data-driven approach ensures every marketing dollar works harder for your business.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-blue-900">Industries </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                We Serve
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Proven expertise across diverse industries and markets
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center group"
              >
                <h3 className="text-lg font-bold text-blue-900 group-hover:text-orange-500 transition-colors">
                  {industry}
                </h3>
              </div>
            ))}
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Let's create a digital marketing strategy that delivers real results. 
            Get started with a free consultation and see how we can transform your online presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="group relative px-8 py-4 bg-white text-blue-900 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Get Free Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 text-lg"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              Contact Us
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

export default DigitalMarketing;