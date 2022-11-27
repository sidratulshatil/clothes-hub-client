import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyWishlists = () => {
    const { user } = useContext(AuthContext)
    const [myProducts, setMyproducts] = useState([])
    // console.log(myProducts)
    useEffect(() => {
        fetch(`http://localhost:5000/mywishlists`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyproducts(data)
            })
    }, [myProducts])
    return (
        <div className='category-product-div mx-40 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8  justify-center'>
            {
                myProducts?.map(myProduct => <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={myProduct.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">{myProduct.category_name}</h2>
                        <p className='text-2xl font-bold'>Resale Price: <span className='text-xl font-bold text-red-700'>{myProduct.resale_price}</span></p>
                        <div className="card-actions justify-center">

                            <button className="btn btn-primary text-white font-bold">Pay</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyWishlists;