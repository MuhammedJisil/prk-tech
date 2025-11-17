import React, { useState } from "react";
import { Title, Meta } from "react-head";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  Globe,
  Facebook,
  Instagram,
} from "lucide-react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const services = ["Website Design & Development", "Digital Marketing", "SEO"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Contact Form: ${formData.service || "General Inquiry"}`
    );
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service Interested In: ${formData.service}

Message:
${formData.message}
    `);

    window.location.href = `mailto:Ceo@prktechindia.in?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Title>Contact Us | PRK TECH</Title>
      <Meta
        name="description"
        content="Get in touch with PRK TECH for inquiries, support, business collaborations, and service information."
      />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/contact-us.png"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-blue-900/60 to-yellow-900/70" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div className="absolute w-96 h-96 bg-yellow-400/25 rounded-full blur-3xl top-1/2 right-0 animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 w-full px-8 py-12">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-white drop-shadow-lg">Let's Start </span>
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent drop-shadow-lg">
                Something Great
              </span>
            </h1>
            <p
              className="text-xl text-white leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              Have a project in mind? We'd love to hear from you. Get in touch
              and let's make it happen together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Right: Contact Form (Shows first on mobile) */}
            <div className="lg:col-span-3 order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  <span className="text-blue-950">Send Us a </span>
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Message
                  </span>
                </h3>

                <div className="space-y-6">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-sm font-bold text-gray-700 mb-2"
                      style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                    >
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="John Doe"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-sm font-bold text-gray-700 mb-2"
                      style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-yellow-500 transition-colors"
                        placeholder="john@example.com"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      />
                    </div>
                  </div>

                  {/* Phone & Company (Grid) */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-sm font-bold text-gray-700 mb-2"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-yellow-500 transition-colors"
                          placeholder="+91 98765 43210"
                          style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-sm font-bold text-gray-700 mb-2"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-yellow-500 transition-colors"
                          placeholder="Your Company"
                          style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label
                      className="block text-sm font-bold text-gray-700 mb-2"
                      style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                    >
                      Service Interested In *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-yellow-500 transition-colors bg-white"
                      style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                    >
                      <option value="">—Please choose an option—</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-sm font-bold text-gray-700 mb-2"
                      style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                    >
                      Your Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:border-yellow-500 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-950 font-bold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                    style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            {/* Left: Contact Information (Shows second on mobile) */}
            <div className="lg:col-span-2 space-y-8 order-2 lg:order-1">
              <div>
                <h2
                  className="text-3xl font-bold mb-6"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  <span className="text-blue-950">Get In </span>
                  <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                    Touch
                  </span>
                </h2>
                <p
                  className="text-gray-700 leading-relaxed mb-8"
                  style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                >
                  Whether you're looking to build a new website, improve your
                  digital presence, or explore SEO opportunities, we're here to
                  help bring your vision to life.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Email */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-950" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-blue-950 mb-1"
                        style={{
                          fontFamily: "Stack Sans Headline, sans-serif",
                        }}
                      >
                        Email Us
                      </h3>
                      <a
                        href="mailto:Ceo@prktechindia.in"
                        className="text-gray-700 hover:text-yellow-600 transition-colors"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        Ceo@prktechindia.in
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-950" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-blue-950 mb-1"
                        style={{
                          fontFamily: "Stack Sans Headline, sans-serif",
                        }}
                      >
                        Visit Us
                      </h3>
                      <p
                        className="text-gray-700"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        PRK Global 360
                      </p>
                      <p
                        className="text-gray-700"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        Bangalore, India
                      </p>
                      <a
                        href="https://share.google/U5NKLM6DwXYwJotPb"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mt-2 font-medium"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        View on Map
                        <Globe className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-950" />
                    </div>
                    <div>
                      <h3
                        className="text-lg font-bold text-blue-950 mb-1"
                        style={{
                          fontFamily: "Stack Sans Headline, sans-serif",
                        }}
                      >
                        Business Hours
                      </h3>
                      <p
                        className="text-gray-700"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p
                        className="text-gray-700"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                      <p
                        className="text-gray-700"
                        style={{ fontFamily: "Stack Sans Text, sans-serif" }}
                      >
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3
                  className="text-lg font-bold text-blue-950 mb-4"
                  style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
                >
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/share/1AQ8odrTaT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-blue-950 hover:scale-110 transition-transform"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/prktechindia?igsh=dzRqMzliNnM0dGxv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center text-blue-950 hover:scale-110 transition-transform"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "Stack Sans Headline, sans-serif" }}
            >
              <span className="text-blue-950">Find Us </span>
              <span className="bg-gradient-to-r from-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Here
              </span>
            </h2>
            <p
              className="text-lg text-gray-700"
              style={{ fontFamily: "Stack Sans Text, sans-serif" }}
            >
              PRK Global 360, Bangalore
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PRK Global 360 Location"
            ></iframe>
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
            Ready to Get Started?
          </h2>
          <p
            className="text-xl text-white/90 mb-8 leading-relaxed"
            style={{ fontFamily: "Stack Sans Text, sans-serif" }}
          >
            Let's transform your digital presence together. Contact us today for
            a free consultation.
          </p>
          <a
            href="mailto:Ceo@prktechindia.in"
            className="inline-block px-8 py-4 bg-white text-blue-950 font-bold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            style={{ fontFamily: "Stack Sans Text, sans-serif" }}
          >
            Email Us Now
          </a>
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
      `}</style>
    </div>
  );
}

export default ContactUs;
