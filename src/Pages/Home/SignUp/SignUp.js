import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import useToken from '../../../Hooks/useToken';

const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext)
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const [token] = useToken(createdUserEmail)
    const handleSignUp = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const type = form.type.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, type, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                handleUpdatUserProfile(name)
                saveUser(name, email, type)
            })
            .catch(error => {
                console.error(error)

            })
    }
    const handleUpdatUserProfile = (name) => {
        const profile = {
            displayName: name

        }
        updateUser(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const saveUser = (name, email, type) => {
        const user = { name, email, type }
        fetch('https://clothes-hub-server.vercel.app/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Saved-User :', data)
                setCreatedUserEmail(email)
            })
    }
    return (
        <div>
            <div >
                <Form onSubmit={handleSignUp}>
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
                                        <select name='type' className="select select-bordered w-full max-w-xs">

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