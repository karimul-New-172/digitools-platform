import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#642ef7] to-[#9216fa] text-white mt-20 py-10'>
            <div className='flex justify-between container mx-auto'>
                <div className="active-user space-y-4 text-center flex-1 border-r-2 border-white/30">
                    <h2 className='text-6xl font-bold'>50K+</h2>
                    <p className='text-2xl text-white/80'>Active User</p>
                </div>
                <div className="premium-tools space-y-4 text-center flex-1 border-r-2 border-white/30">
                    <h2 className='text-6xl font-bold'>200+</h2>
                    <p className='text-2xl text-white/80'>Primium Tools</p>
                </div>
                <div className="ratings space-y-4 text-center flex-1">
                    <h2 className='text-6xl font-bold'>4.6</h2>
                    <p className='text-2xl text-white/80'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;