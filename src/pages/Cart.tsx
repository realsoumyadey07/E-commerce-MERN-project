import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "ajdkfhvasdj",
    photo: 'https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UY218_.jpg',
    name: 'macbook',
    price: 100000,
    quantity: 40,
    stock: 10,
  },
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const total = subTotal + tax + shippingCharges;
const discount = 400;
const Cart = () => {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>();
  useEffect(()=>{
    const timeOutId = setTimeout(()=> {
      if (Math.random() > 0.5)setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    },1000)

    return ()=>{
      clearTimeout(timeOutId);
      setIsValidCouponCode(false);
    }
  },[couponCode])


  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ? cartItems.map((i, index)=><CartItem cartItem={i} key={index}/>) : <h1>No Item added</h1>
        }
      </main>
      <aside>
        <p>Subtotal: ₹{subTotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discount: <em> -₹{tax}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="Enter your coupon"
        />
        {couponCode &&(
           isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">Invalied Coupon  <VscError/></span>
          )
        )}


        {
          cartItems.length > 0 && <Link to={'/shipping'}>Checkout</Link>
        }
      </aside>
    </div>
  );
};

export default Cart;
