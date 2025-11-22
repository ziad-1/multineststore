import React from 'react'
import serviceImg1 from '../../assets/service-icon-1.svg';
import serviceImg2 from '../../assets/service-icon-2.svg';
import serviceImg3 from '../../assets/service-icon-3.svg';
import serviceImg4 from '../../assets/service-icon-4.svg';
export default function Services() {
  return (
    <>
        <div className="px-[8%] lg:px-[12%] pb-[50px] py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                    <img src={serviceImg1} alt="free shipping" className='w-[100px] mx-auto'/>
                    <h4 className="mb-2 text-2xl font-semibold">Free Shipping</h4>
                    <p className='text-gray-600 text-sm font-medium'>Free Shipping for orders over $130</p>
                </div>
                <div>
                    <img src={serviceImg2} alt="return" className='w-[100px] mx-auto'/>
                    <h4 className="mb-2 text-2xl font-semibold">Returns</h4>
                    <p className='text-gray-600 text-sm font-medium'>Within 30 days for an exchange.</p>
                </div>
                <div>
                    <img src={serviceImg3} alt="support" className='w-[100px] mx-auto'/>
                    <h4 className="mb-2 text-2xl font-semibold">Online Support</h4>
                    <p className='text-gray-600 text-sm font-medium'>24 hours a day, 7 days a week</p>
                </div>
                <div>
                    <img src={serviceImg4} alt="flexible payment" className='w-[100px] mx-auto'/>
                    <h4 className="mb-2 text-2xl font-semibold">Flexible Payment</h4>
                    <p className='text-gray-600 text-sm font-medium'>Pay with multiple credit cards</p>
                </div>
            </div>
        </div>
    </>
  )
}
