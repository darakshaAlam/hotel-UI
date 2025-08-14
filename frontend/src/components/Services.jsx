import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const handleServiceInquiry = (serviceName) => {
    // Mock service inquiry
    alert(`Inquiry sent for ${serviceName}! (This is a mock implementation)`);
    console.log('Service inquiry:', serviceName);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Exceptional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From the moment you arrive until your departure, our dedicated team ensures 
            every detail is perfect for your luxury escape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {mockData.services.map((service, index) => (
            <Card 
              key={index}
              className="group border-0 shadow-lg hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Image */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredService === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Services?
            </h3>
            <div className="space-y-4">
              {[
                'Personalized attention to every detail',
                'Available 24/7 for your convenience',
                'Expertly trained and multilingual staff',
                'Complimentary for all resort guests',
                'Customizable to your preferences'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button 
                onClick={() => handleServiceInquiry('Custom Service Package')}
                className="bg-gray-900 hover:bg-amber-600 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Customize Your Experience
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-200 to-amber-300 rounded-3xl opacity-20 transform rotate-45"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-30"></div>
            
            <Card className="relative bg-white border-0 shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mb-6">
                    <CheckCircle className="w-10 h-10 text-amber-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    100% Satisfaction
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our commitment to excellence means your complete satisfaction is guaranteed. 
                    We go above and beyond to exceed your expectations.
                  </p>
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-medium inline-block">
                    Guest Satisfaction: 99.8%
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;