import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './CategoryProducts.css'
import { AiOutlineCheck } from "react-icons/ai";
import BookingModal from './BookingModal/BookingModal';
import { AuthContext } from '../../../contexts/AuthProvider';
import { toast } from 'react-toastify';

const CategoryProducts = () => {
    const products = useLoaderData()
    const { user } = useContext(AuthContext)
    const [item, setItem] = useState({})
    const [currentUser, setCurrentUser] = useState({})
    const { img } = products
    console.log(currentUser)

    useEffect(() => {
        fetch(`https://clothes-hub-server.vercel.app/users/type/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setCurrentUser(data)
            })
    }, [])
    const addToWish = (product) => {
        fetch(`https://clothes-hub-server.vercel.app/mywishlists`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)

        })
            .then(res => res.json())
            .then(data => {
                toast.success('Added To Wishlists')

            })
    }

    return (
        <div className='category-product-div mx-40 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8  justify-center'>
            {
                products?.map(product => !product.paid && <div key={product._id} className=" w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60 w-full' src={product.img} alt={product.name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-bold">{product.name}</h2>
                        <p><span className='text-xl font-semibold'>Location:</span>{product.location}</p>
                        <p><span className='text-xl font-semibold'>Original Price:</span> {product.original_price}</p>
                        <p><span className='text-xl font-semibold'>Resale Price:</span>{product.resale_price}</p>
                        <p><span className='text-xl font-semibold'>Years Of Use:</span>{product.years_of_use}</p>
                        <p><span className='text-xl font-semibold '>Sellers Name:</span>{product.sellers_name} {product.verified && <span className='bg-blue-500 text-white p-2 rounded-lg'>☑</span>} </p>
                        <p><span className='text-xl font-semibold '>Post Date:</span>{product.date}  </p>
                        <div className="card-actions justify-center">
                            {product.verified && currentUser.type === 'Buyers' && <label htmlFor="booking-modal" className="btn btn-primary " onClick={() => setItem(product)} >Book Now</label>}
                            {currentUser.type === 'Buyers' && <button className="btn btn-primary " onClick={() => addToWish(product)} >Add To Wishlist</button>}
                        </div>
                    </div>
                </div>)
            }
            <BookingModal
                item={item}
                user={user}
            ></BookingModal>

        </div>
    );
};

export default CategoryProducts;