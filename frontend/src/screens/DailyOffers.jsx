import React from 'react'
import data from '../data.json';
import SingleDeal from '../components/SingleDeal';
import '../assets/styles/DailyOffers.css'

const DailyOffers = () => {
    return (
        <div className='card-container'>
          {data.map((deal, index) => (
            <SingleDeal key={index} deal={deal} />
          ))}
        </div>
      );
}

export default DailyOffers