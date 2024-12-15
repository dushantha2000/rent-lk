import React from 'react';
import { MapPin } from 'lucide-react';

const SearchBar = () => {
  const budgetRanges = [
    { value: '', label: 'Budget Range' },
    { value: 'under-25', label: 'Under 25,000' },
    { value: '25-50', label: '25,000 - 50,000' },
    { value: 'above-50', label: 'Above 50,000' }
  ];

  return (
    <div className="bg-white p-2 rounded-full shadow-lg flex items-center max-w-4xl w-full">
      {/* Location Search */}
      <div className="flex-1 flex items-center px-4">
        <MapPin className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Where do you want to rent?"
          className="w-full py-2 focus:outline-none"
          aria-label="Location search"
        />
      </div>

      {/* Budget Filter */}
      <div className="border-l px-4">
        <select 
          className="py-2 focus:outline-none"
          aria-label="Budget range"
        >
          {budgetRanges.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Search Button */}
      <button 
        className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
        aria-label="Search rentals"
      >
        Find Rentals
      </button>
    </div>
  );
};

export default SearchBar;