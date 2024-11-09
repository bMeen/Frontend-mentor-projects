import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const intialState = {
  open: false,
  quantity: 0,
  cart: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { ...state, open: !state.open };

    case "add-to-cart":
      return { ...state, quantity: state.quantity || 1, cart: true };

    case "increase":
      return { ...state, quantity: state.quantity + 1 };

    case "decrease":
      return {
        ...state,
        quantity: state.quantity > 0 ? state.quantity - 1 : 0,
        cart: state.quantity - 1 < 1 ? false : true,
      };

    case "delete":
      return intialState;

    default:
      throw new Error("Action Unknown");
  }
}

function CartProvider({ children }) {
  const [{ open, quantity, cart }, dispatch] = useReducer(reducer, intialState);

  return (
    <CartContext.Provider value={{ open, quantity, cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error(" CartContext was used outside CartProvider");

  return context;
}

export { CartProvider, useCart };
