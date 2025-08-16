import { useDispatch } from "react-redux";
import { Button } from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { deleteItem } from "./cartSlice";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";

function CartItem({ item, key }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }

  function handleIncreaseQuantity() {
    dispatch(increaseItemQuantity(pizzaId));
  }

  function handleDecreaseQuantity() {
    if (quantity <= 1) {
      dispatch(deleteItem(pizzaId));
      return;
    }

    dispatch(decreaseItemQuantity(pizzaId));
  }

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold ">{formatCurrency(totalPrice)}</p>
        <div className="space-x-2">
          <Button type="round1" onClick={handleIncreaseQuantity}>
            +
          </Button>
          <Button type="round1" onClick={handleDecreaseQuantity}>
            -
          </Button>
        </div>

        <Button type="small" onClick={handleDeleteItem}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
