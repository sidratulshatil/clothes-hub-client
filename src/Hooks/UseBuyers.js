import { useEffect, useState } from 'react';

const UseBuyers = (email) => {


    const [isBuyers, setIsBuyers] = useState(false)
    const [isBuyersLoading, setisBuyersLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/buyers/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyers(data.isBuyers)
                setisBuyersLoading(false)
            })
    }, [email])
    return [isBuyers, isBuyersLoading]


};

export default UseBuyers;