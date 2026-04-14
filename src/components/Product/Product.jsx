import React, { useState } from 'react';
import { Check } from 'lucide-react';

const Product = ({product, purchase, setPurchased}) => {
    const {icon, name, tag, tagType, description, price, period, features} = product;
    const badgeStyle = tagType => 
        tagType === "best" 
        ?'bg-amber-100 text-amber-700 border-none'
        :tagType === "popular" 
        ?'bg-purple-100 text-purple-600 border-none'
        :'bg-green-100 text-green-600 border-none';
    
    const [status, setStatus] = useState(true)

    const handleStatus = (product) => {
        setStatus(false);
        const newPurchased = [...purchase, product]
        setPurchased(newPurchased)
    }
    return (
        <div className="card bg-base-100 shadow-sm">
            <div className="card-body">
                {/* badge */}
                <div className='flex justify-end'>
                    <span className={`badge badge-md rounded-full badge-warning ${badgeStyle(tagType)}`}>{tag}</span>
                </div>
                {/* image */}
                <div className='w-15 h-15 rounded-full border border-gray-200 flex justify-center items-center'>
                    <img src={icon} alt="" className=''/>
                </div>
                {/* heading */}
                <h2 className="text-2xl font-semibold">{name}</h2>
                <p className='text-[#627362]'>{description}</p>
                <span className="text-[#627362]"><span className='text-xl font-semibold text-[#101727]'>${price}</span>/{period}</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {features.map((feature, index) => <li key={index} className='flex gap-2 items-center'>
                        <Check className='text-green-700'/> <span>{feature}</span>
                    </li>)}
                </ul>
                <div className="mt-6">
                    <button onClick={() => {handleStatus(product)} } className={`btn w-full rounded-full ${status ? 'bg-linear-to-r from-[#642ef7] to-[#9216fa]' : 'bg-green-700'} text-white/80`}>{status ? "Buy Now" :  <><Check /> Added to Cart</>}</button>
                </div>
            </div>
        </div>
    );
};

export default Product;