import React from 'react';

const BookingModal = ({ item, user }) => {
    console.log(item)
    // const { name, resale_price } = item
    // console.log(products.name)
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative my-2">
                    <label htmlFor="booking-modal" className="btn  btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <input type="text" defaultValue={user.displayName} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="text" defaultValue={user.email} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="text" defaultValue={item?.name} disabled placeholder="Type here" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="text" placeholder="Meeting Location" className="input input-bordered w-full max-w-xs my-2" />
                    <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs my-2" /><br />
                    <button className="btn w-2/3">Submit</button>
                </div>
            </div>
        </>
    );
};

export default BookingModal;