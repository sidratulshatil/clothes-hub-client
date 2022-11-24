import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <Category></Category>
        </div>
    );
};

export default Home;