import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CategoryProducts.css'

const CategoryProducts = () => {
    const products = useLoaderData()
    const { img } = products
    console.log(products)
    return (
        <div className='category-product-div mx-40 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8  justify-center'>
            {
                products?.map(product => <div key={product._id} className=" w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-60 w-full' src={product.img} alt={product.name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center font-bold">{product.name}</h2>
                        <p><span className='text-xl font-semibold'>Location:</span>{product.location}</p>
                        <p><span className='text-xl font-semibold'>Original Price:</span> {product.original_price}</p>
                        <p><span className='text-xl font-semibold'>Resale Price:</span>{product.resale_price}</p>
                        <p><span className='text-xl font-semibold'>Years Of Use:</span>{product.years_of_use}</p>
                        <p><span className='text-xl font-semibold'>Sellers Name:</span>{product.sellers_name}</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-primary ">Book Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CategoryProducts;