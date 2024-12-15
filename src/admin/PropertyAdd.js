import React, { useState } from 'react';
import { Save, Plus, Trash2 } from 'lucide-react';

const PropertyAdd = () => {
  const [property, setProperty] = useState({
    id: null,
    category: '',
    images: [],
    available: '',
    title: '',
    location: '',
    price: '',
    period: 'per month',
    specs: ['', '', ''],
    amenities: [''],
    deposit: '',
    furnished: '',
    description: '',
    features: [''],
    agent: {
      name: '',
      role: '',
      phone: '',
      email: '',
      avatar: ''
    },
    isHighlighted: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle nested agent fields
    if (name.startsWith('agent.')) {
      const agentField = name.split('.')[1];
      setProperty(prev => ({
        ...prev,
        agent: {
          ...prev.agent,
          [agentField]: value
        }
      }));
      return;
    }

    // Handle other fields
    setProperty(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setProperty(prev => {
      const updatedArray = [...prev[field]];
      updatedArray[index] = value;
      return { ...prev, [field]: updatedArray };
    });
  };

  const addArrayItem = (field) => {
    setProperty(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setProperty(prev => {
      const updatedArray = prev[field].filter((_, i) => i !== index);
      return { ...prev, [field]: updatedArray };
    });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    
    setProperty(prev => ({
      ...prev,
      images: [...prev.images, ...imageUrls]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and submit property data
    console.log('Property Submitted:', property);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
        Property Management Form
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Property Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={property.title}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              placeholder="Enter property title"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Category</label>
            <select
              name="category"
              value={property.category}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              required
            >
              <option value="">Select Category</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
          </div>
        </div>

        {/* Location and Pricing */}
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              name="location"
              value={property.location}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              placeholder="Enter property location"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <div className="flex">
              <input
                type="text"
                name="price"
                value={property.price}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-l-md shadow-sm py-2 px-3"
                placeholder="Enter price"
                required
              />
              <select
                name="period"
                value={property.period}
                onChange={handleInputChange}
                className="mt-1 border border-l-0 border-gray-300 rounded-r-md shadow-sm py-2 px-3"
              >
                <option value="per month">per month</option>
                <option value="per week">per week</option>
                <option value="per year">per year</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Deposit</label>
            <input
              type="text"
              name="deposit"
              value={property.deposit}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              placeholder="Enter deposit amount"
            />
          </div>
        </div>

        {/* Specifications */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Specifications</label>
          <div className="space-y-2">
            {property.specs.map((spec, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={spec}
                  onChange={(e) => handleArrayChange('specs', index, e.target.value)}
                  className="flex-1 border border-gray-300 rounded-md shadow-sm py-2 px-3"
                  placeholder={`Specification ${index + 1}`}
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('specs', index)}
                    className="text-red-500 hover:bg-red-50 p-2 rounded-full"
                  >
                    <Trash2 size={16} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('specs')}
              className="text-blue-500 hover:bg-blue-50 p-2 rounded-full flex items-center"
            >
              <Plus size={16} className="mr-2" /> Add Specification
            </button>
          </div>
        </div>
        {/* Description upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={property.description}
            onChange={handleInputChange}
            rows={4}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
            placeholder="Enter property description"
          />
        </div>

        {/* Images Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Property Images</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
          />
          {property.images.length > 0 && (
            <div className="mt-2 flex space-x-2 overflow-x-auto">
              {property.images.map((image, index) => (
                <img 
                  key={index} 
                  src={image} 
                  alt={`Property ${index + 1}`} 
                  className="h-20 w-20 object-cover rounded-md"
                />
              ))}
            </div>
          )}
        </div>

        {/* Agent Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent Name</label>
            <input
              type="text"
              name="agent.name"
              value={property.agent.name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              placeholder="Enter agent name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Agent Phone</label>
            <input
              type="tel"
              name="agent.phone"
              value={property.agent.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              placeholder="Enter agent phone number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="tel"
              name="agent.phone"
              value={property.agent.email}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              placeholder="Enter agent phone number"
            />
          </div>
        </div>

        

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition flex items-center"
          >
            <Save size={20} className="mr-2" />Save Property
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyAdd;