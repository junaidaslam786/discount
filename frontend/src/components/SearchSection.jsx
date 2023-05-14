import React from 'react';
import SearchBox from './SearchBox';
import '../assets/styles/SearchSection.css';
import hero1 from '../assets/images/hero1.png';

const SearchSection = () => {
  return (
    <section className="section-container">
      <img
        src={hero1}
        alt="Background"
        className="bg-image"
        height={250}
        width={500}
      />
      <div className="card-container">
        <div className="card-body text-center">
          <h1 className="card-title">
            Search For The Best Discounts And <br /> Offers in Town
          </h1>
        </div>
      </div>
      <div className="search-container">
        <SearchBox className="search-box" />
      </div>
    </section>
  );
};

export default SearchSection;
