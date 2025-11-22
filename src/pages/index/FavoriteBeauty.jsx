import React from 'react'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import products from '../../Products.json'
import shoesbanner from '../../assets/Shoes-banner.jpg';
import { Link } from 'react-router-dom';

export default function FavoriteBeauty() {
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
      <div className="favorite-beauty px-[8%] lg:px-[12%] py-[50px] my-5">
            <div>
                <div className="grid grid-cols-1 mb-5">
                    <div className="section-title mb-5 favorite-beauty-title w-full text-center">
                        <h2 className='font-semibold text-3xl'>Customer Favorite Beauty Essentials</h2>
                        <p className='text-gray-500'>Made using clean, non-toxic ingredients, our products are designed for everyone.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <div className="w-full lg:col-span-4">
                        <div className="favorite-beauty-banner mb-5 lg:mb-0 relative rounded-md">
                            <img src={shoesbanner} alt="female-banner" className='w-full h-auto' />
                            <div className='favorite-beauty-banner-title absolute z-10'>
                                <h3 className='text-3xl'>Empower Yourself</h3>
                                <p className='text-base'>Get the skin you want to feel</p>
                                <button className='btn cursor-pointer mt-2 px-3 py-2 rounded-full btn-default'>Explore More</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {
                                products.filter(product => product.id >= 10 && product.id <= 15).map(product => (
                                    <div className='w-full mb-0' key={product.id}>
                                        <Link to={`product/${product.id}`} className="product-item text-center relative">
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
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
