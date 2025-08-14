import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    resort: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Rooms', href: '#rooms' },
      { label: 'Amenities', href: '#amenities' },
      { label: 'Services', href: '#services' }
    ],
    support: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Booking Policy', href: '#policy' },
      { label: 'Cancellation', href: '#cancellation' }
    ],
    experiences: [
      { label: 'Spa & Wellness', href: '#spa' },
      { label: 'Fine Dining', href: '#dining' },
      { label: 'Activities', href: '#activities' },
      { label: 'Excursions', href: '#excursions' }
    ]
  };

  const socialLinks = [
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Youtube, href: '#', label: 'YouTube' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              Stay Connected with Paradise
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for exclusive offers, upcoming events, and insider tips 
              for making the most of your luxury resort experience.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <button 
              onClick={scrollToTop}
              className="text-3xl font-bold mb-4 hover:text-amber-400 transition-colors duration-300"
            >
              Azure Paradise Resort
            </button>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Where luxury meets tranquility. Experience the ultimate escape in our world-class 
              resort, where every moment is crafted to perfection for discerning travelers.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Paradise Island, Maldives</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>+960 123 4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>info@azureparadise.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-amber-500 transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Resort Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-amber-400">
                  Our Resort
                </h4>
                <ul className="space-y-3">
                  {footerLinks.resort.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-amber-400">
                  Support
                </h4>
                <ul className="space-y-3">
                  {footerLinks.support.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experiences Links */}
              <div>
                <h4 className="text-lg font-semibold mb-6 text-amber-400">
                  Experiences
                </h4>
                <ul className="space-y-3">
                  {footerLinks.experiences.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-amber-400 transition-colors duration-300 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Azure Paradise Resort. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;