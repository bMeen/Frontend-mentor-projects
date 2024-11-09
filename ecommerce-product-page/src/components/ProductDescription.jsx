import ButtonGroup from "../ui/ButtonGroup";
import Price from "../ui/Price";

function ProductDescription() {
  return (
    <section className="space-y-5 p-4 md:p-0">
      <p className="color text-sm font-bold uppercase tracking-widest text-dark-grayish-blue md:text-xs">
        Sneaker Company
      </p>
      <h1 className="text-3xl font-bold text-very-dark-blue md:text-4xl">
        Fall Limited Edition <br /> Sneakers
      </h1>
      <p className="text-base leading-6 text-dark-grayish-blue">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, theyll withstand everything the
        weather can offer.
      </p>

      <Price />
      <ButtonGroup />
    </section>
  );
}

export default ProductDescription;
