import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalPizzaNumber } from "./cartSlice";

function CartOverview() {
  const pizzaNumber = useSelector(getTotalPizzaNumber);
  const totalCost = useSelector(getTotalCartPrice);
  if (!pizzaNumber) return null;
  return (
    <div className="flex place-items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaNumber} pizzas</span>
        <span>${totalCost}</span>
      </p>
      <Link to={"/cart"}>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
