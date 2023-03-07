import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import "./cart.css";
import useRazorpay from "react-razorpay";
const Cart = () => {
  const { cartData } = useContext(CartContext);
  const total = 600;
  // total.current.price=0
  const RazorPay = useRazorpay();
  const razorPayDisplay = useCallback(async () => {
    const options = {
      key: "rzp_test_On2IsxtUfprw6u",
      amount: total * 100,
      currency: "INR",
      name: "e-commerce",
      description: "Gaming World",
      handler: (res) => {
        console.log(res);
      },
      prefill: {
        name: "Shis Hossain",
        email: "shis@gmail.com",
        phone: 2132165487,
      },
      notes: {
        address: "work address",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new RazorPay(options);
    rzp1.open();
  }, [RazorPay]);
  return (
    <>
      <section>
        <section className="sec">
          {cartData.map((cartItem) => {
            return (
              <>
                <article>
                  <img src="" alt="" />
                  <article>{cartItem.title}</article>
                  <article>{cartItem.price}</article>
                  <button>Remove From Cart</button>
                </article>
              </>
            );
          })}
        </section>
        <section className="sec">
          <article>Billing information</article>
          {cartData.map((cart) => {
            // total.current.price = total.current.price + cart.price;
            return (
              <>
                <article>
                  <span>{cart.title}</span>:<span>{cart.price}</span>
                </article>
                <article>Total:{cart.price}</article>
                <button
                  onClick={() => {
                    razorPayDisplay(6000);
                  }}
                >
                  ChekOut
                </button>
              </>
            );
          })}
        </section>
      </section>
    </>
  );
};
export default Cart;
