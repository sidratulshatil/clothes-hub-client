import React, { useContext } from 'react';
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { data } from 'autoprefixer';

const Login = () => {
    const { googleSignin, signIn } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()


    const handleGoogleSignIn = () => {
        googleSignin()
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err.message))
    }
    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)

            })
    }

    return (
        <div>
            <Form onSubmit={handleLogin} >
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content ">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div>
                                    <h2 className='text-4xl font-bold'>Login</h2>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                </div>
                                <span><p>Didn't have an account?<Link className='redirect-btn' to='/signup'>SignUp</Link></p></span>
                                <p className='mr-auto text-red-600'>{ }</p>

                                <button onClick={handleGoogleSignIn} class="btn btn-ghost"><FaGoogle></FaGoogle>  <span className='ml-4'>Log in with Google</span> </button>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>



        </div>
    );
};

export default Login;