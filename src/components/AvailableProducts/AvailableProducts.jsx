import React, { use } from 'react';
import Product from '../Product/Product';

const AvailableProducts = ({productsPromise, purchase, setPurchased, totalPrice, setTotalPrice}) => {
    const products = use(productsPromise);
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
            {products.map(product => <Product key={product.id} product={product} purchase={purchase} setPurchased={setPurchased} totalPrice={totalPrice} setTotalPrice={setTotalPrice}></Product>)}
        </div>
    );
};

export default AvailableProducts;