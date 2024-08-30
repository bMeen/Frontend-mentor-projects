import { useProduct } from "../context/ProductContext";

export default function TotalOrder() {
  const { cart } = useProduct();
  const totalOrderAmount = cart
    .map((item) => item.price * item.quantity)
    .reduce((acc, cur) => acc + cur, 0);
  return (
    <div className="flex items-center justify-between py-5 text-rose-900">
      <p className="text-sm">Order Total</p>
      <p className="text-2xl font-bold">${totalOrderAmount.toFixed(2)}</p>
    </div>
  );
}
