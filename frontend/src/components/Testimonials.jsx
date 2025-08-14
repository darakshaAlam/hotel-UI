import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { mockData } from '../mock';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % mockData.testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating 
            ? 'text-amber-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Guest Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover what our guests say about their unforgettable stays at Azure Paradise Resort. 
            Their stories inspire us to continue delivering exceptional experiences.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-white border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12 text-center relative">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-10">
                <Quote className="w-24 h-24 text-amber-500" />
              </div>
              
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {renderStars(mockData.testimonials[currentTestimonial].rating)}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-2xl lg:text-3xl font-light text-gray-800 leading-relaxed mb-8 relative z-10">
                "{mockData.testimonials[currentTestimonial].comment}"
              </blockquote>

              {/* Guest Info */}
              <div className="flex items-center justify-center gap-4">
                <Avatar className="w-16 h-16 border-4 border-amber-100">
                  <AvatarImage 
                    src={mockData.testimonials[currentTestimonial].avatar} 
                    alt={mockData.testimonials[currentTestimonial].name}
                  />
                  <AvatarFallback>
                    {mockData.testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900">
                    {mockData.testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-amber-600 font-medium">
                    {mockData.testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {mockData.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockData.testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 border-0 shadow-lg hover:shadow-xl rounded-2xl ${
                index === currentTestimonial 
                  ? 'ring-2 ring-amber-500 shadow-xl scale-105' 
                  : 'hover:scale-105'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Comment Preview */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  "{testimonial.comment.substring(0, 120)}..."
                </p>

                {/* Guest Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      {testimonial.name}
                    </h5>
                    <p className="text-amber-600 text-xs">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-full px-8 py-4 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">4.9/5</div>
              <div className="text-sm text-gray-600">Overall Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">2,500+</div>
              <div className="text-sm text-gray-600">Happy Guests</div>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">99.8%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;