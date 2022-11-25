import React from 'react';
import { Form } from 'react-router-dom';
import { toast } from 'react-toastify';



const BookingModal = ({ item, user }) => {
    console.log(item.resale_price, item.name)
    const { img } = item
    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const item = form.item.value
        const image = item.img
        const email = user.email
        const price = form.price.value
        const booking = {
            email,
            name,
            item,
            price,
            img
        }
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Item is Booked', {
                    })
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <> <Form onSubmit={handleBooking}>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />

            <div className="modal ">
                <div className="modal-box relative my-2">
                    <label htmlFor="booking-modal" className="btn  btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" name='name' defaultValue={user.displayName} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="text" name='email' defaultValue={user.email} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="text" name='item' defaultValue={item?.name} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="number" name='price' defaultValue={item?.resale_price} placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="text" placeholder="Meeting Location" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" /><br />
                    <button className="btn w-2/3">Submit</button>
                </div>
            </div>

        </Form>
        </>
    );
};

export default BookingModal;