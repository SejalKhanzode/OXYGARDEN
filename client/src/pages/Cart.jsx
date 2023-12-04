import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from ".././components/CartItem";


const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-white w-full h-[6500px]">
      {cart.length > 0 ? (
        <div className="flex h-56 flex-cols-3 gap-4 content-between">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="ml-20 m-28 flex flex-col space-between">
            <div>
              <div className="text-green-600 font-[30px]">YOUR CART</div>
              <div className="text-green-600 font-bold text-[40px]">
                Summary
              </div>
              <p>
                <span className="text-gray-700 font-semibold text-[20px]">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div>
              <div className="text-gray-700 text-[15px] ">
                Total Amount:{" "}
                <span className="text-black font-semibold text-[16px] inline">
                  ${totalAmount}
                </span>
              </div>
              <button className="bg-green-600 w-100 rounded-sm pl-20 pr-20 pt-3 pb-3 text-white font-bold">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="justify-items-center justify-center align-middle items-cemter">
          <h1 className="">Cart Empty</h1>
          <Link to={"/"}>
            <button>Shop Now</button>
          </Link>
        </div>
      )}
      {/* <Footer/> */}
    </div>
  );
};

export default Cart;
