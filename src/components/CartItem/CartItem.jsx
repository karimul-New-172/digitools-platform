import React from 'react';

const CartItem = ({item, handleRemoveItem}) => {
    const {name, price, icon} = item;
    
    return (
        <div className='bg-gray-100 p-3 rounded-xl flex justify-between items-center'>
            <div className="left flex gap-2">
                <div className='bg-white/80 border border-gray-300 rounded-full p-2'>
                    <img src={icon} alt="" />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>${price}</p>
                </div>
            </div>
            <p className='text-red-400 font-semibold cursor-pointer' onClick={()=>{handleRemoveItem(item)}}>Remove</p>
        </div>
    );
};

export default CartItem;