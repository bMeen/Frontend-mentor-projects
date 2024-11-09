import ProductDescription from "./ProductDescription";
import ProductImg from "./ProductImg";

function Main() {
  return (
    <main className="mx-auto grid max-w-sm md:max-w-max md:grid-cols-2 md:place-items-center md:gap-20 md:p-10">
      <ProductImg />
      <ProductDescription />
    </main>
  );
}

export default Main;
