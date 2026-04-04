import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar container mx-auto'>
                <div className="navbar-start">
                    <a className="text-4xl font-bold bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-purple-500 leading-normal">DigiTools</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4 text-xl font-semibold">
                    <ShoppingCart />
                    <a href="">Login</a>
                    <a className="bg-linear-to-r from-purple-800 to-purple-500 text-xl text-white rounded-full px-5 py-3 cursor-pointer transition-all duration-300 hover:brightness-110">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;