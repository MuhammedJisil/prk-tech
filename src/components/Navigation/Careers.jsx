import React, { useState } from 'react';
import { Title, Meta } from "react-head";
import {
  Briefcase,
  Users,
  TrendingUp,
  Award,
  Heart,
  Coffee,
  Target,
  Lightbulb,
  Send,
  User,
  Mail,
  Phone,
  Building,
  FileText,
  Rocket,
  Star,
  Globe
} from "lucide-react";

function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentCompany: '',
    position: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  });

  const positions = [
    "Business Executive (BDE)",
    "Website Designer",
    "Web Developers",
    "BackEnd Developers",
    "SEO Analyst (SEO)"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Job Application: ${formData.position}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Current Company: ${formData.currentCompany}
Position Applied For: ${formData.position}
Years of Experience: ${formData.experience}
Portfolio/LinkedIn: ${formData.portfolio}

Cover Letter:
${formData.coverLetter}

Note: Please attach your CV/Resume to this email.
    `);
    
    window.location.href = `mailto:Ceo@prktechindia.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Title>Careers | Join PRK Team</Title>
      <Meta name="description" content="Join our team of creative professionals and build your career with PRK." />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
            alt="Careers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/95 via-blue-800/90 to-orange-900/95" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-300/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-orange-300/25 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 w-full px-8 py-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">Build Your Career </span>
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
                With PRK
              </span>
            </h1>
            <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
              Join our team of passionate professionals and work on exciting projects 
              that make a real impact. Grow as we grow!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section - Similar to Contact Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Career Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Sigmar One, sans-serif" }}
                >
                  <span className="text-blue-900">Grow As </span>
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    We Grow
                  </span>
                </h2>
              </div>

              {/* Why Join Us Cards */}
              <div className="space-y-6">
                {/* Card 1 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">Exciting Environment</h3>
                      <p className="text-gray-700 text-sm">
                        Are you in search of doing exciting work in an environment you're going to love? 
                        Are you interested to thrive on excellence?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">Challenging Problems</h3>
                      <p className="text-gray-700 text-sm">
                        Are you a smart worker with passion to work? Are you eager and enjoy solving 
                        challenging problems?
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">Committed Team</h3>
                      <p className="text-gray-700 text-sm">
                        Want to work with a shrewd, committed team? Then we are the right employer for you.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 4 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">Unleash Your Potential</h3>
                      <p className="text-gray-700 text-sm">
                        We believe in giving free reign to the budding inventive worm in each employee. 
                        We encourage our human resource to unleash their hidden potential.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 5 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-blue-900 mb-2">Career Growth</h3>
                      <p className="text-gray-700 text-sm">
                        We consider every employee an integral part of our organization. We provide 
                        corporate IT training to knowledge sharing for your development.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Portfolio Link */}
                <div className="bg-gradient-to-r from-blue-900 to-orange-900 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Check Our Work</h3>
                  <p className="text-sm mb-4">
                    If you are interested in making a difference in the world, have talent and ready 
                    to face challenges, you have golden opportunities waiting.
                  </p>
                  <a
                    href="http://www.zinavo.com/portfolio.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-orange-300 transition-colors font-medium"
                  >
                    <Globe className="w-5 h-5" />
                    Visit Our Portfolio
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ fontFamily: "Sigmar One, sans-serif" }}
                >
                  <span className="text-blue-900">Drop Your </span>
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    CV Here
                  </span>
                </h3>
                <p className="text-gray-700 mb-6">
                  For better career growth and opportunities, join us. Send your application to{' '}
                  <a href="mailto:Ceo@prktechindia.in" className="text-orange-500 font-semibold">
                    Ceo@prktechindia.in
                  </a>
                </p>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Experience (Grid) */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Years of Experience *
                      </label>
                      <div className="relative">
                        <Star className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                          placeholder="e.g., 3 years"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Current Company */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Current Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="currentCompany"
                        value={formData.currentCompany}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Your Current Company"
                      />
                    </div>
                  </div>

                  {/* Position */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Position Applied For *
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors bg-white"
                    >
                      <option value="">—Please choose an option—</option>
                      {positions.map((position, index) => (
                        <option key={index} value={position}>
                          {position}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Portfolio */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Portfolio/LinkedIn URL
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Cover Letter *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                        placeholder="Tell us why you're a great fit for this position..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                    style={{ fontFamily: "Sigmar One, sans-serif" }}
                  >
                    <Send className="w-5 h-5" />
                    Submit Application
                  </button>
                  <p className="text-xs text-gray-600 text-center">
                    * Please attach your CV/Resume when sending the email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2
              className="text-4xl sm:text-5xl font-normal mb-4"
              style={{ fontFamily: "Sigmar One, sans-serif" }}
            >
              <span className="text-blue-900">Why Work </span>
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                With Us?
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide a fabulous friendly working environment within the workplace. 
              You can share and acquire knowledge and experience among talented, energetic 
              youth and experienced employees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Friendly Environment</h3>
              <p className="text-gray-700">Work in a supportive, collaborative atmosphere</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white mb-4">
                <TrendingUp className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Career Growth</h3>
              <p className="text-gray-700">Clear career progression and learning opportunities</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Talented Team</h3>
              <p className="text-gray-700">Work with passionate professionals</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white mb-4">
                <Coffee className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Knowledge Sharing</h3>
              <p className="text-gray-700">Learn from experienced employees</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Recognition</h3>
              <p className="text-gray-700">We value every employee's contribution</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white mb-4">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Exciting Projects</h3>
              <p className="text-gray-700">Work on challenging, innovative projects</p>
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
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            If you're ready to face challenges and pursue a career in web designing, 
            development, and internet marketing, golden opportunities await you.
          </p>
          <a
            href="mailto:Ceo@prktechindia.in"
            className="inline-block px-8 py-4 bg-white text-blue-900 font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            style={{ fontFamily: "Sigmar One, sans-serif" }}
          >
            Send Your CV Now
          </a>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sigmar+One&family=Open+Sans:wght@400;500;600;700&display=swap');

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
      `}</style>
    </div>
  );
}

export default Careers;