import React, { useState } from 'react';
import HeroSection from '../mainPage/HeroSection';
import CategoryFilter from '../mainPage/CategoryFilter';
import PropertyCard from '../mainPage/PropertyCard';
import Footer from '../mainPage/Footer';
import ChatBox from '../mainPage/ChatBox';
import Testimonials from '../mainPage/Testimonials';
import AboutUs from '../mainPage/AboutUs';
import StatsBar from '../mainPage/StatsBar';




// The existing rentals array remains the same as in the original file
export const rentals = [
  {
    id: 1,
    category: "apartment",
    images: ["/images/2.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"],
    available: "Available Now",
    title: "Downtown Luxury Apartment",
    location: "Central Business District",
    price: "$11,500",
    period: "per month",
    specs: ["2 Beds", "2 Baths", "1,200 sqft"],
    amenities: ["Parking", "Swimming Pool", "Fitness Center", "Rooftop Terrace", "24/7 Security"],
    deposit: "$3,000",
    furnished: "Fully Furnished",
    description: "Experience urban living at its finest in this stunning modern apartment.",
    features: [
      "Floor-to-ceiling windows",
      "State-of-the-art kitchen appliances",
      "Smart home technology",
      "Central air conditioning",
      "In-unit laundry",
      "Private balcony",
      "High-speed internet ready",
    ],
    agent: {
      name: "Jane Smith",
      role: "Senior Real Estate Consultant",
      phone: "+1 (555) 123-4567",
      email: "jane.smith@realty.com",
      avatar: "/images/1.jpg",
    },
    isHighlighted: true,
  },
  {
    id: 2,
    category: "house",
    images: ["/images/8.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
    available: "Available Now",
    title: "Spacious Family Home",
    location: "Lakeview Suburbs",
    price: "$8,000",
    period: "per month",
    specs: ["3 Beds", "2 Baths", "1,800 sqft"],
    amenities: ["Parking", "Backyard", "Fireplace", "Swimming Pool"],
    deposit: "$2,500",
    furnished: "Partially Furnished",
    description: "A beautiful family home located in the quiet Lakeview Suburbs with great amenities.",
    features: [
      "Spacious backyard",
      "Hardwood floors",
      "Fireplace",
      "Granite countertops",
      "Large windows",
      "Walk-in closet",
    ],
    agent: {
      name: "John Doe",
      role: "Real Estate Agent",
      phone: "+1 (555) 987-6543",
      email: "john.doe@realty.com",
      avatar: "/api/placeholder/100/100",
    },
    isHighlighted: false,
  },
  {
    id: 3,
    category: "house",
    images: ["/images/9.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
    available: "Available Now",
    title: "Spacious Family Home",
    location: "Lakeview Suburbs",
    price: "$8,000",
    period: "per month",
    specs: ["3 Beds", "2 Baths", "1,800 sqft"],
    amenities: ["Parking", "Backyard", "Fireplace", "Swimming Pool"],
    deposit: "$2,500",
    furnished: "Partially Furnished",
    description: "A beautiful family home located in the quiet Lakeview Suburbs with great amenities.",
    features: [
      "Spacious backyard",
      "Hardwood floors",
      "Fireplace",
      "Granite countertops",
      "Large windows",
      "Walk-in closet",
    ],
    agent: {
      name: "John Doe",
      role: "Real Estate Agent",
      phone: "+1 (555) 987-6543",
      email: "john.doe@realty.com",
      avatar: "/api/placeholder/100/100",
    },
    isHighlighted: false,
  },
  {
    id: 4,
    category: "house",
    images: ["/images/9.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
    available: "Available Now",
    title: "Spacious Family Home",
    location: "Lakeview Suburbs",
    price: "$8,000",
    period: "per month",
    specs: ["3 Beds", "2 Baths", "1,800 sqft"],
    amenities: ["Parking", "Backyard", "Fireplace", "Swimming Pool"],
    deposit: "$2,500",
    furnished: "Partially Furnished",
    description: "A beautiful family home located in the quiet Lakeview Suburbs with great amenities.",
    features: [
      "Spacious backyard",
      "Hardwood floors",
      "Fireplace",
      "Granite countertops",
      "Large windows",
      "Walk-in closet",
    ],
    agent: {
      name: "John Doe",
      role: "Real Estate Agent",
      phone: "+1 (555) 987-6543",
      email: "john.doe@realty.com",
      avatar: "/api/placeholder/100/100",
    },
    isHighlighted: false,
  },
  {
    id: 5,
    category: "house",
    images: ["/images/9.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
    available: "Available Now",
    title: "Spacious Family Home",
    location: "Lakeview Suburbs",
    price: "$8,000",
    period: "per month",
    specs: ["3 Beds", "2 Baths", "1,800 sqft"],
    amenities: ["Parking", "Backyard", "Fireplace", "Swimming Pool"],
    deposit: "$2,500",
    furnished: "Partially Furnished",
    description: "A beautiful family home located in the quiet Lakeview Suburbs with great amenities.",
    features: [
      "Spacious backyard",
      "Hardwood floors",
      "Fireplace",
      "Granite countertops",
      "Large windows",
      "Walk-in closet",
    ],
    agent: {
      name: "John Doe",
      role: "Real Estate Agent",
      phone: "+1 (555) 987-6543",
      email: "john.doe@realty.com",
      avatar: "/api/placeholder/100/100",
    },
    isHighlighted: false,
  },
  {
    id: 6,
    category: "house",
    images: ["/images/9.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
    available: "Available Now",
    title: "Spacious Family Home",
    location: "Lakeview Suburbs",
    price: "$8,000",
    period: "per month",
    specs: ["3 Beds", "2 Baths", "1,800 sqft"],
    amenities: ["Parking", "Backyard", "Fireplace", "Swimming Pool"],
    deposit: "$2,500",
    furnished: "Partially Furnished",
    description: "A beautiful family home located in the quiet Lakeview Suburbs with great amenities.",
    features: [
      "Spacious backyard",
      "Hardwood floors",
      "Fireplace",
      "Granite countertops",
      "Large windows",
      "Walk-in closet",
    ],
    agent: {
      name: "John Doe",
      role: "Real Estate Agent",
      phone: "+1 (555) 987-6543",
      email: "john.doe@realty.com",
      avatar: "/api/placeholder/100/100",
    },
    isHighlighted: false,
  },
  {
    id: 7,
    category: "house",
    images: ["/images/9.jpg", "/images/6.jpg", "/images/7.jpg", "/images/8.jpg"],
    available: "Available Now",
    title: "Spacious Family Home",
    location: "Lakeview Suburbs",
    price: "$8,000",
    period: "per month",
    specs: ["3 Beds", "2 Baths", "1,800 sqft"],
    amenities: ["Parking", "Backyard", "Fireplace", "Swimming Pool"],
    deposit: "$2,500",
    furnished: "Partially Furnished",
    description: "A beautiful family home located in the quiet Lakeview Suburbs with great amenities.",
    features: [
      "Spacious backyard",
      "Hardwood floors",
      "Fireplace",
      "Granite countertops",
      "Large windows",
      "Walk-in closet",
    ],
    agent: {
      name: "John Doe",
      role: "Real Estate Agent",
      phone: "+1 (555) 987-6543",
      email: "john.doe@realty.com",
      avatar: "/api/placeholder/100/100",
    },
    isHighlighted: false,
  },
  // More rental properties can be added here...
];
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 6;

  // Filter rentals by category
  const filteredRentals = rentals.filter(
    (rental) => activeCategory === 'all' || rental.category === activeCategory
  );

  // Paginate the filtered rentals
  const paginatedRentals = filteredRentals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE, 
    currentPage * ITEMS_PER_PAGE
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredRentals.length / ITEMS_PER_PAGE);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <HeroSection isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <CategoryFilter 
          activeCategory={activeCategory} 
          setActiveCategory={(category) => {
            setActiveCategory(category);
            setCurrentPage(1); // Reset to first page when category changes
          }} 
        />
        
        {/* Rental Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedRentals.map((rental) => (
            <PropertyCard 
              key={rental.id} 
              rental={rental} 
              isHighlighted={rental.isHighlighted} 
            />
          ))}
        </div>

        {/* No Properties Found Message */}
        {filteredRentals.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">No properties found in this category.</h3>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredRentals.length > ITEMS_PER_PAGE && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`
                  px-4 py-2 rounded-md 
                  ${currentPage === index + 1 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                `}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </main>
      {/*Status Bar */}
      <StatsBar />

      <Testimonials/>
      <AboutUs/>
      <ChatBox />
      <Footer />
    </div>
  );
};

export default HomePage;