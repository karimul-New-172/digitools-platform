import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white/80'>
            <footer className="container mx-auto footer sm:footer-horizontal p-20">
                <aside>
                    <h3 className='text-4xl font-semibold'>DigiTools</h3>
                    <p className='mt-2 text-white/60'>
                        Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.
                    </p>
                </aside>
                <nav>
                    <h6 className="text-lg">Product</h6>
                    <a className="link link-hover text-white/60">Features</a>
                    <a className="link link-hover text-white/60">Pricing</a>
                    <a className="link link-hover text-white/60">Templates</a>
                    <a className="link link-hover text-white/60">Integrations</a>
                </nav>
                <nav>
                    <h6 className="text-lg">Company</h6>
                    <a className="link link-hover text-white/60">About</a>
                    <a className="link link-hover text-white/60">Blog</a>
                    <a className="link link-hover text-white/60">Careers</a>
                    <a className="link link-hover text-white/60">Press</a>
                </nav>
                <nav>
                    <h6 className="text-lg">Resources</h6>
                    <a className="link link-hover text-white/60">Documentation</a>
                    <a className="link link-hover text-white/60">Help Center</a>
                    <a className="link link-hover text-white/60">Community</a>
                    <a className="link link-hover text-white/60">Contact</a>
                </nav>
                <nav>
                    <h6 className="text-lg">Social Links</h6>
                    <div className="flex gap-4 mt-2 text-2xl">
                        <a href="#" className="hover:text-blue-500 transition-all"><FaInstagram  /></a>
                        <a href="#" className="hover:text-blue-500 transition-all"><FaFacebook /></a>
                        <a href="#" className="hover:text-blue-500 transition-all"><FaXTwitter /></a>
                    </div>
                </nav>

            </footer>
            <div className='container mx-auto py-3'>
                <div className='border-t border-gray-600'></div>
                <div className='my-4 flex flex-col-reverse sm:flex-row justify-between text-white/60 gap-5'>
                    <p className='text-xs text-white/60'>© 2026 Digitools. All rights reserved.</p>
                    
                    <ul className='flex flex-col sm:flex-row gap-1 sm:gap-3'>
                        <li className='hover:text-blue-500'><a href="#">Privacy Policy</a></li>
                        <li className='hover:text-blue-500'><a href="#">Terms of Service</a></li>
                        <li className='hover:text-blue-500'><a href="#">Cookies</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;