import React, { useState, useRef, useEffect } from 'react';
import { 
  Heart, Share2, MapPin, Expand, 
  Phone, Mail, CheckCircle, 
  Bookmark, ArrowLeft, ArrowRight, 
  Calendar, Users, Check 
} from 'lucide-react';

const UltimatePropertyDetails = ({ rental }) => {
  const {
    images,
    title,
    description,
    specs,
    amenities,
    features,
    agent,
    location,
    price,
    agent: {
      name,
      role,
      phone,
      email,
      avatar,
  } }= rental;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const imageContainerRef = useRef(null);

  // 360-degree view simulation
  const [is360View, setIs360View] = useState(false);

  // New state for tour booking
  const [showTourBooking, setShowTourBooking] = useState(false);
  const [tourBookingStep, setTourBookingStep] = useState(1);
  const [tourBookingData, setTourBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 1
  });

  // Interactive image gallery with smooth scrolling
  const scrollToImage = (index) => {
    if (imageContainerRef.current) {
      const imageWidth = imageContainerRef.current.children[0].offsetWidth;
      imageContainerRef.current.scrollTo({
        left: index * imageWidth,
        behavior: 'smooth'
      });
      setCurrentImageIndex(index);
    }
  };

  // Generate available dates
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }));
      }
    }
    return dates;
  };

  // Available time slots
  const availableTimes = [
    '9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM', '5:00 PM'
  ];

  // Handle tour booking form inputs
  const handleTourBookingInput = (e) => {
    const { name, value } = e.target;
    setTourBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Submit tour booking
  const handleSubmitTourBooking = (e) => {
    e.preventDefault();
    // Here you would typically send booking data to backend
    console.log('Tour Booking Submitted:', tourBookingData);
    setTourBookingStep(4);
  };

  // Render tour booking modal steps
  const renderTourBookingStep = () => {
    switch(tourBookingStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">Full Name</label>
              <input 
                type="text"
                name="name"
                value={tourBookingData.name}
                onChange={handleTourBookingInput}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">Phone Number</label>
              <input 
                type="tel"
                name="phone"
                value={tourBookingData.phone}
                onChange={handleTourBookingInput}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your contact number"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">Email Address</label>
              <input 
                type="email"
                name="email"
                value={tourBookingData.email}
                onChange={handleTourBookingInput}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <button 
              onClick={() => setTourBookingStep(2)}
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Next: Choose Date
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Calendar className="mr-3 text-blue-500" />
              <h3 className="text-xl font-semibold">Select Tour Date</h3>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {generateAvailableDates().map((date, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setTourBookingData(prev => ({ ...prev, date }));
                    setTourBookingStep(3);
                  }}
                  className={`py-2 rounded-lg transition-colors 
                    ${tourBookingData.date === date 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 hover:bg-blue-100'}`}
                >
                  {date}
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center mb-4">
              <Users className="mr-3 text-blue-500" />
              <h3 className="text-xl font-semibold">Choose Time Slot</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setTourBookingData(prev => ({ ...prev, time }));
                    setTourBookingStep(4);
                  }}
                  className={`py-2 rounded-lg transition-colors 
                    ${tourBookingData.time === time 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 hover:bg-blue-100'}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="text-center space-y-6">
            <Check className="mx-auto text-green-500" size={80} />
            <h3 className="text-2xl font-bold text-gray-800">Tour Booked Successfully!</h3>
            <p className="text-gray-600">
              We'll contact you at {tourBookingData.phone} to confirm your tour on {tourBookingData.date} at {tourBookingData.time}.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <img 
                src={agent.avatar} 
                alt={agent.name} 
                className="w-16 h-16 rounded-full border-2 border-blue-100"
              />
              <div>
                <p className="font-semibold">{agent.name}</p>
                <p className="text-gray-500">Your Tour Guide</p>
              </div>
            </div>
            <button 
              onClick={() => {
                setShowTourBooking(false);
                setTourBookingStep(1);
              }}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 pt-10 ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Existing code remains the same... */}
        
        {/* New Book Tour Section with Modal */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => setShowTourBooking(true)}
            className="flex items-center space-x-2 bg-blue-500 text-white px-10 py-3 rounded-full hover:bg-blue-600 transition-colors text-lg"
          >
            <Calendar className="mr-2" />
            Book Property Tour
          </button>
        </div>

        {/* Tour Booking Modal */}
        {showTourBooking && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
              <button 
                onClick={() => {
                  setShowTourBooking(false);
                  setTourBookingStep(1);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Book Property Tour</h2>
                {tourBookingStep < 4 && (
                  <div className="flex space-x-1">
                    {[1, 2, 3].map(num => (
                      <div 
                        key={num} 
                        className={`h-2 w-2 rounded-full transition-colors 
                          ${tourBookingStep >= num ? 'bg-blue-500' : 'bg-gray-300'}`}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              {renderTourBookingStep()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UltimatePropertyDetails;