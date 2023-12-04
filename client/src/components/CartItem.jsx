import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className=" items-center justify-between ease-in gap-3 p-4 mt-10 ml-24 border-">
      <div className="flex flex-row ">
        <div className="">
          <img src={item.image} className="h-28 w-28 m-5" />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-80 mt-1">
            {item.title}
          </h1>
          <p className=" text-gray-400 font-normal text-[14px] text-left w-80">
            {item.description.split(" ").slice(0, 10).join(" ") + "..."}
          </p>
          <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart} className="bg-red-500 rounded-full ">
              <MdDelete />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartItem;
