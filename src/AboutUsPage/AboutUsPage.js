import React from 'react';
import BlackNavBar from '../mainPage/BlackNavBar';
import Footer from '../mainPage/Footer';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Bar */}
      <BlackNavBar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Connecting Renters and Landlords Seamlessly
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our mission is to transform the rental experience by creating a transparent,
            efficient, and user-friendly platform that empowers both renters and property owners.
          </p>
        </div>
      </div>

      {/* Platform Introduction */}
      <div className="max-w-4xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to simplify the rental process, our platform bridges the
              gap between tenants and landlords. We understand the challenges of finding the
              perfect rental or managing property, and we've created a solution that makes
              the entire experience smoother, more transparent, and more efficient.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/2.jpg"
              alt="Rental Platform"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Key Features */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Key Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Verified Rental Listings",
                description: "Every listing goes through a comprehensive verification process to ensure authenticity and quality."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Transparent Pricing",
                description: "Clear, upfront pricing with no hidden fees. Know exactly what you're paying before committing."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Easy-to-Use Interface",
                description: "Intuitive design that makes searching, listing, and managing rentals a breeze."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "AI-Based Recommendations",
                description: "Smart algorithms that match you with the most suitable rentals based on your preferences."
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 bg-gray-50 p-6 rounded-lg">
                <div className="flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We're here to help! Reach out to us for any questions, support, or feedback.
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="mailto:support@rentalplatform.com" 
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Email Support
            </a>
            <a 
              href="/contact" 
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Contact Form
            </a>
          </div>
          <div className="mt-8 text-gray-600">
            <p>Support Email: support@rentalplatform.com</p>
            <p>Phone: (555) 123-4567</p>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUsPage;
