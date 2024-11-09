import { useCart } from "../context/CartContext";
import Button from "./Button";
import Icon from "./Icon";

function ButtonGroup() {
  const { dispatch, quantity } = useCart();

  return (
    <div className="flex flex-col gap-4 font-bold md:flex-row">
      <Button type="counter">
        <img
          src="../images/icon-minus.svg"
          alt="minus-icon"
          onClick={() => dispatch({ type: "decrease" })}
        />
        <span>{quantity}</span>
        <img
          src="../images/icon-plus.svg"
          alt="plus-icon"
          onClick={() => dispatch({ type: "increase" })}
        />
      </Button>

      <Button type="cart" onClick={() => dispatch({ type: "add-to-cart" })}>
        <div className="-mb-2 h-6 w-6">
          <Icon type="cart" dark={true} />
        </div>

        <span>Add to cart</span>
      </Button>
    </div>
  );
}

export default ButtonGroup;
