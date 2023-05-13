import React from 'react';
import '../assets/styles/SearchSection.css'
import hero1 from '../assets/hero1.png'
import SearchBox from './SearchBox'

const SearchSection = () => {
  // should include src, alt, text, and placeholder for the image, text, and search bar
  return (
    <div className="image-section">
      <img src={hero1} alt='hero' className="image-section__img" />
      <div className="image-section__overlay">
        <h1 className="image-section__text">Search For The Best Discounts <br/> And Offers in Town.</h1>
        <form className="image-section__form">
          <SearchBox />
        </form>
      </div>
    </div>
  );
}

export default SearchSection;
