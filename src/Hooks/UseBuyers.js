import { useEffect, useState } from 'react';

const UseBuyers = (email) => {


    const [isBuyers, setIsBuyers] = useState(false)
    const [isBuyersLoading, setisBuyersLoading] = useState(true)
    useEffect(() => {
        fetch(`https://clothes-hub-server.vercel.app/users/buyers/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsBuyers(data.isBuyers)
                setisBuyersLoading(false)
            })
    }, [email])
    return [isBuyers, isBuyersLoading]


};

export default UseBuyers;