import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function CheckOut() {
    const [deliveryOption , setDeliveryOption] = useState('ship');
    const [cartItems , setCartItems] = useState([]);
    useEffect(()=>{
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    },[]);
    const handlePlaceOrder = () => {
        toast.success('Order Placed Successfully');
    };
    const totalPrice = cartItems.reduce((acc,item) => {
        const price = parseFloat(item.price);
        return acc + price * item.quantity ;
    },0);
    const estimatedTax = (totalPrice * 0.1).toFixed(2);
  return (
    <>
      <h2 className="text-center text-5xl mb-4 font-bold mt-[15%]">Checkout!</h2>
      <div className="px-[8%] lg:px-[12%] py-[50px]">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h5 className="mb-2">Contact</h5>
            <div className="mb-3">
              <input type="email" className="border w-full p-2" placeholder="Email or mobile phone number" />
            </div>
            <div className="form-check mb-4">
              <input type="checkbox" id="newsCheck" className="me-2" />
              <label className="form-check-label" htmlFor="newsCheck">Email me with news and offers</label>
            </div>
            <h5 className="mb-2">Delivery</h5>
            <div>
              <div className="mb-3">
                <div className="btn-group btn-form w-full" role="group">
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="deliveryOption"
                    id="ship"
                    checked={deliveryOption === 'ship'} 
                    onChange={() => setDeliveryOption('ship')}
                  />
                  <label htmlFor="ship" className=" px-2 me-3">Ship</label>
                  <input 
                    type="radio" 
                    className="btn-check" 
                    name="deliveryOption"
                    id="pickup"
                    checked={deliveryOption === 'pickup'} 
                    onChange={() => setDeliveryOption('pickup')}
                  />
                  <label htmlFor="pickup" className="px-2 me-3">Pickup in store</label>
                </div>
              </div>
              {
                deliveryOption === 'ship' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                    <div className="mb-3 md:col-span-2">
                      <select className="form-select border p-1">
                        <option>Vietnam</option>
                        <option>France</option>
                        <option>United States</option>
                        <option>Egypt</option>
                      </select>
                    </div>
                    <div>
                      <input type="text" className="border w-full p-2" placeholder="First name(optional)" />
                    </div>
                    <div>
                      <input type="text" className="border w-full p-2" placeholder="Last name" />
                    </div>
                  </div>
                )
              }
              {
                deliveryOption === 'pickup' && (
                  <div className="my-4">
                    <div className="flex justify-between items-center mb-2">
                      <h6 className="font-semibold mb-0">Store Location</h6>
                      <a href="#" className="no-underline text-sm">Change location</a>
                    </div>
                    <div 
                      className="alert alert-danger p-2 flex items-center rounded-3xl" 
                      role="alert" 
                      style={{
                        color:"#7b1c1c",
                        backgroundColor:"#fef6f6",
                        border:"1px solid rgba(145,137,137,0.59)"
                      }}
                    >
                      <div className="flex items-center mb-1">
                        <i className="bi bi-exclamation-circle-fill me-2 text-[1rem]"></i>
                      </div>
                      <strong>No stores available with your item</strong>
                    </div>
                    <div>
                      <a href="#" className="underline text-[#7b1c1c]">Ship to address</a>{""} instead
                    </div>
                  </div>
                )
              }
            </div>
            <div className="mb-3">
              <input type="text" className="border w-full p-2" placeholder="Address" />
            </div>
            <div className="mb-3">
              <input type="text" className="border w-full p-2" placeholder="Apartment,suite,etc." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <input type="text" className="border w-full p-2" placeholder="City" />
              </div>
              <div>
                <input type="text" className="border w-full p-2" placeholder="Postal code" />
              </div>
            </div>
            <div className="form-check mb-4">
              <input type="checkbox" id="saveInfo" />
              <label htmlFor="saveInfo" className="ms-1">Save this information for next time</label>
            </div>
            <h6 className="mb-2">Shipping method</h6>
            <div className="rounded-2xl p-3 flex justify-between items-center bg-[#f0f5ff]" style={{border:"1px solid darkblue"}}>
              <span>Standard</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="my-5">
              <h4 className="font-semibold">Payment</h4>
              <p className="text-gray-500 mb-3">All transactions are secure and encrypted.</p>
              <div className="border rounded">
                <div className="bg-gray-100 border-b flex justify-between items-center p-3">
                  <span className="font-semibold">Credit Card</span>
                  <div className="bg-yellow-400 text-white rounded px-2 py-1 font-bold text-sm">B</div>
                </div>
                <div className="p-3 bg-gray-100">
                  <div className="mb-3">
                    <input type="text" maxLength={19} className="border w-full p-2" placeholder="Card number" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <input type="text" maxLength={5} className="border w-full p-2" placeholder="Expiration date (MM / YY)" />
                    </div>
                    <div>
                      <input type="text" maxLength={4} className="border w-full p-2" placeholder="Security code" />
                    </div>
                  </div>
                  <div className="mb-3 mt-3">
                    <input type="text" className="border w-full p-2" placeholder="Name on card" />
                  </div>
                  <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="billingCheck" />
                    <label htmlFor="billingCheck" className="form-check-label ml-1">Use billing address as billing address</label>
                  </div>
                </div>
              </div>
              <button className="bg-black text-white cursor-pointer w-full mt-4 py-2 transition-all font-semibold">Pay now</button>
              <div className="mt-5 border-t pt-3">
                <a href="#" className="text-sm underline">Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="card border-0 shadow-sm rounded-4xl p-4">
              <h5 className="font-bold mb-3">
                <i className="ri-shopping-cart-2-line text-xl text-[#ff823a]"></i> Order Summary
              </h5>
              {
                cartItems.length === 0 ? (
                  <p className="text-gray-500">Your Cart is empty.</p>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex items-center mb-3 border-b pb-2">
                      <img src={item.image} alt={item.productname} className="rounded-full w-[60px] h-[60px] object-cover mr-2.5" />
                      <div className="grow">
                        <h6 className="mb-1">{item.productname}</h6>
                        <small className="text-gray-600">Qty : {item.quantity}</small>
                      </div>
                      <div className="font-semibold">
                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))
                )}
                <hr />
                <div className="flex justify-between text-sm pt-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm pt-2">
                  <span>Shipping</span>
                  <span>Enter address</span>
                </div>
                <div className="flex justify-between text-sm pt-2">
                  <span>Estimated tax</span>
                  <span>{estimatedTax}</span>
                </div>
                <div className="flex justify-between text-sm pt-2">
                  <span>Total</span>
                  <span>${(totalPrice + parseFloat(estimatedTax)).toFixed(2) }</span>
                </div>
                <button className="bg-black text-white cursor-pointer w-full mt-3 mb-5 rounded transition-all p-2" onClick={handlePlaceOrder}>
                  <i className="ri-secure-payment-line me-2"></i>
                  Place Order
                </button>
                <Link to='/cart' className="bg-black text-white cursor-pointer p-2 rounded  px-3 transition-all">
                  <i className="ri-arrow-left-line me-1"></i> Back to Cart
                </Link>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  )
}
