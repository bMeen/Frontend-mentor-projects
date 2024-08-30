import { useEffect } from "react";
import Products from "./components/products";
import Cart from "./components/cart";
import OverLay from "./components/overlay";
import Confirmed from "./components/confirmed";
import { useProduct } from "./context/ProductContext";

export default function App() {
  const { isConfirmed } = useProduct();
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
        <Products />

        <Cart />
      </main>

      {isConfirmed && (
        <>
          <OverLay />
          <Confirmed />
        </>
      )}
    </div>
  );
}
