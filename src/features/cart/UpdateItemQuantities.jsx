import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getPizzaNumberById,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantities({ pizzaId }) {
  const dispatch = useDispatch();
  const pizzaNumber = useSelector(getPizzaNumberById(pizzaId));
  function handleDecreaseItemQuantity(e) {
    e.preventDefault();
    dispatch(decreaseItemQuantity(pizzaId));
  }
  function handleIncreaseItemQuantity(e) {
    e.preventDefault();
    dispatch(increaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex place-items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleDecreaseItemQuantity}>
        -
      </Button>
      <span className="text-sm font-medium">{pizzaNumber}</span>
      <Button type="round" onClick={handleIncreaseItemQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantities;
