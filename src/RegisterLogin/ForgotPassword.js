import React, { useState } from 'react';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
    console.log('Password Reset Request:', email);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              {!isSubmitted ? 'Forgot Password' : 'Check Your Email'}
            </h2>
            <p className="text-white/80 mt-2">
              {!isSubmitted 
                ? 'Reset your account password' 
                : 'Password reset instructions sent'}
            </p>
          </div>

          {/* Content Area */}
          <div className="p-6 space-y-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="relative">
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-3 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition font-semibold"
                >
                  Send Reset Instructions
                </button>

                {/* Login Redirect */}
                <p className="text-center text-gray-600">
                  Remember your password? <a href="/login" className="text-blue-600 hover:underline">Back to Login</a>
                </p>
              </form>
            ) : (
              <div className="text-center space-y-4">
                {/* Success State */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                <h3 className="text-2xl font-semibold text-gray-800">
                  Password Reset Sent
                </h3>

                <p className="text-gray-600">
                  We've sent a password reset link to <strong>{email}</strong>. 
                  Check your email and follow the instructions to reset your password.
                </p>

                <div className="flex justify-center space-x-4">
                  <button 
                    onClick={handleReset}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Try Another Email
                  </button>
                  <a 
                    href="/login"
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                  >
                    Back to Login
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Additional Security Note */}
        <div className="text-center text-white mt-4 px-4">
          <p className="text-sm">
            If you didn't request a password reset, please ignore this email or contact support if you have concerns.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;