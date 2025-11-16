import React from 'react';
import {
  Target,
  TrendingUp,
  Users,
  Award,
  Globe,
  Zap,
  Heart,
  Lightbulb,
  Shield,
  Rocket
} from "lucide-react";

function AboutUs() {
  const stats = [
    { number: "2012", label: "Founded" },
    { number: "1000+", label: "Projects Delivered" },
    { number: "500+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" }
  ];

  const values = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Client-Centric",
      description: "Your success is our success. We prioritize understanding your needs and delivering solutions that exceed expectations."
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Innovation",
      description: "We stay ahead of the curve, embracing new technologies and creative approaches to solve complex challenges."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices form the foundation of every relationship we build."
    },
    {
      icon: <Rocket className="w-10 h-10" />,
      title: "Excellence",
      description: "We're committed to delivering high-quality work that drives real results and stands the test of time."
    }
  ];

  const expertise = [
    {
      icon: <Award className="w-12 h-12" />,
      title: "Proven Track Record",
      description: "Over a decade of delivering exceptional digital solutions across diverse industries and markets."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Results-Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line and business growth."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description: "Our talented professionals bring years of experience and passion to every project."
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Approach",
      description: "We combine creativity with data-driven insights to develop strategies that work."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Perspective",
      description: "Working with clients worldwide has given us insights into diverse markets and cultures."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Cutting-Edge Solutions",
      description: "We leverage the latest technologies to build scalable, future-proof digital solutions."
    }
  ];

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Team Collaboration"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-900/70 to-yellow-900/80" />
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-yellow-400/25 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
          <div className="absolute w-96 h-96 bg-blue-300/15 rounded-full blur-3xl bottom-0 left-1/3 animate-pulse delay-2000" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 py-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">Empowering Businesses</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                Since 2012
              </span>
            </h1>

            {/* Description */}
            <p
              className="max-w-3xl mx-auto text-lg sm:text-xl text-white leading-relaxed font-medium drop-shadow-md"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              We're more than a digital agency—we're your strategic partner in growth. 
              For over a decade, we've been helping businesses transform their vision into 
              digital reality through innovative solutions and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2
                className="text-4xl sm:text-5xl font-normal"
                style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
              >
                <span className="text-blue-950">Our </span>
                <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Story
                </span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
                Founded in 2012, PRK began with a simple mission: to help businesses harness 
                the power of digital technology to achieve their goals. What started as a small 
                team of passionate innovators has grown into a full-service digital agency 
                serving clients across the globe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
                Over the years, we've evolved alongside the digital landscape, continuously 
                adapting our services and expertise to meet the changing needs of our clients. 
                Through it all, our commitment to delivering exceptional results has remained constant.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
                Today, we're proud to have partnered with hundreds of businesses, from startups 
                to established enterprises, helping them build their digital presence and achieve 
                measurable growth. Our success is measured by the success of our clients.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-3xl transform rotate-3" />
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                alt="Our Team"
                className="relative rounded-3xl shadow-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-blue-950">Our </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-yellow-300"
              >
                <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3" style={{ fontFamily: "Stack Sans Headline, sans-serif" }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-blue-950">What Makes </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Us Different
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
              Our unique combination of experience, expertise, and dedication sets us apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-50 to-yellow-50 rounded-2xl p-8 overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/30 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
                <div className="relative z-10">
                  <div className="text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-3" style={{ fontFamily: "Stack Sans Headline, sans-serif" }}>
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed" style={{ fontFamily: "Stack Sans Text, sans-serif" }}>
            Let's create something extraordinary together. Partner with us and experience 
            the difference that dedication, expertise, and innovation can make.
          </p>
          <button
            className="group relative px-8 py-4 bg-white text-blue-950 font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
            style={{ fontFamily: "Stack Sans Text, sans-serif" }}
          >
            <span className="relative z-10">Get Started Today</span>
            <div className="absolute inset-0 bg-yellow-500 text-blue-950 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              Get Started Today
            </div>
          </button>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Stack+Sans+Headline:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');

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

export default AboutUs;