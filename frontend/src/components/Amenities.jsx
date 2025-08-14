import React, { useState, useEffect } from 'react';
import { Waves, Dumbbell, Sparkles, UtensilsCrossed, Car, Wifi } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { mockData } from '../mock';

const iconMap = {
  Waves,
  Dumbbell,
  Sparkles,
  UtensilsCrossed,
  Car,
  Wifi
};

const Amenities = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    // Staggered animation for amenity cards
    mockData.amenities.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, index * 200);
    });
  }, []);

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Indulge in our carefully curated selection of premium facilities and services, 
            designed to elevate every moment of your luxury retreat.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockData.amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon];
            const isVisible = visibleItems.includes(index);
            
            return (
              <Card 
                key={index}
                className={`group bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
                }`}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-amber-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {amenity.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {amenity.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto group-hover:w-16 transition-all duration-500"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Highlight */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-amber-500 to-amber-600 border-0 rounded-3xl overflow-hidden shadow-2xl">
            <CardContent className="p-12 text-center text-white">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Experience Unmatched Luxury
              </h3>
              <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Our amenities are more than facilities – they're gateways to extraordinary experiences 
                that will create memories to last a lifetime.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-sm font-medium">24/7 Service</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-sm font-medium">Award Winning</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-sm font-medium">Exclusive Access</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Amenities;