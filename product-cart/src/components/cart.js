import { useState } from "react";
import TotalOrder from "./TotalOrder";
import { useProduct } from "../context/ProductContext";

export default function Cart() {
  const { cart } = useProduct();
  const totalQuantity = cart
    .map((item) => item.quantity)
    .reduce((acc, item) => acc + item, 0);

  return (
    <div className="bg-white p-5 pb-0 rounded-lg md:basis-[30%]">
      <h2 className="text-red text-2xl font-bold">
        Your Cart({totalQuantity})
      </h2>

      {cart.length > 0 ? <Summary /> : <Empty />}
    </div>
  );
}

function Empty() {
  return (
    <div>
      <img
        src="./assets/images/illustration-empty-cart.svg"
        alt="illustration"
        className="mx-auto my-10"
      />
      <p className="text-center font-semibold text-sm pb-5">
        Your added items will appear here
      </p>
    </div>
  );
}

function Summary() {
  return (
    <div>
      <CartItems />
      <TotalOrder />
      <Carbon />
      <Button />
    </div>
  );
}

function CartItems() {
  const { cart } = useProduct();
  return (
    <ul className="max-h-64 h-auto lg:max-h-[764px] overflow-y-scroll no-scrollbar">
      {cart.map((cart) => (
        <Item cart={cart} key={cart.name} />
      ))}
    </ul>
  );
}

function Item({ cart }) {
  const { name, price, quantity, id } = cart;

  return (
    <li className="flex justify-between items-center border-b-[1px] border-rose-100 py-4">
      <div>
        <h4 className="text-rose-900 font-semibold mb-1">{name}</h4>
        <div className="flex space-x-3">
          <p className="text-red font-semibold">{quantity}x</p>
          <p>@ ${price.toFixed(2)}</p>
          <p className="text-rose-500 font-semibold">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <CancelIcon id={id} />
    </li>
  );
}

function Carbon() {
  return (
    <div className="bg-rose-100 py-3 flex justify-center items-center rounded-lg">
      <div className="flex items-center space-x-2">
        <img src="./assets/images/icon-carbon-neutral.svg" alt="icon" />
        <p className="text-rose-500 text-sm text-center">
          This is a{" "}
          <span className="font-semibold text-rose-900">carbon-neutral</span>{" "}
          delivery
        </p>
      </div>
    </div>
  );
}

function CancelIcon({ id }) {
  const { dispatch } = useProduct();
  const [hover, setHover] = useState(false);

  return (
    <span
      className="border-2 border-rose-300 rounded-full p-[2px] hover:border-rose-900"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => dispatch({ type: "remove", payload: id })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="10"
        fill="none"
        viewBox="0 0 10 10"
      >
        <path
          fill={hover ? "hsl(14, 65%, 9%)" : "#CAAFA7"}
          d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
        />
      </svg>
    </span>
  );
}

function Button() {
  const { dispatch } = useProduct();
  return (
    <button
      className="text-white bg-red w-full text-center my-5 rounded-full py-3"
      onClick={() => dispatch({ type: "submit" })}
    >
      Confirm Order
    </button>
  );
}
