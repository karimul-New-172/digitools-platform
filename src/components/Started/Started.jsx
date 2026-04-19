import React from 'react';
import User from '../../assets/user.png'
import Package from '../../assets/package.png'
import Rocket from '../../assets/rocket.png'

const Started = () => {
    return (
        <section className='bg-[#F9FAFC] py-20 text-center'>
            <div className='container mx-auto'>
                <h2 className='text-5xl font-semibold text-[#101727]'>Get Started in 3 Steps</h2>
                <p className='text-[#627382] text-lg my-8'>Start using premium digital tools in minutes, not hours.</p>
                {/* started cards container */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='bg-white rounded-2xl border-2 border-gray-200 p-10 relative space-y-4'>
                        <div className="badge bg-linear-to-r from-purple-700 to-purple-500 p-4 rounded-full text-white/80 w-1.5 h-0.5 absolute top-2.5 right-2.5">
                            <span className='text-xs'>01</span>
                        </div>
                        <div className="img bg-purple-100 p-3 rounded-full inline-flex mx-auto">
                            <img src={User} alt="" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Create Account</h3>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    {/* card-2 */}
                    <div className='bg-white rounded-2xl border-2 border-gray-200 p-10 relative space-y-4'>
                        <div className="badge bg-linear-to-r from-purple-700 to-purple-500 p-4 rounded-full text-white/80 w-1.5 h-0.5 absolute top-2.5 right-2.5">
                            <span className='text-xs'>02</span>
                        </div>
                        <div className="img bg-purple-100 p-3 rounded-full inline-flex mx-auto">
                            <img src={Package} alt="" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Choose Products</h3>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    {/* card-3 */}
                    <div className='bg-white rounded-2xl border-2 border-gray-200 p-10 relative space-y-4'>
                        <div className="badge bg-linear-to-r from-purple-700 to-purple-500 p-4 rounded-full text-white/80 w-1.5 h-0.5 absolute top-2.5 right-2.5">
                            <span className='text-xs'>03</span>
                        </div>
                        <div className="img bg-purple-100 p-3 rounded-full inline-flex mx-auto">
                            <img src={Rocket} alt="" />
                        </div>
                        <h3 className='text-2xl font-semibold'>Start Creating</h3>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Started;