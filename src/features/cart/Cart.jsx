import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";

function Cart() {
  const cart = useSelector(getCart);
  const userName = useSelector((store) => store.user.userName);
  const dispatch = useDispatch();

  function handleClearCart(e) {
    e.preventDefault();
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="flex h-full flex-grow flex-col px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold capitalize">
        Your cart, {userName}
      </h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-auto space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
