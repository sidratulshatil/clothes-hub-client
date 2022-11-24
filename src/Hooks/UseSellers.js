import { useEffect, useState } from 'react';

const UseSellers = (email) => {


    const [isSellers, setIsSellers] = useState(false)
    const [isSellersLoading, setisSellersLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/users/sellers/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsSellers(data.isSellers)
                setisSellersLoading(false)
            })
    }, [email])
    return [isSellers, isSellersLoading]


};

export default UseSellers;