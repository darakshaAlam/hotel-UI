import React from 'react';
import { Bed, Eye, Star, Wifi, Coffee } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

const Rooms = () => {
  const handleRoomSelect = (roomId, roomName) => {
    // Mock room selection
    alert(`Selected ${roomName}! (This is a mock implementation)`);
    console.log('Selected room ID:', roomId);
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each room is meticulously designed to provide the perfect blend of comfort, 
            elegance, and breathtaking views for an unforgettable stay.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mockData.rooms.map((room, index) => (
            <Card key={room.id} className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl bg-white ${index === 1 ? 'lg:scale-105' : ''}`}>
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-amber-500 text-white px-3 py-1 text-sm font-medium rounded-full shadow-lg">
                    {room.price}/night
                  </Badge>
                </div>

                {/* Popular Badge for middle room */}
                {index === 1 && (
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-full shadow-lg flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors duration-300">
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {room.description}
                </p>

                {/* Room Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                        {idx === 0 && <Eye className="w-3 h-3 text-amber-600" />}
                        {idx === 1 && <Bed className="w-3 h-3 text-amber-600" />}
                        {idx === 2 && <Coffee className="w-3 h-3 text-amber-600" />}
                        {idx === 3 && <Wifi className="w-3 h-3 text-amber-600" />}
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  onClick={() => handleRoomSelect(room.id, room.name)}
                  className="w-full bg-gray-900 hover:bg-amber-600 text-white py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md"
                >
                  Select This Room
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Need help choosing the perfect room for your stay?
          </p>
          <Button 
            variant="outline"
            size="lg"
            className="border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            onClick={() => alert('Contacting concierge... (Mock implementation)')}
          >
            Speak with Our Concierge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Rooms;