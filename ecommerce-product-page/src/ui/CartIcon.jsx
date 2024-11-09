import Cart from "../components/Cart";
import { useCart } from "../context/CartContext";

function CartIcon() {
  const { open, cart, dispatch, quantity } = useCart();

  return (
    <>
      <div
        className="relative h-6 w-6 cursor-pointer"
        onClick={() => dispatch({ type: "toggle" })}
      >
        <img className="w-full" src="../images/icon-cart.svg" />
        {cart && (
          <span className="absolute -right-2 bottom-4 w-5 rounded-full bg-orange-main text-center text-[9px] font-bold text-white">
            {quantity}
          </span>
        )}
      </div>

      <Cart open={open} />
    </>
  );
}

export default CartIcon;
