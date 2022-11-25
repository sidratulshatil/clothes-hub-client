import React, { useContext } from 'react';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const AddAProduct = () => {
    const { user } = useContext(AuthContext)
    const postDate = new Date().toLocaleDateString()

    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target
        const category_name = form.category_name.value
        const email = user.email
        const name = form.name.value
        const img = form.img.value
        const location = form.location.value
        const resale_price = form.resale_price.value
        const years_of_use = form.years_of_use.value
        const original_price = form.original_price.value
        const sellers_name = form.sellers_name.value
        const date = postDate

        const product = {
            category_name,
            name,
            img,
            location,
            original_price,
            resale_price,
            years_of_use,
            sellers_name,
            date
        }
        // console.log(email, category_name, name, img, location, resale_price, years_of_use, original_price, sellers_name, date)
        fetch(`http://localhost:5000/bookings/product`, {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('Product Added Successfull!!')
            })
    }
    return (
        <div className='border-solid'>
            <Form onSubmit={handleAddProduct}>
                <span>Product Name:  <input type="text" name='name' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Category Name:  <select name='category_name' className="select select-bordered w-full max-w-xs">

                    <option>T Shirts</option>
                    <option>Hoodies</option>
                    <option>Jeans</option>
                </select></span><br />
                <span>Original Price: <input type="number" name='original_price' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Resale price: <input type="number" name='resale_price' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Years of use:  <input type="text" name='years_of_use' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Sellers Name: <input type="text" name='sellers_name' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Products Image: <input type="text" name='img' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Products Condition: <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Products Location: <input type="text" name='location' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <span>Products Description: <input type="text" name='description' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>

                <span>Year Of Purchase: <input type="text" name='year_of_purchase' placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" /><br /></span>
                <button className="btn ">Add Product</button>
            </Form>
        </div>
    );
};

export default AddAProduct;