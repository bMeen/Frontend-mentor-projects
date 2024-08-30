import { createContext, useContext, useEffect, useReducer } from "react";

const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
  isConfirmed: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "products/loaded":
      return { ...state, products: action.payload };

    case "add-to-cart":
      const existsProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      return {
        ...state,
        products: existsProduct
          ? state.products
          : state.products.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: 1, isActive: true }
                : item
            ),
        cart: existsProduct
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...action.payload, quantity: 1 }],
      };

    case "increase":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "decrease":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                isActive: item.quantity > 1,
              }
            : item
        ),
        cart: state.cart
          .map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "remove":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: 0, isActive: false }
            : item
        ),
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "submit":
      return { ...state, isConfirmed: true };

    case "reset":
      return {
        ...initialState,
        products: state.products.map((item, i) => {
          return { ...item, quantity: 0, id: i + 1, isActive: false };
        }),
      };

    default:
      throw new Error("Action Unknown");
  }
}

function ProductProvider({ children }) {
  const [{ products, cart, isConfirmed }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function getProducts() {
      const res = await fetch("./data.json");
      const data = await res.json();
      const newData = data.map((d, i) => {
        return { ...d, quantity: 0, id: i + 1, isActive: false };
      });
      dispatch({ type: "products/loaded", payload: newData });
    }
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, cart, isConfirmed, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside CitiesProvider");

  return context;
}

export { ProductProvider, useProduct };

/*
const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isConfirmed, setIsConfirmed] = useState(false);

  function handleAddToCart(product) {
    const existsProduct = cart.find((item) => item.id === product.id);
    if (existsProduct) {
      setCart((cart) =>
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart((cart) => [...cart, { ...product, quantity: 1 }]);
      setProducts((products) =>
        products.map((item) =>
          item.id === product.id
            ? { ...item, quantity: 1, isActive: true }
            : item
        )
      );
    }
  }

  function handleIncreaseQuantity(product) {
    setCart((cart) =>
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setProducts((products) =>
      products.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleDecreaseQuantity(product) {
    setCart((cart) =>
      cart
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );

    setProducts((products) =>
      products.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity > 0 ? item.quantity - 1 : 0,
              isActive: item.quantity > 1,
            }
          : item
      )
    );
  }

  function removeCart(id) {
    setCart((cart) => cart.filter((item) => item.id !== id));

    setProducts((products) =>
      products.map((item) =>
        item.id === id ? { ...item, quantity: 0, isActive: false } : item
      )
    );
  }

  function handleCOnfirm() {
    setIsConfirmed(true);
  }

  function handleReset() {
    setIsConfirmed(false);
    setCart([]);
    setProducts((products) =>
      products.map((item, i) => {
        return { ...item, quantity: 0, id: i + 1, isActive: false };
      })
    );
  }

  //Done
  useEffect(function () {
    async function getProducts() {
      const res = await fetch("./data.json");
      const data = await res.json();
      const newData = data.map((d, i) => {
        return { ...d, quantity: 0, id: i + 1, isActive: false };
      });
      setProducts(newData);
    }
    getProducts();
  }, []); 
 */
