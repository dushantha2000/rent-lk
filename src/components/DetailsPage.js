import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlackNavBar from '../mainPage/BlackNavBar';
import Details from '../mainPage/Details';
import Footer from '../mainPage/Footer';
import SearchBar from '../mainPage/SearchBar';
import ChatBox from '../mainPage/ChatBox';


// Assuming `rentals` is imported or available globally
import { rentals } from '../components/HomePage';

export default function DetailsPage() {
  const { id } = useParams(); // Get the ID from the URL
  const [rental, setRental] = useState(null);

  useEffect(() => {
    // Fetch the rental based on the `id`
    const foundRental = rentals.find(rental => rental.id === parseInt(id));
    setRental(foundRental);
  }, [id]);

  return (
    <>
      {/* Navbar */}
      <BlackNavBar />

      {/* Search Bar */}
      <div className='relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center pt-4 auto fixed'>
      <SearchBar />

      </div>

      {/* Details Section */}
      {rental ? <Details rental={rental} /> : <p>Loading...</p>} {/* Render Details if rental is found */}

      {/* Footer */}
      <Footer />
       {/*Chat Box */}
    </>
  );
}
