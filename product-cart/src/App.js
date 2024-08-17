import { useEffect, useState } from "react";
import Products from "./components/products";
import Cart from "./components/cart";
import OverLay from "./components/overlay";
import Confirmed from "./components/confirmed";

export default function App() {
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

  useEffect(
    function () {
      function overlay() {
        if (isConfirmed) document.body.style.overflow = "hidden";
      }

      overlay();

      return () => (document.body.style.overflow = "");
    },
    [isConfirmed]
  );

  return (
    <div className="p-4 text-rose-400">
      <main className="max-w-screen-xl lg:mx-auto md:flex md:items-start md:gap-4 lg:gap-8">
        <Products
          products={products}
          onhandleAddToCart={handleAddToCart}
          onhandleIncreaseQuantity={handleIncreaseQuantity}
          onhandleDecreaseQuantity={handleDecreaseQuantity}
        />

        <Cart
          cart={cart}
          onhandleRemoveCart={removeCart}
          onhandleSetConfirm={handleCOnfirm}
        />
      </main>

      {isConfirmed && (
        <>
          <OverLay />
          <Confirmed cart={cart} onhandleReset={handleReset} />
        </>
      )}
    </div>
  );
}
