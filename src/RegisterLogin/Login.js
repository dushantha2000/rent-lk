import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Login Attempt:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
            <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
            <p className="text-white/80 mt-2">Log in to manage your rentals</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Email Input */}
            <div className="relative">
              <input 
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            {/* Password Input */}
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full p-3 pl-10 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-blue-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    +
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.275 4.057-5.065 7-9.543 7-4.477 0-8.268-2.943-9.543-7z" />
                  )}
                </svg>
              </button>
            </div>

            {/* Forgot Password */}
            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input 
                  type="checkbox"
                  className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Remember me</span>
              </label>
              <a href="/ForgotPassword" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
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

            {/* Login Button */}
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold mt-4"
            >
              Log In
            </button>

            {/* Register Redirect */}
            <p className="text-center mt-4 text-gray-600">
              Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;