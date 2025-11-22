
import React, { useState } from 'react'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { Link , useNavigate } from 'react-router-dom';
import { Swiper , SwiperSlide } from 'swiper/react';
import { Autoplay , EffectFade , Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import products from '../../Products.json'


export default function Products() {
    const addTowishlist = (products) =>{
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
        if(!existing.some(p => p.id === products.id)){
            const updated = [...existing, products];
            localStorage.setItem('wishlist',JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${products.productname} added to your wishlist`);
        }else{
            toast.info(`${products.productname} is already in your wishlist`);
        }
    };

    const addToCart = (products) =>{
        const existing = JSON.parse(localStorage.getItem('cart')) || [];
        if(!existing.some(p => p.id === products.id)){
            const updated = [...existing, products];
            localStorage.setItem('cart',JSON.stringify(updated));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${products.productname} added to your cart`);
        }else{
            toast.info(`${products.productname} is already in your cart`);
        }
    };
  return (
    <>
      <div className="products-container px-[8%] lg:px-[12%] py-[50px] my-12">
            <div className="relative">
                <div className="row">
                    <div className="section-title mb-12 product-title text-center">
                        <h2 className='font-semibold text-3xl'>Our Latest Products</h2>
                        <p className='text-gray-500'>Get The Trending Shoes</p>
                    </div>
                </div>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    modules={[Navigation]}
                    navigation={{nextEl:".product-swiper-next",prevEl:".product-swiper-prev"}}
                    breakpoints={{
                        1339: {slidesPerView: 4},
                        1199: {slidesPerView: 3},
                        991: {slidesPerView: 2},
                        767: {slidesPerView: 1.5},
                        0: {slidesPerView: 1},
                    }}
                    className='mt-4 swiper relative'
                >
                    {
                        products.filter(product => product.id >= 5 && product.id <= 10).map(product => (
                            <SwiperSlide key={product.id}>
                                <Link to={`/product/${product.id}`} className="product-item text-center relative">
                                    <div className="product-image w-full relative overflow-hidden">
                                        <img src={product.image} alt="product" className='w-full h-auto'/>
                                        <img src={product.secondImage} alt="product" className='w-full h-auto'/>
                                        <div className="product-icons gap-3 flex justify-center items-center absolute transition duration-300">
                                            <div className="product-icon cursor-pointer" title='Add to Wishlist' onClick={() => addTowishlist(product)}>
                                                <i className="bi bi-heart text-lg"></i>
                                            </div>
                                            <div className="product-icon cursor-pointer" title='Add to Cart' onClick={() => addToCart(product)}>
                                                <i className="bi bi-cart3 text-lg"></i>
                                            </div>
                                        </div>
                                        {
                                            product.tag && (
                                                <span className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded-full ${product.tag === 'New' ? 'bg-red-600' : 'bg-green-600' }`}>
                                                    {product.tag}
                                                </span>
                                            )
                                        }
                                    </div>
                                    <Link to={`product/${product.id}`} className='no-underline text-black'>
                                        <div className="product-content pt-2">
                                            <span className='price no-underline'>{product.price}</span>
                                            <h3 className='title'>{product.productname}</h3>
                                        </div>
                                    </Link>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </>
  )
}
