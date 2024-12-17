import React, { useState } from 'react';

const RegistrationPage = () => {
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    addressOrCompany: ''
  });

  const handleUserTypeSelect = (type) => {
    setUserType(type);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registration Data:', { ...formData, userType });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl overflow-hidden w-full max-w-md">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
          <h2 className="text-3xl font-bold text-white">Create Your Account</h2>
          <p className="text-white/80 mt-2">Join our rental community today!</p>
        </div>

        {/* User Type Selection */}
        <div className="p-6">
          {!userType ? (
            <div className="grid grid-cols-2 gap-4 mb-6">
              <button 
                onClick={() => handleUserTypeSelect('renter')}
                className="flex flex-col items-center p-4 border-2 border-blue-500 rounded-lg hover:bg-blue-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-semibold text-blue-800">Renter/Tenant</span>
              </button>
              <button 
                onClick={() => handleUserTypeSelect('landlord')}
                className="flex flex-col items-center p-4 border-2 border-purple-500 rounded-lg hover:bg-purple-50 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-purple-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 4h1m-1 4h1m9-4h1m-1 4h1" />
                </svg>
                <span className="font-semibold text-purple-800">Landlord/Property Owner</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Registration Form */}
              <div className="grid grid-cols-1 gap-4">
                <input 
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input 
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input 
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <input 
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                {userType === 'landlord' && (
                  <input 
                    type="text"
                    name="addressOrCompany"
                    placeholder="Company Name or Address"
                    value={formData.addressOrCompany}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                )}
              </div>

              {/* Social Login */}
              <div className="flex justify-center space-x-4 mt-4">
                <button 
                  type="button"
                  className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" viewBox="0 0 48 48" fill="currentColor">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.305c-1.696 4.788-6.281 8-11.305 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                    <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.011 0-9.258-3.219-10.808-7.654l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.305a12.04 12.04 0 0 1-4.087 5.571h.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                  </svg>
                  Google
                </button>
                <button 
                  type="button"
                  className="flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                  Facebook
                </button>
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold mt-4"
              >
                Create Account
              </button>

              {/* Login Redirect */}
              <p className="text-center mt-4 text-gray-600">
                Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;