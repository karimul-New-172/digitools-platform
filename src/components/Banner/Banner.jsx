import React from 'react';
import banner from '../../assets/banner.png'
import bulletPoint from '../../assets/bullet-point.png'
import { Play } from 'lucide-react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center container mx-auto mt-25'>
            <div className="left max-w-162.5 space-y-5">
                <div className='bg-[#E1E7FF] inline-flex items-center gap-2.5 rounded-full border border-purple-100 px-4 py-1.5'>
                    <img src={bulletPoint} alt="" />
                    <span className='text-xl font-semibold bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-purple-500'>New: AI-Powered Tools Available</span>
                </div>
                <h1 className='text-7xl/tight font-bold text-[#101727]'>Supercharge Your Digital Workflow</h1>
                <p className='text-2xl/normal text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                    software—all in one place. Start creating faster today.
                    Explore Products
                </p>

                <div className='flex items-center gap-4'>
                    <button className="bg-linear-to-r from-[#642ef7] to-[#9216fa] text-xl text-white rounded-full px-5 py-3 cursor-pointer transition-all duration-300 hover:brightness-110">Explore Products</button>
                    <button className='border border-purple-600 text-xl bg-clip-text text-transparent bg-linear-to-r from-purple-700 to-purple-500  rounded-full px-5 py-3 inline-flex items-center gap-2 cursor-pointer'><Play className='text-purple-600' /> Watch Demo</button>
                </div>
            </div>
            <div className="right">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;