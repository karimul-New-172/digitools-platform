import React from 'react';
import CartItem from '../CartItem/CartItem';

const Carts = ({purchase, totalPrice, setTotalPrice, handleRemoveItem={handleRemoveItem}}) => {
    return (
        <div className='container mx-auto mt-10 border-2 border-gray-200 rounded-2xl p-5 space-y-4'>
            <h1 className='text-3xl font-semibold'>Your Cart</h1>
            <div className='item-container space-y-3'>
                {
                    purchase.map(pItem => <CartItem key={pItem.id} item={pItem} totalPrice={totalPrice} setTotalPrice={setTotalPrice} handleRemoveItem={handleRemoveItem}></CartItem>)
                }
            </div>
            <div className='flex justify-between text-xl font-semibold'>
                <p className='text-[#627382]'>Total:</p>
                <p className=''>$<span>{totalPrice}</span></p>
            </div>
            <button className='btn bg-linear-to-r from-[#642ef7] to-[#9216fa] w-full rounded-full text-lg text-white/80'>Proceed to Checkout</button>
        </div>
    );
};

export default Carts;