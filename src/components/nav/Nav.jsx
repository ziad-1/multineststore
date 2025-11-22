import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
    const [cartcount , setCartCount] = useState(0);
    const [wishlistCount , setWishlistCount] = useState(0);
    const [isMobileMenuOpen , setIsMobileMenuOpen] = useState(false);

    const updatedCounts = () =>{
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const totalCartItems = cart.reduce((acc,item)=> acc + (item.quantity || 1) , 0);
        setCartCount(totalCartItems);
        setWishlistCount(wishlist.length);
    }

    useEffect(()=>{
        updatedCounts();
        const handleCartUpdated = () => updatedCounts();
        const handleWishlistUpdated = () => updatedCounts();
        window.addEventListener('cartUpdated',handleCartUpdated);
        window.addEventListener('wishlistUpdated',handleWishlistUpdated);
        const onStorageChange = (e) => {
            if(e.key === 'cart' || e.key === 'wishlist'){
                updatedCounts();
            }
        }
        window.addEventListener('storage' , onStorageChange);
        return () => {
            window.removeEventListener('cartUpdated' , handleCartUpdated);
            window.removeEventListener('wishlistUpdated' ,handleWishlistUpdated);
            window.removeEventListener('storage' , onStorageChange);
        } 
    },[]);


    const toggleMobileMenu = ()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  return (
    <>
        <div className='w-full fixed top-0 bg-white shadow-sm z-50'>
            <nav className='flex flex-wrap items-center justify-between px-10 py-3 w-full'>
                <button className='lg:hidden text-gray-800' onClick={toggleMobileMenu}>
                    <i className='bi bi-list text-2xl text-gray-800'></i>
                </button>
                <Link to='/' className='mx-auto order-0 lg:hidden flex'>
                    <h2 className='text-3xl font-bold tracking-widest'>Multinest</h2>
                </Link>
                <ul className='lg:hidden flex items-center gap-4'>
                    <li className='relative'>
                        <Link to='/wishlist'>
                            <i className='bi bi-heart text-lg text-black'></i>
                            <span className='absolute top-2 right-2 w-[22px] h-[22px] text-xs bg-black text-white rounded-full flex items-center justify-center'>{wishlistCount}</span>
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link to='/cart'>
                            <i className='bi bi-bag text-lg text-black'></i>
                            <span className='absolute top-2 right-2 w-[22px] h-[22px] text-xs bg-black text-white rounded-full flex items-center justify-center'>{cartcount}</span>
                        </Link>
                    </li>
                </ul>
                <div className={`w-full lg:flex justify-between items-center ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className='flex flex-col lg:flex-row items-center gap-4'>
                        <li>
                            <Link to='/' className='font-bold uppercase relative nav-link py-1'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='font-bold uppercase relative nav-link py-1'>About</Link>
                        </li>
                        <li>
                            <Link to='/shop' className='font-bold uppercase relative nav-link py-1'>Shop</Link>
                        </li>
                        <li>
                            <Link to='/blog' className='font-bold uppercase relative nav-link py-1'>Blog</Link>
                        </li>
                        <li>
                            <Link to='/contact' className='font-bold uppercase relative nav-link py-1'>Contact</Link>
                        </li>
                    </ul>
                    <Link to='/' className='hidden lg:flex'>
                        <h2 className='text-3xl font-bold tracking-widest'>Multinest</h2>
                    </Link>
                    <ul className='hidden lg:flex items-center gap-4'>
                    <li className='relative'>
                        <Link to='/wishlist'>
                            <i className='bi bi-heart text-lg text-black'></i>
                            <span className='absolute top-2 right-2 w-[22px] h-[22px] text-xs bg-black text-white rounded-full flex items-center justify-center'>{wishlistCount}</span>
                        </Link>
                    </li>
                    <li className='relative'>
                        <Link to='/cart'>
                            <i className='bi bi-bag text-lg text-black'></i>
                            <span className='absolute top-2 right-2 w-[22px] h-[22px] text-xs bg-black text-white rounded-full flex items-center justify-center'>{cartcount}</span>
                        </Link>
                    </li>
                </ul>
                </div> 
            </nav>
        </div>
    </>
  )
}
