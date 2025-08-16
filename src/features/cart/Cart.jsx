import { LinkButton } from "../../ui/LinkButton";
import { Button } from "../../ui/Button";
import CartItem from "./CartItem";
import { clearCart } from "./cartSlice";
import { useSelector, useDispatch } from "react-redux";
import EmptyCart from "../cart/EmptyCart";

function Cart() {
  const dispatch = useDispatch();

  const userName = useSelector(function (state) {
    return state.user.userName;
  });
  const cart = useSelector(function (state) {
    return state.cart.cart;
  });

  const cartSize = useSelector(function (state) {
    return state.cart.cart.length;
  });

  if (cartSize === 0) {
    return <EmptyCart />;
  }

  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold"> Your cart, {userName}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map(function (item) {
          return <CartItem item={item} key={item.id} />;
        })}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary" cartSize={cartSize}>
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
