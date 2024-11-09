import { useCart } from "../context/CartContext";

function CartItem() {
  const { quantity, dispatch } = useCart();

  return (
    <div className="grid w-full grid-flow-col items-center">
      <img
        src="../images/image-product-1-thumbnail.jpg"
        alt="product-item"
        className="h-16 w-16 rounded-md"
      />

      <div className="space-y-2 text-sm text-dark-grayish-blue">
        <p className="">Fall Limited Edition Sneakers</p>
        <p>
          $125.00 x {quantity}
          <span className="ml-2 font-bold text-very-dark-blue">
            ${(quantity * 125.0).toFixed(2)}
          </span>
        </p>
      </div>

      <img
        src="../images/icon-delete.svg"
        alt="delete-icon"
        className="justify-self-end"
        onClick={() => dispatch({ type: "delete" })}
      />
    </div>
  );
}

export default CartItem;
