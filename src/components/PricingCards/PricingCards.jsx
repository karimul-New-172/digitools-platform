import { Check } from 'lucide-react';
import React from 'react';

const PricingCards = () => {
    return (
        <section className='py-20'>
            <div className='text-center container mx-auto'>
                <h1 className='text-[#101727] text-5xl font-bold'>Simple, Transparent Pricing</h1>
                <p className='text-lg text-[#627382FF] my-7'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                {/* pricing card container */}
                <div className='grid gird-cols-1 md:grid-cols-3 gap-5'>
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body text-left">
                            <h2 className="text-2xl font-semibold">Starter</h2>
                            <p className='text-lg text-[#627382]'>Perfect for getting started</p>
                            <p className='text-2xl text-[#627382]'><span className='text-5xl text-[#101727] font-semibold'>$0</span>/Month</p>
                            <ul className="mt-6 space-y-1">
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Access to 10 free tools</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Basic templates</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Community support</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> 1 project per months</li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-linear-to-r from-[#642ef7] to-[#9216fa] w-full rounded-full text-white/80">Get Started Free</button>
                            </div>
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="card bg-base-100 shadow-sm relative bg-linear-to-r from-[#642ef7] to-[#9216fa] text-white/80">
                        <span className="badge badge-md badge-warning rounded-full absolute left-[42%] -top-2.5">Most Popular</span>
                        <div className="card-body text-left">
                            <h2 className="text-2xl font-semibold">Pro</h2>
                            <p className='text-lg'>Best for professionals</p>
                            <p className='text-2xl'><span className='text-5xl font-semibold'>$29</span>/Month</p>
                            <ul className="mt-6 space-y-1">
                                <li className='flex gap-2'><Check className='text-green-600' /> Access to all premium tools</li>
                                <li className='flex gap-2'><Check className='text-green-600' /> Unlimited templates</li>
                                <li className='flex gap-2'><Check className='text-green-600' /> Priority support</li>
                                <li className='flex gap-2'><Check className='text-green-600' /> Unlimited projects</li>
                                <li className='flex gap-2'><Check className='text-green-600' /> Cloud sync</li>
                                <li className='flex gap-2'><Check className='text-green-600' /> Advanced analytics</li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn rounded-full w-full bg-white border-0  shadow-md"><span className='bg-linear-to-r from-[#642ef7] to-[#9216fa] bg-clip-text text-transparent'>Start Pro Trial</span></button>
                            </div>
                        </div>
                    </div>

                    {/* card-3 */}
                    <div className="card bg-base-100 shadow-sm">
                        <div className="card-body text-left">
                            <h2 className="text-2xl font-semibold">Enterprise</h2>
                            <p className='text-lg text-[#627382]'>For teams and businesses</p>
                            <p className='text-2xl text-[#627382]'><span className='text-5xl text-[#101727] font-semibold'>$99</span>/Month</p>
                            <ul className="mt-6 space-y-1">
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Everything in Pro</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Team collaboration</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Custom integrations</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Dedicated support</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> SLA guarantee</li>
                                <li className='flex gap-2 text-[#627382]'><Check className='text-green-600' /> Custom branding</li>
                            </ul>
                            <div className="mt-6">
                                <button className="btn bg-linear-to-r from-[#642ef7] to-[#9216fa] w-full rounded-full text-white/80">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingCards;