import React from "react";
import { Heart, Share2, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function PropertyCard({ rental }) {
  const {
    images,
    title,
    available,
    location,
    price,
    period,
    specs,
    amenities,
    deposit,
    furnished,
    

   }= rental;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
      {/* Property Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button
            className="p-2 bg-white/95 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
            aria-label="Save property"
          >
            <Heart className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
          </button>
          <button
            className="p-2 bg-white/95 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
            aria-label="Share property"
          >
            <Share2 className="h-5 w-5 text-gray-600 hover:text-blue-600 transition-colors" />
          </button>
        </div>

        {/* Availability Badge */}
        <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1 rounded-full text-sm shadow-lg">
          {available}
        </div>
      </div>

      {/* Property Details Section */}
      <div className="p-6 relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
            <p className="text-gray-600 flex items-center">
              <MapPin size={16} className="mr-1 text-blue-500" />
              {location}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-blue-600">
              {price} <span className="text-sm text-gray-500">/{period}</span>
            </p>
          </div>
        </div>

        {/* Specs and Amenities */}
        <div className="text-gray-600">
          <p>{specs.join(' | ')}</p>
          <p>{amenities.join(' | ')}</p>
        </div>

        {/* View Details Button */}
        <Link to={`/details/${rental.id}`} className="flex items-center text-blue-600 hover:text-blue-800 mt-4">
          View Details
          <ChevronRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default PropertyCard;
