import React from 'react';

const Transform = () => {
    return (
        <section className='bg-linear-to-r from-[#642ef7] to-[#9216fa] text-center py-20 text-white/80'>
            <div className='container mx-auto space-y-4'>
                <h2 className='text-[40px] font-bold'>Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex flex-col sm:flex-row justify-center gap-4'>
                    <button className='btn rounded-full'><span className='bg-linear-to-r from-[#642ef7] to-[#9216fa] bg-clip-text text-transparent'>Explore Products</span></button>
                    <button className='btn btn-outline rounded-full hover:bg-transparent hover:text-white/80'>View Pricing</button>
                </div>
                <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </section>
    );
};

export default Transform;