import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setWishlist(storedWishlist);
    setCart(storedCart);
  }, []);

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter(item => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    window.dispatchEvent(new Event('wishlistUpdated'));
    toast.error('Item removed from wishlist', { autoClose: 2000 });
  }

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // Product already in cart
      toast.warning(`${product.productname} is already in your cart!`, { autoClose: 2000 });
      return;
    }

    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.success(`${product.productname} added to your cart!`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <>
      <ol className="section-banner py-3 relative">
        <li className="relative">
          <Link to='/'>Home</Link>
        </li>
        <li className="relative active">
          <span className="ps-5">Wishlist</span>
        </li>
      </ol>

      <div className="px-[8%] lg:px-[12%] py-5 my-5">
        <h2 className="text-center text-4xl mb-4 font-bold">🧡 Your Wishlist</h2>

        {wishlist.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">Your Wishlist is empty</p>
            <Link to='/shop' className="bg-black text-white py-2 px-3 rounded-full inline-flex items-center gap-2">
              <i className="ri-shopping-bag-line me-2"></i>
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {wishlist.map(product => (
              <div className="col" key={product.id}>
                <div className="cart h-full shadow-md bg-white rounded">

                  {/* Product clickable area */}
                  <Link to={`/product/${product.id}`} className="block relative overflow-hidden" style={{ height: "250px", backgroundColor: "#f8f9fa" }}>
                    <img
                      src={product.image || '/Images/Placeholder.jpg'}
                      alt={product.productname}
                      className="card-img-top w-full h-full object-cover"
                    />
                    {product.tag && (
                      <span
                        className={`badge absolute top-0 right-0 m-2 text-white px-2 py-2 text-sm rounded ${
                          product.tag === 'New' ? 'bg-red-600' : 'bg-green-600'
                        }`}
                      >
                        {product.tag}
                      </span>
                    )}
                  </Link>

                  <div className="card-body flex flex-col p-4">
                    <Link to={`/product/${product.id}`} className="text-lg font-semibold mb-2 hover:underline">
                      {product.productname}
                    </Link>
                    <p className="card-text text-xl text-orange-500 font-semibold">{product.price}</p>
                    <div className="mt-3 flex justify-between gap-2">
                      <button
                        className="bg-black text-white hover:bg-orange-500 cursor-pointer p-2 rounded w-full"
                        onClick={() => addToCart(product)}
                      >
                        <i className="ri-shopping-cart-line me-1"></i>Add to Cart
                      </button>
                      <button
                        className="bg-black text-white hover:bg-orange-500 cursor-pointer p-2 rounded w-full"
                        onClick={() => removeFromWishlist(product.id)}
                      >
                        <i className="ri-delete-bin-line me-1"></i>Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <ToastContainer />
      </div>
    </>
  );
}
