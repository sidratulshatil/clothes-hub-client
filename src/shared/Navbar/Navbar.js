import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1 font-bold">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Clothes Hub</Link>
            </div>
            <div className="flex-none font-bold">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/'>Home</Link></li>

                    <li><Link to='/blogs'>Blogs</Link></li>
                    {
                        user ?
                            <>
                                <li><button onClick={logOut}>LogOut</button></li>
                                <li><Link to='/dashboard'>DashBoard</Link></li>
                            </>
                            :
                            <> <li><Link to='/login'>Login</Link></li></>
                    }

                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;