import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategories] = useState(null)
    // console.log(categories)
    useEffect(() => {
        fetch(`http://localhost:5000/category`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
            })
    }, [])
    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 my-8 mx-12'>
            {
                categories?.map(category => <div key={category._id} className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title justify-center">{category.category_name}</h2>
                        <p>Here You Find Different Kind Of {category.category_name}</p>
                        <div className="card-actions justify-center">
                            <Link to={`/category/${category.No}`}><button className="btn btn-primary ">Show All Products</button></Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Category;