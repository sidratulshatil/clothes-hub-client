import React from 'react';
import banner from '../../../assets/w-banner.webp'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <img className='banner' src={banner} alt="" />
            <div className='banner-text'>
                <h1>Find Your Affordable Clothes Here</h1>
                <p className='text-2xl'>Largest Online 2nd Hand Clothes MarketPlace</p>
            </div>
        </div>
    );
};

export default Banner;