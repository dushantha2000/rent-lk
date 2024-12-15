import React, { useState } from 'react';
import { Star, Quote, UserCircle2 } from 'lucide-react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown Luxury Apartment",
      rating: 5,
      quote: "Finding my dream apartment was incredibly easy with this platform. The Downtown Luxury Apartment exceeded all my expectations, and the team was supportive throughout the entire process.",
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      location: "Lakeview Family Home",
      rating: 5,
      quote: "As a growing family, we needed the perfect home. The Spacious Family Home in Lakeview is exactly what we were looking for. The amenities and location are perfect for our lifestyle.",
      avatar: "/api/placeholder/100/100"
    },
    {
      id: 3,
      name: "Emily Chen",
      location: "Suburban Townhouse",
      rating: 4,
      quote: "The property management team was professional and responsive. They helped me find a beautiful townhouse that met all my needs, from location to budget.",
      avatar: "/api/placeholder/100/100"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`inline-block ${
          index < rating ? 'text-yellow-500' : 'text-gray-300'
        }`} 
        fill={index < rating ? '#FFC107' : 'none'}
      />
    ));
  };

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real stories from satisfied customers who found their perfect home
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden">
          <div className="relative p-8">
            {/* Navigation Buttons */}
            <button 
              onClick={handlePrevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
            >
              &#10094;
            </button>
            <button 
              onClick={handleNextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
            >
              &#10095;
            </button>

            {/* Quote Icon */}
            <Quote 
              className="absolute top-4 left-4 text-blue-100" 
              size={64} 
            />

            <div className="text-center relative z-10">
              {/* Stars Rating */}
              <div className="flex justify-center mb-4">
                {renderStars(currentTestimonial.rating)}
              </div>

              {/* Testimonial Quote */}
              <p className="text-xl text-gray-700 italic mb-6">
                "{currentTestimonial.quote}"
              </p>

              {/* Customer Details */}
              <div className="flex items-center justify-center space-x-4">
                <UserCircle2 
                  className="text-blue-500" 
                  size={48} 
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center pb-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`h-2 w-2 rounded-full ${
                  index === activeTestimonial 
                    ? 'bg-blue-500' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;