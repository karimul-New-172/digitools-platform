import { ShoppingCart } from 'lucide-react';
import React from 'react';

const Navbar = ({purchase}) => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar text-[#101727] container mx-auto'>
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
                    <div className="relative cursor-pointer p-2">
                        <ShoppingCart size={28} />
                        {purchase.length > 0 && (
                            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-5 text-center">
                                {purchase.length}
                            </span>
                        )}
                    </div>
                    <a href="">Login</a>
                    <a className="bg-linear-to-r from-[#642ef7] to-[#9216fa] text-xl text-white rounded-full px-5 py-3 cursor-pointer transition-all duration-300 hover:brightness-110">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;