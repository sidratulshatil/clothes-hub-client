import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-toastify';

const AllBuyers = () => {
    const url = `http://localhost:5000/users`

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(url)
            const data = await res.json()
            // console.log(data)
            return data
        }
    })
    const deleteUser = (user) => {
        fetch(`http://localhost:5000/users/${user}`, {
            method: "DELETE",
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success(`User deleted successfully`)
                    refetch()
                }

            })

    }
    const handleVerify = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "PUT",
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('verified Successfully')
                refetch()
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => user.type === "Buyers" && <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role !== "admin" && <button onClick={() => deleteUser(user._id)} className='btn btn-xs btn-warning text-white font-bold'>Delete</button>}</td>
                                <td>{!user.verified ? <><button onClick={() => handleVerify(user._id)} className='btn btn-xs btn-warning text-white font-bold'>Verify</button></> : <><button className='btn btn-xs bg-green-500'>Verified</button></>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;