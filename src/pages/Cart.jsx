import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    // Ensure price is numeric and quantity exists
    const formattedCart = savedCart.map(item => ({
      ...item,
      price: typeof item.price === 'string' ? parseFloat(item.price.replace('$', '')) : item.price,
      quantity: item.quantity || 1,
    }));
    setCartItems(formattedCart);

    // Notify Nav to sync counts
    window.dispatchEvent(new Event('cartUpdated'));
  }, []);

  const updatedQuantity = (id, type) => {
    const updated = cartItems.map(item => {
      if (item.id === id) {
        if (type === 'increase') {
          return { ...item, quantity: item.quantity + 1 };
        } else if (type === 'decrease' && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });

    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
    window.dispatchEvent(new Event('cartUpdated'));
    toast.error('Item removed from cart');
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price || 0) * (item.quantity || 1);
  }, 0);

  return (
    <>
      <ol className="section-banner py-3 relative">
        <li className="relative">
          <Link to='/'>Home</Link>
        </li>
        <li className="relative active">
          <span className="ps-5">Cart</span>
        </li>
      </ol>

      <div className="px-[8%] lg:px-[12%] py-5 my-5">
        <h2 className="text-center text-4xl mb-4 font-bold">🧡 Your cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">Your Cart is empty</p>
            <Link to='/' className="btn py-2 px-3 rounded-full">Back to shop</Link>
          </div>
        ) : (
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="lg:col-span-8">
              {cartItems.map(item => (
                <div key={item.id} className="card shadow-md rounded-4xl mb-3 p-3">
                  <div className="grid grid-cols-12 items-center gap-4">
                    <div className="col-span-3">
                      <img src={item.image} alt="item-img" className="w-full rounded-3xl" />
                    </div>
                    <div className="col-span-9 flex flex-col md:flex-row justify-between items-center">
                      <div className="text-start w-full">
                        <h5 className="mb-2 font-bold">{item.productname}</h5>
                        <p className="text-black mb-1 font-semibold">
                          <span className="font-normal">Price: </span> ${item.price.toFixed(2)}
                        </p>
                        <p className="text-black mb-1 font-semibold">
                          <span className="font-normal">Total: </span> ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 mt-3 md:mt-0">
                        <button
                          className="bg-black text-white cursor-pointer w-5 h-[22px] rounded-sm"
                          onClick={() => updatedQuantity(item.id, 'decrease')}
                        >-</button>
                        <span>{item.quantity}</span>
                        <button
                          className="bg-black text-white cursor-pointer w-5 h-[22px] rounded-sm"
                          onClick={() => updatedQuantity(item.id, 'increase')}
                        >+</button>
                        <button
                          className="bg-black text-white cursor-pointer px-2 py-1 rounded-full"
                          onClick={() => removeItem(item.id)}
                        >Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="card border-0 shadow-sm rounded-4xl p-4">
                <h4 className="font-bold mb-4">Cart Summary</h4>
                <hr />
                <div className="flex justify-between mt-2">
                  <span>Total Items</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Total Price</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <Link to='/checkout' className="bg-black text-white cursor-pointer px-2 py-1 rounded-full mt-3 block text-center">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        )}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}
