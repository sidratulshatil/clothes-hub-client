import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const [myProducts, setMyproducts] = useState([])
    useEffect(() => {
        fetch(`https://clothes-hub-server.vercel.app/myproducts`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMyproducts(data)
            })
    }, [myProducts])
    // console.log(myProducts)
    const handleAddAdvertisement = (product) => {
        fetch(`https://clothes-hub-server.vercel.app/advertisements`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                handleUpdateAdvertise(product._id)
                toast.success('Successfully Advertised')
            })

    }
    const handleUpdateAdvertise = (id) => {
        fetch(`https://clothes-hub-server.vercel.app/myproducts/${id}`, {
            method: "PUT",
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)


            })
    }
    const handleDelete = (id) => {
        console.log(id)
        fetch(`https://clothes-hub-server.vercel.app/myproducts/${id}`, {
            method: "DELETE",
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                totalDelete(id)
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`Product deleted successfully`)

                }

            })
    }
    const totalDelete = (id) => {
        fetch(`https://clothes-hub-server.vercel.app/bookings/product/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className='category-product-div mx-40 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-8  justify-center'>
            {
                myProducts?.map(myProduct => myProduct.email === `${user?.email}` && <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={myProduct.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title justify-center">{myProduct.category_name}</h2>
                        <p className='text-2xl font-bold'>Resale Price: <span className='text-xl font-bold text-red-700'>{myProduct.resale_price}</span></p>
                        <div className="card-actions justify-center">
                            {
                                myProduct?.advertised ? <><button disabled className="btn btn-success">Advertised</button></> : <><button onClick={() => handleAddAdvertisement(myProduct)} className="btn btn-primary">Advertise</button></>
                            }
                            <button onClick={() => handleDelete(myProduct._id)} className="btn btn-error text-white font-bold">Delete Product</button>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default MyProducts;