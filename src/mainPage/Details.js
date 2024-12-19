import React, { useState, useRef, useEffect } from 'react';
import { 
  Heart, Share2, MapPin, Expand, 
  Phone, Mail, CheckCircle, 
  Bookmark, ArrowLeft, ArrowRight,
  Calendar, Clock, Users, Check 
} from 'lucide-react';

import { X } from 'lucide-react';


// PropertyTourBooking Sub-Component
const PropertyTourBooking = ({ onBookTour, agent }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 1
  });

  const [availableTimes, setAvailableTimes] = useState([
    '9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM', '5:00 PM'
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const generateNextMonth = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      if (date.getDay() !== 0 && date.getDay() !== 6) {  // Exclude weekends
        dates.push(date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }));
      }
    }
    return dates;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onBookTour(bookingData);
    setStep(4);
  };

  const renderStep = () => {
    switch(step) {
      case 1:
        return (
          <div className="space-y-7">
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Your Full Name
              </label>
              <input 
                type="text"
                name="name"
                value={bookingData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Phone Number
              </label>
              <input 
                type="tel"
                name="phone"
                value={bookingData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your contact number"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700 font-semibold">
                Email Address
              </label>
              <input 
                type="email"
                name="email"
                value={bookingData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <button 
              onClick={() => setStep(2)}
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
              {generateNextMonth().map((date, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setBookingData(prev => ({ ...prev, date }));
                    setStep(3);
                  }}
                  className={`py-2 rounded-lg transition-colors 
                    ${bookingData.date === date 
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
              <Clock className="mr-3 text-blue-500" />
              <h3 className="text-xl font-semibold">Choose Time Slot</h3>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {availableTimes.map((time, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setBookingData(prev => ({ ...prev, time }));
                    setStep(4);
                  }}
                  className={`py-2 rounded-lg transition-colors 
                    ${bookingData.time === time 
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
              We'll contact you at {bookingData.phone} to confirm your tour on {bookingData.date} at {bookingData.time}.
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
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Book Property Tour</h2>
        {step < 4 && (
          <div className="flex space-x-1">
            {[1, 2, 3].map(num => (
              <div 
                key={num} 
                className={`h-2 w-2 rounded-full transition-colors 
                  ${step >= num ? 'bg-blue-500' : 'bg-gray-300'}`}
              ></div>
            ))}
          </div>
        )}
      </div>
      {renderStep()}
    </div>
  );
};

// Main Property Details Component
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
    }
  } = rental;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const imageContainerRef = useRef(null);

  // 360-degree view simulation
  const [is360View, setIs360View] = useState(false);

  // New state for tour booking modal
  const [showTourBooking, setShowTourBooking] = useState(false);

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

  // Handle tour booking submission
  const handleTourBooking = (bookingData) => {
    console.log('Tour Booking Submitted:', bookingData);
    // Here you would typically send the booking data to a backend service
    // For now, we'll just log it and close the modal
    setShowTourBooking(false);
  };

  return (
    <div className="min-h-screen bg-white py-12 pt-10 ">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Interactive Image Gallery */}
        <div className="relative group">
          <div 
            ref={imageContainerRef}
            className="flex overflow-x-hidden space-x-4 rounded-2xl shadow-xl"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {images.map((image, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full"
                style={{ scrollSnapAlign: 'center' }}
              >
                <img 
                  src={image} 
                  alt={`Property view ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

          {/* Gallery Navigation */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button 
              onClick={() => scrollToImage((currentImageIndex - 1 + images.length) % images.length)}
              className="bg-white/50 backdrop-blur-sm p-3 rounded-full hover:bg-white/75 transition-all"
            >
              <ArrowLeft className="text-gray-800" />
            </button>
            <button 
              onClick={() => scrollToImage((currentImageIndex + 1) % images.length)}
              className="bg-white/50 backdrop-blur-sm p-3 rounded-full hover:bg-white/75 transition-all"
            >
              <ArrowRight className="text-gray-800" />
            </button>
          </div>

          {/* Image Interaction Buttons */}
          <div className="absolute top-4 right-4 flex space-x-3">
            <button 
              onClick={() => setIsFavorite(!isFavorite)}
              className={`bg-white/50 backdrop-blur-sm p-3 rounded-full 
                ${isFavorite ? 'text-red-500' : 'text-gray-800'} 
                hover:bg-white/75 transition-all`}
            >
              <Heart className="fill-current" />
            </button>
            <button 
              onClick={() => setIs360View(!is360View)}
              className="bg-white/50 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:bg-white/75 transition-all"
            >
              <Expand />
            </button>
          </div>
        </div>

        {/* Property Details Grid */}
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {/* Property Information */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <div className="flex items-center mb-4 space-x-3">
              <MapPin className="text-blue-600" />
              <span className="text-gray-600">{location}</span>
            </div>
            <p className="text-gray-700 mb-6">{description}</p>

            {/* Features Highlight */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Specs and Pricing */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-semibold">Property Details</h3>
                <span className="text-2xl font-bold text-blue-600">{price}/month</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {specs.map((spec, index) => (
                  <div 
                    key={index} 
                    className="bg-blue-50 text-blue-800 px-3 py-2 rounded-lg text-center"
                  >
                    {spec}
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-4">Amenities</h3>
              <div className="flex flex-wrap gap-2">
                {amenities.map((amenity, index) => (
                  <span 
                    key={index} 
                    className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Book Tour Button */}
        <div className="mt-6 flex justify-evenly">
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
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="relative">
              <button 
                onClick={() => setShowTourBooking(false)}
                className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors"
                >
                  <X className="text-gray-600" size={24} />
                </button>
                
                <PropertyTourBooking 
                  onBookTour={handleTourBooking} 
                  agent={{
                    name: name,
                    avatar: avatar,
                    phone: phone,
                    email: email
                  }} 
                />
              </div>
            </div>
          )}
  
          {/* Agent Contact Card (Optional) */}
          <div className="mt-12 bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center space-x-6">
              <img 
                src={avatar} 
                alt={name} 
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
                <p className="text-gray-600">{role}</p>
                <div className="flex space-x-4 mt-3">
                  <a 
                    href={`tel:${phone}`} 
                    className="flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-100 transition-colors"
                  >
                    <Phone size={18} />
                    <span>{phone}</span>
                  </a>
                  <a 
                    href={`mailto:${email}`} 
                    className="flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-full hover:bg-green-100 transition-colors"
                  >
                    <Mail size={18} />
                    <span>{email}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default UltimatePropertyDetails;
  

  
  
  
  