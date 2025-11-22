import { useState } from 'react'
import {useNavigate } from 'react-router-dom';

import brand1 from '../../assets/brand-1.png';

import discover1 from '../../assets/shoes-banner-image-01.png';
import discover2 from '../../assets/shoes-banner-image-02.png';

import socialImg1 from '../../assets/social-image-1.png';
import socialImg2 from '../../assets/social-image-2.png';
import socialImg3 from '../../assets/social-image-3.png';
import socialImg4 from '../../assets/social-image-4.png';
import socialImg5 from '../../assets/social-image-5.png';




import Hero from './Hero';
import Products from './Products';
import Services from './Services';
import SeenIn from './SeenIn';
import FavoriteBeauty from './FavoriteBeauty';
import { ToastContainer } from 'react-toastify';

export default function Index() {

    const [filterSortOption , setFilterSortOption] = useState('all');
    const navigate = useNavigate();
    

    const images = [socialImg1 , socialImg2 , socialImg3 , socialImg4 , socialImg5, socialImg1];

  return (
    <>
        <Hero/>
        <Products/>
        <Services/>
        <SeenIn/>
        <FavoriteBeauty/>
        <div className="discover px-[8%] lg:px-[12%] py-0">
            <div className="mb-10 text-center">
                <span className='text-lg capitalize font-semibold text-[#ff823a]'>About us</span>
                <h2 className='capitalize text-sm text-[#777777] tracking-widest max-w-7xl mx-auto lg:text-5xl'>Welcome to multi store</h2>
                <p className="capitalize text-sm lg:text-xl text-[#777777] tracking-widest max-w-7xl mx-auto">
                    Step into comfort and style with our latest collection of
                    shoes, perfect for any occcasion.
                    From sleek sneakers to elegant dress shoes, our curated
                    selection features top brands known for quality and
                    durability. Experience unparalleled comfort with our
                    innovative designs and cushioned soles. Whether you're hitting
                    the gym, going to the office, or enjoying a night out, we have
                    the perfect pair for you. Shop now and elevate your footwear
                    game with our exclusive offers and new arrivals.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <img src={discover1} className='w-full' alt="" />
                <img src={discover2} className='w-full' alt="" />
            </div>
        </div>
        <div className="social-image-container px-5 pt-[50px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 cursor-pointer gap-4">
                {
                    images.map((img,index) =>(
                        <div key={index} className='relative overflow-hidden group rounded-lg'>
                            <img src={img} className='w-full object-cover' alt="" />
                            <i className='bi bi-instagram absolute inset-0 flex items-center justify-center text-white text-5xl opacity-0 group-hover:opacity-[1] bg-black/50 transition duration-300'></i>
                        </div>
                    ))
                }
            </div>
        </div>
        <ToastContainer
            position='top-right'
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
  )
}
