import React from 'react';
import { Home, Building2, Bed, Key } from 'lucide-react';

const CategoryFilter = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    { id: 'all', label: 'All Rentals', icon: Home },
    { id: 'apartment', label: 'Apartments', icon: Building2 },
    { id: 'room', label: 'Single Rooms', icon: Bed },
    { id: 'shortterm', label: 'Short Term', icon: Key },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {categories.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setActiveCategory(id)}
          className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all transform hover:scale-105
            ${activeCategory === id 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-gray-50'}`}
          aria-pressed={activeCategory === id}
          aria-label={`Filter by ${label}`}
        >
          <Icon size={20} />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;