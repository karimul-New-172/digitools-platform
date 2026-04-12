import React from 'react';
import designTool from '../../assets/products/design-tool.png'
import { Check } from 'lucide-react';

const Product = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                {/* badge */}
                <div className='flex justify-end'>
                    <span className="badge badge-md rounded-full badge-warning">Most Popular</span>
                </div>
                {/* image */}
                <div className='w-15 h-15 rounded-full border border-gray-200 flex justify-center items-center'>
                    <img src={designTool} alt="" className=''/>
                </div>
                {/* heading */}
                <h2 className="text-2xl font-semibold">Premium</h2>
                <p className='text-[#627362]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.</p>
                <span className="text-[#627362]"><span className='text-xl font-semibold text-[#101727]'>$29</span>/mo</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    <li className='flex gap-2 items-center'>
                        <Check className='text-green-700'/> <span>High-resolution image generation</span>
                    </li>
                </ul>
                <div className="mt-6">
                    <button className="btn w-full rounded-full bg-linear-to-r from-[#642ef7] to-[#9216fa] text-white/80">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;