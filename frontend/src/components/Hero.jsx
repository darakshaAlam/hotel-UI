import React, { useState } from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { mockData } from '../mock';

const Hero = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1'
  });

  const handleBooking = (e) => {
    e.preventDefault();
    // Mock booking submission
    alert('Booking request submitted! (This is a mock implementation)');
    console.log('Booking data:', bookingData);
  };

  const handleInputChange = (field, value) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={mockData.hero.backgroundImage}
          alt="Resort Paradise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="block">{mockData.hero.title}</span>
            <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-amber-300 mt-2">
              {mockData.hero.subtitle}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            {mockData.hero.description}
          </p>
        </div>

        {/* Booking Form */}
        <div id="booking" className="max-w-5xl mx-auto">
          <Card className="bg-white/95 backdrop-blur-md shadow-2xl border-0 rounded-2xl overflow-hidden">
            <form onSubmit={handleBooking} className="p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Reserve Your Paradise
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Check-in */}
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    Check-in
                  </Label>
                  <Input
                    id="checkin"
                    type="date"
                    value={bookingData.checkIn}
                    onChange={(e) => handleInputChange('checkIn', e.target.value)}
                    className="border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                    required
                  />
                </div>

                {/* Check-out */}
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-600" />
                    Check-out
                  </Label>
                  <Input
                    id="checkout"
                    type="date"
                    value={bookingData.checkOut}
                    onChange={(e) => handleInputChange('checkOut', e.target.value)}
                    className="border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg"
                    required
                  />
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Users className="w-4 h-4 text-amber-600" />
                    Guests
                  </Label>
                  <Select value={bookingData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger className="border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Rooms */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    Rooms
                  </Label>
                  <Select value={bookingData.rooms} onValueChange={(value) => handleInputChange('rooms', value)}>
                    <SelectTrigger className="border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5].map(num => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Room' : 'Rooms'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Check Availability
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;