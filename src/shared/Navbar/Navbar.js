import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Clothes Hub</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link>Home</Link></li>
                    <li><Link>Product Categories</Link></li>
                    <li><Link>Advertised items</Link></li>
                    <li><Link to='/login'>Login</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default Navbar;