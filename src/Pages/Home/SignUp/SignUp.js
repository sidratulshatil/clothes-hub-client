import React from 'react';
import { Form, Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>



            <div >
                <Form>
                    <div className="hero min-h-screen bg-base-200">

                        <div className="hero-content ">

                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div>
                                        <h2 className='text-4xl font-bold'>SignUp</h2>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Select Account Type</span>
                                        </label>
                                        <select className="select select-bordered w-full max-w-xs">

                                            <option selected>Buyers</option>
                                            <option>Seller</option>
                                        </select>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name='password' className="input input-bordered" />

                                    </div>
                                    <span><p>Already have an account?<Link className='redirect-btn' to='/login'>Login Now</Link></p></span>
                                    <p className='mr-auto text-red-600'></p>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;