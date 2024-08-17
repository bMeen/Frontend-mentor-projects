import { useEffect, useState } from "react";

export default function Products({
  products,
  onhandleAddToCart,
  onhandleIncreaseQuantity,
  onhandleDecreaseQuantity,
}) {
  return (
    <section className="md:basis-[70%]">
      <h1 className="text-4xl font-bold text-rose-900 mb-5">Desserts</h1>
      <ul className="mb-7 grid  gap-x-5 gap-y-8 md:grid-cols-2  lg:grid-cols-3">
        {products.map((product, i) => (
          <ProductItem
            product={product}
            key={product.name}
            onhandleAddToCart={onhandleAddToCart}
            onhandleIncreaseQuantity={onhandleIncreaseQuantity}
            onhandleDecreaseQuantity={onhandleDecreaseQuantity}
          />
        ))}
      </ul>
    </section>
  );
}

function ProductItem({
  product,
  onhandleAddToCart,
  onhandleIncreaseQuantity,
  onhandleDecreaseQuantity,
}) {
  const [imgSrc, setImgsrc] = useState("");

  const { image, name, category, price, isActive } = product;

  useEffect(function () {
    function loadResponsiveImg() {
      const width = window.innerWidth;

      if (width < 500) {
        setImgsrc(image.mobile);
      } else if (width >= 500 && width < 1024) {
        setImgsrc(image.tablet);
      } else setImgsrc(image.desktop);
    }

    loadResponsiveImg();
    window.addEventListener("resize", loadResponsiveImg);

    return () => window.removeEventListener("resize", loadResponsiveImg);
  }, []);

  return (
    <li className="max-w-[450px] mx-auto">
      <img
        src={imgSrc}
        alt="product-img"
        className={`rounded-lg ${isActive ? "border-[2px] border-red" : ""}`}
      />
      <button
        className={`block py-2 border-[1px]  rounded-full w-44 mx-auto -translate-y-2/4 hover:border-red ${
          isActive ? "bg-red border-red" : "bg-white border-rose-300"
        }`}
      >
        {isActive ? (
          <Counter
            product={product}
            onhandleIncreaseQuantity={onhandleIncreaseQuantity}
            onhandleDecreaseQuantity={onhandleDecreaseQuantity}
          />
        ) : (
          <AddToCartIcon
            product={product}
            onhandleAddToCart={onhandleAddToCart}
          />
        )}
      </button>
      <p className="mb-[2px] -mt-2">{category}</p>
      <h3 className="text-rose-900 font-semibold">{name}</h3>
      <p className="text-red font-semibold mt-[2px]">${price.toFixed(2)}</p>
    </li>
  );
}

function AddToCartIcon({ product, onhandleAddToCart }) {
  return (
    <div className="px-6 " onClick={() => onhandleAddToCart(product)}>
      <img
        src="./assets/images/icon-add-to-cart.svg"
        alt="icon"
        className="inline-block mr-1"
      />
      <span className="text-rose-900 font-semibold text-sm  hover:text-red">
        Add to Cart
      </span>
    </div>
  );
}

function Counter({
  product,
  onhandleIncreaseQuantity,
  onhandleDecreaseQuantity,
}) {
  const [hoverMinus, setHoverMinus] = useState(false);
  const [hoverPlus, setHoverPlus] = useState(false);

  return (
    <div className="px-2 flex justify-between items-center">
      <div
        className="border-[1px] border-white rounded-full hover:bg-white hover:border-red p-1"
        onMouseEnter={() => setHoverMinus(true)}
        onMouseLeave={() => setHoverMinus(false)}
        onClick={() => onhandleDecreaseQuantity(product)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path
            fill={hoverMinus ? "hsl(14, 86%, 42%)" : "#fff"}
            d="M0 .375h10v1.25H0V.375Z"
          />
        </svg>
      </div>

      <span className="text-white">{product.quantity}</span>

      <div
        className="border-[1px] border-white rounded-full hover:bg-white hover:border-red p-1"
        onMouseEnter={() => setHoverPlus(true)}
        onMouseLeave={() => setHoverPlus(false)}
        onClick={() => onhandleIncreaseQuantity(product)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill={hoverPlus ? "hsl(14, 86%, 42%)" : "#fff"}
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </div>
    </div>
  );
}
