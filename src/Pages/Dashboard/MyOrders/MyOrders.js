import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            return data
        }
    })

    return (
        <div className=''>
            {
                orders.map(order => <div className="mx-auto my-4 card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src={order.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="justify-center text-2xl font-bold">{order.item}</h2>
                        <p>Price: {order.price}</p>
                        <div className="card-actions justify-center">

                            {
                                order.price && !order.paid && <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-primary'>Pay</button></Link>
                            }
                            {
                                order.paid && <span className='text-primary'>Paid</span>
                            }
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyOrders;