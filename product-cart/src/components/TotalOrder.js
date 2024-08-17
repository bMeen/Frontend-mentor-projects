export default function TotalOrder({ totalOrderAmount }) {
  return (
    <div className="flex items-center justify-between py-5 text-rose-900">
      <p className="text-sm">Order Total</p>
      <p className="text-2xl font-bold">${totalOrderAmount.toFixed(2)}</p>
    </div>
  );
}
