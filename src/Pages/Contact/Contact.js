import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='c-div my-4  p-4'>
            <div>
                <form >
                    <p className='text-xl'>Full Name</p>
                    <input className='c-input my-2' type="text" />
                    <p className='text-xl'>Email</p>
                    <input className='c-input my-2' type="text" />
                    <p className='text-xl'>Message</p>
                    <input className='c-input my-2' type="text" /><br />
                    <button className="mt-3 btn btn-primary">Contact Us</button>
                </form>
            </div>
            <div className='mt-3'>
                <p className='text-2xl font-bold'>Contact Email</p>
                <p className='text-xl'>clothshub@gmail.com</p>
            </div>
        </div>
    );
};

export default Contact;