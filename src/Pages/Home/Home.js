import React, { useEffect, useState } from 'react';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    const [advertisedItems, setadvertisedItems] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/advertisements`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setadvertisedItems(data)
            })
    }, [])
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <h1 className='text-2xl font-bold text-blue-500 my-3'>Products Category</h1>
            <Category></Category>
            {advertisedItems.length > 0 &&
                <div>
                    <h1 className='text-2xl font-bold text-blue-500 my-3'>Advertised Items</h1>
                    {
                        advertisedItems?.map(advertisedItem => <div key={advertisedItem._id} className=" w-96 bg-base-100 shadow-xl">
                            <figure><img className='h-60 w-full' src={advertisedItem.img} alt={advertisedItem.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center font-bold">{advertisedItem.name}</h2>
                                <p><span className='text-xl font-semibold'>Location:</span>{advertisedItem.location}</p>
                                <p><span className='text-xl font-semibold'>Original Price:</span> {advertisedItem.original_price}</p>
                                <p><span className='text-xl font-semibold'>Resale Price:</span>{advertisedItem.resale_price}</p>
                                <p><span className='text-xl font-semibold'>Years Of Use:</span>{advertisedItem.years_of_use}</p>
                                <p><span className='text-xl font-semibold '>Sellers Name:</span>{advertisedItem.sellers_name} {advertisedItem.verified && <span className='bg-blue-500 text-white p-2 rounded-lg'>☑</span>} </p>
                                <p><span className='text-xl font-semibold '>Post Date:</span>{advertisedItem.date}  </p>
                                <div className="card-actions justify-center">
                                    {advertisedItem.verified && <label htmlFor="booking-modal" className="btn btn-primary "  >Book Now</label>}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            }
            <div>
                <h1 className='text-2xl font-bold text-blue-500 my-3'>Contact Us</h1>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;