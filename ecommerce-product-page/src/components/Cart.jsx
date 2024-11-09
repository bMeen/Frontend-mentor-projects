import { useCart } from "../context/CartContext";
import Button from "../ui/Button";
import CartEmpty from "../ui/CartEmpty";
import CartItem from "./CartItem";

function Cart({ open }) {
  const { cart, dispatch } = useCart();

  if (!open) return null;
  return (
    <div className="absolute right-2 top-20 z-10 w-full max-w-[360px] divide-y-2 rounded-lg border-2 border-white bg-white shadow-md sm:right-32">
      <p className="p-4 font-bold text-very-dark-blue">Cart</p>
      <div className="relative grid h-40 place-items-center space-y-5 overflow-hidden p-4">
        {cart ? (
          <>
            <CartItem />
            <Button
              type="checkout"
              onClick={() => dispatch({ type: "delete" })}
            >
              Checkout
            </Button>
          </>
        ) : (
          <CartEmpty />
        )}
      </div>
    </div>
  );
}

export default Cart;
