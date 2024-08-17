import TotalOrder from "./TotalOrder";

export default function Confirmed({ cart, onhandleReset }) {
  const totalOrderAmount = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  return (
    <section className="fixed w-full left-0 bottom-0 md:left-1/2 md:bottom-1/2 md:-translate-x-1/2 md:translate-y-1/2 md:w-[565px] z-20 bg-white rounded-lg px-4 ">
      <img
        src="./assets/images/icon-order-confirmed.svg"
        alt="icon"
        className="my-5"
      />

      <h1 className="w-1/2 md:w-full text-4xl font-bold text-rose-900">
        Order Confirmed
      </h1>
      <p className="text-sm">We hope you enjoyed your food!</p>

      <div className="px-3 mt-3 rounded-lg bg-rose-100">
        <Orders cart={cart} />
        <TotalOrder totalOrderAmount={totalOrderAmount} />
      </div>

      <Button onhandleReset={onhandleReset} />
    </section>
  );
}

function Orders({ cart }) {
  return (
    <ul className="h-auto max-h-64 overflow-y-scroll no-scrollbar">
      {cart.map((cart) => (
        <OrderItem cart={cart} key={cart.name} />
      ))}
    </ul>
  );
}

function OrderItem({ cart }) {
  const {
    name,
    price,
    quantity,
    image: { thumbnail },
  } = cart;

  return (
    <li className="flex items-center justify-between border-b-[1px] border-rose-300 py-4">
      <div className="flex space-x-3 items-center">
        <img
          src={thumbnail}
          alt="icon"
          className="w-12 h-12 rounded object-cover"
        />

        <div>
          <h4 className="text-rose-900 text-sm font-semibold mb-1">{name}</h4>
          <div className="flex">
            <p className="text-red font-semibold mr-4 text-sm">{quantity}x</p>
            <p className="text-sm">@${price.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <p className="text-rose-900 font-semibold">
        ${(price * quantity).toFixed(2)}
      </p>
    </li>
  );
}

function Button({ onhandleReset }) {
  return (
    <button
      className="text-white bg-red w-full text-center my-5 rounded-full py-3"
      onClick={onhandleReset}
    >
      Start New Order
    </button>
  );
}
