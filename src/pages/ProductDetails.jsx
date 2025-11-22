
import products from '../Products.json';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Products from './index/Products';

export default function ProductDetails() {
    const {id} = useParams();
    const product = products.find((p) => String(p.id) === String(id));
    const [mainImage , setMainImage] = useState('');
    const [images , setImages] = useState([]);
    const [quantity , setQuantity] = useState(1);
    useEffect(()=>{
        if(product){
            setMainImage(product.image);
            setImages([product.image,product.secondImage].filter(Boolean));
            setQuantity(1);
        }
    },[product]);

    const addtocart = () =>{
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find((item) => item.id === product.id);
        if(!existing){
            cart.push({...product, quantity});
            localStorage.setItem('cart' , JSON.stringify(cart));
            window.dispatchEvent(new Event('cartUpdated'));
            toast.success(`${product.productname} added to cart!`)
        }else{
            toast.info(`${product.productname} is already in cart.`)
        }
    };
    const addtowhishlist = () =>{
        const wishlist = JSON.parse(localStorage.getItem('whishlist')) || [];
        const existing = wishlist.find((item) => item.id === product.id);
        if(!existing){
            wishlist.push({...product, quantity});
            localStorage.setItem('whishlist' , JSON.stringify(wishlist));
            window.dispatchEvent(new Event('whishlistUpdated'));
            toast.success(`${product.productname} added to whishlist!`)
        }else{
            toast.info(`${product.productname} is already in wishlist.`)
        }
    };

    const colors = ['#000000','#7b3f00' , '#9bbec8'];
    const [activetab,setAciveTab] = useState('description');
  return (
    <>
        <ToastContainer/>
        <div className="banner-section about-banner-section flex justify-center items-center">
            <div className="banner-section-content text-center z-10">
                <h6 className="uppercase">- Multinest</h6>
                <h1 className='text-6xl font-semibold text-[#ff823a]'>
                    <span className='text-white '>{product.productname}</span>
                </h1>
            </div>
        </div> 
        <div className="px-[8%] lg:px-[12%] py-[50px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="flex flex-col-reverse lg:flex-row gap-4">
                    <div className="flex lg:flex-col gap-4 w-full lg:w-1/4">
                        {
                            images.map((img,i) =>(
                                <img 
                                    key={i} 
                                    src={img} 
                                    alt={`thumb ${i}`} 
                                    onClick={() => setMainImage(img)}
                                    className={`w-full h-24 rounded-lg object-cover ${mainImage === img ? 'border-black' : 'border-gray-200'} cursor-pointer`}
                                />
                            ))
                        }
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <img src={mainImage} alt="main" className='w-full h-auto object-contain rounded-lg' />
                    </div>
                </div>
                <div>
                    <h2 className='text-3xl font-bold mb-2'>{product.productname}</h2>
                    <p className='text-2xl text-gray-700 font-semibold mb-4'>{  product.price}</p>
                    <p className='mb-2 font-medium'>Color : </p>
                    <div className='flex gap-2 mb-4'>
                        {
                            colors.map((color,idx)=>(
                                <div key={idx} className='w-6 h-6 rounded-full border border-gray-400' style={{backgroundColor : color}}></div>
                            ))
                        }
                    </div>
                    <p className='font-medium mb-1'>Quantity : </p>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="flex items-center bg-gray-100 px-4 py-2 rounded">
                            <button onClick={() => setQuantity(Math.max(1,quantity - 1))} className='cursor-pointer text-lg'>-</button>
                            <input type="text" readOnly value={quantity} className='w-12 text-center bg-transparent text-lg' />
                            <button onClick={()=>setQuantity(quantity + 1)} className='cursor-pointer text-lg'>+</button>
                        </div>
                    </div>
                    <button onClick={addtocart} className='cursor-pointer w-full py-3 text-white text-lg bg-black hover:bg-orange-500 rounded mb-4'>Add To Cart</button>
                    <p className='text-xl text-gray-500 mb-2'>Vendor : <span className='text-black'>PremiumShoes</span></p>
                    <p className='text-xl text-gray-500 mb-2'>Category : <span className='text-black'>Sneakers , Men's Shoes</span></p>
                    <p className='text-xl text-gray-500 mb-2'>SKU : <span className="text-black">{product.id}</span></p>
                </div>
            </div>
        </div>
        <div className="container px-[8%] lg:px-[12%] py-20">
            <div className="flex justify-center mb-6">
                <button onClick={() => setAciveTab('description')} className={`px-6 py-2 text-lg font-semibold capitalize border-b-2 transition-colors ${activetab === 'description' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}>Description</button>
                <button onClick={() => setAciveTab('shipping')} className={`px-6 py-2 text-lg font-semibold capitalize border-b-2 transition-colors ${activetab === 'shipping' ? 'border-black text-black' : 'border-transparent text-gray-500'}`}>Shipping & Return</button>
            </div>
            <div>
                {
                    activetab === 'description' && (
                        <div className='mt-10'>
                            <p className='text-2xl font-bold mb-2'>For Casual, Sports, and Streetwear</p>
                            <p className='text-gray-700 mb-4'>
                                Our premium sneakers are crafted for comfort and
                                durability, blending
                                modern style with high-performance materials. Whether
                                you're walking the
                                streets or running your day, these shoes provide
                                all-day support and
                                standout design.
                            </p>
                            <h5 className="text-2xl font-bold mb-2">Features & Benefits</h5>
                            <ul className="text-gray-700 space-y-1">
                                <li>Breathable and lightweight upper material</li>
                                <li>Cushioned insole for superior comfort</li>
                                <li>Durable rubber outsole for traction</li>
                                <li>Available in multiple sizes and colorwaysIdeal for daily wear, gym, or casual outings</li>
                                <li>Ideal for daily wear, gym, or casual outings</li>
                            </ul>
                        </div>
                    )
                }
                {
                    activetab === 'shipping' && (
                        <div className='mt-10'>
                            <p className='mb-2'>
                                Orders are processed within 1-2 business days.
                                Standard Shipping
                                delivers within 5-7 business days. Express delivery
                                options are
                                available at checkout
                            </p>
                            <p className='mb-2'>
                                Free shipping is available on orders above $150.
                                A tracking number
                                will be sent to your email once your order ships.
                            </p>
                            <p className='mb-2'>
                                Need to return or exchange? No problem. We accept
                                returns within 7 days
                                of delivery, as long as the shoes are unused and in original packaging.
                                Refunds are processed within 3-5 days after we recieve the item.
                            </p>
                            <p>if you have any issues, contact our support team anytime.</p>
                        </div>
                    )
                }
            </div>
        </div>
        <Products/>
    </>
  )
}
