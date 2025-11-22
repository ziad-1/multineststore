import { useState } from 'react';
import productData from '../Products.json';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Shop() {
    const [filterSortOption, setFilterSortOption] = useState("All");
    const navigate = useNavigate();

    const handleFilterSort = () => {
        let filtered = [...productData];

        // Filter by tag
        if (filterSortOption === 'New' || filterSortOption === 'Sale') {
            filtered = filtered.filter(product => product.tag === filterSortOption);
        }

        // Sort low→high
        if (filterSortOption === 'low') {
            filtered.sort((a, b) =>
                parseFloat(a.price.replace('$', '')) -
                parseFloat(b.price.replace('$', ''))
            );
        }

        // Sort high→low
        if (filterSortOption === 'high') {
            filtered.sort((a, b) =>
                parseFloat(b.price.replace('$', '')) -
                parseFloat(a.price.replace('$', ''))
            );
        }

        return filtered;
    };

    const displayedProducts = handleFilterSort();

    // Wishlist
    const addToWishlist = (product) => {
        const existing = JSON.parse(localStorage.getItem('wishlist')) || [];

        if (!existing.some(p => p.id === product.id)) {
            const updated = [...existing, product];
            localStorage.setItem('wishlist', JSON.stringify(updated));
            window.dispatchEvent(new Event('wishlistUpdated'));
            toast.success(`${product.productname} added to your wishlist`);
        } else {
            toast.info(`${product.productname} is already in your wishlist`);
        }
    };

    // Cart
    const addToCart = (product) => {
        const existing = JSON.parse(localStorage.getItem('cart')) || [];

        if (!existing.some(p => p.id === product.id)) {
            const updated = [...existing, product];
            localStorage.setItem('cart', JSON.stringify(updated));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${product.productname} added to your cart`);
        } else {
            toast.info(`${product.productname} is already in your cart`);
        }
    };

    return (
        <>
            <div className="banner-section about-banner-section flex justify-center items-center">
                <div className="banner-section-content text-center z-10">
                    <h6 className="uppercase text-white">- Multinest</h6>
                    <h1 className='text-6xl font-semibold text-white'>
                        Our<span className=' text-[#ff823a]'> Shop</span>
                    </h1>
                </div>
            </div>

            <div className="px-[8%] lg:px-[12%] py-5">
                <div className="my-4 mx-auto">
                    <div className="flex justify-between items-center flex-wrap gap-3">
                        <div className="text-gray-500 text-[1.1rem]">
                            Showing <strong>{displayedProducts.length}</strong> Product
                            {displayedProducts.length !== 1 && 's'} for "
                            {filterSortOption === 'All'
                                ? 'All'
                                : filterSortOption.charAt(0).toUpperCase() + filterSortOption.slice(1)
                            }"
                        </div>

                        {/* FILTER + SORT SELECT */}
                        <div>
                            <select
                                className='py-2 px-3 rounded text-base appearance-none min-w-[260px] bg-gray-100 border-0'
                                value={filterSortOption}
                                onChange={(e) => setFilterSortOption(e.target.value)}
                            >
                                <option value="All">All Products</option>
                                <option value="New">New Products</option>
                                <option value="Sale">Sale Products</option>
                                <option value="low">Price : low to high</option>
                                <option value="high">Price : high to low</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayedProducts.map(product => (
                        <div key={product.id} className="product-item text-center relative">
                            <Link to={`/product/${product.id}`} className="product-image w-full relative overflow-hidden block">
                                <img src={product.image} alt="product" className='w-full h-auto' />
                                <img src={product.secondImage} alt="product" className='w-full h-auto' />

                                {/* Icons */}
                                <div className="product-icons gap-3 flex justify-center items-center absolute transition duration-300">
                                    <div
                                        className="product-icon cursor-pointer"
                                        title='Add to Wishlist'
                                        onClick={(e) => { e.preventDefault(); addToWishlist(product); }}
                                    >
                                        <i className="bi bi-heart text-lg"></i>
                                    </div>
                                    <div
                                        className="product-icon cursor-pointer"
                                        title='Add to Cart'
                                        onClick={(e) => { e.preventDefault(); addToCart(product); }}
                                    >
                                        <i className="bi bi-cart3 text-lg"></i>
                                    </div>
                                </div>

                                {/* Badge */}
                                {product.tag && (
                                    <span
                                        className={`badge text-white absolute top-2 left-2 text-xs px-2 py-1 rounded-full 
                                    ${product.tag === 'New' ? 'bg-red-600' : 'bg-green-600'}`}
                                    >
                                        {product.tag}
                                    </span>
                                )}
                            </Link>

                            <div className="product-content pt-3">
                                {product.oldPrice ? (
                                    <span className='price'>
                                        <span className='line-through text-gray-400 mr-2'>{product.oldPrice}</span>
                                        <span className='font-bold text-red-600'>{product.price}</span>
                                    </span>
                                ) : (
                                    <span className="price">{product.price}</span>
                                )}
                                <h3 className='title pt-1'>{product.productname}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ToastContainer position='top-right' autoClose={1500} />
        </>
    );
}
