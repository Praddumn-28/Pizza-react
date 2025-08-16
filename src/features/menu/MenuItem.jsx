import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { Button } from "../../ui/Button";
import {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increaseItemQuantity,
} from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const cartData = useSelector(function (state) {
    return state.cart.cart;
  });

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const arr = cartData.filter(function (citem) {
    return citem.pizzaId === id;
  });

  const [pizzaObject] = arr;

  const isPresent = arr.length > 0 && pizzaObject.quantity > 0;

  function handleDeleteFromMenu() {
    dispatch(deleteItem(id));
  }

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    if (isPresent === false) {
      dispatch(addItem(newItem));
    }

    // if (isPresent === true) {
    //   dispatch(increaseItemQuantity(id));
  }

  function handleIncreasePizzaQuantity() {
    dispatch(increaseItemQuantity(id));
  }

  function handleDecreasePizzaQuantity() {
    if (pizzaObject.quantity <= 1) {
      dispatch(deleteItem(id));
      return;
    }
    dispatch(decreaseItemQuantity(id));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex  items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          <Button
            type="small"
            disabled={arr.length > 0 && pizzaObject.quantity > 0 ? false : true}
            onClick={handleDeleteFromMenu}
          >
            Delete
          </Button>

          <div className="di flex items-center space-x-1 ">
            <Button
              type="round"
              soldOut={soldOut}
              onClick={handleIncreasePizzaQuantity}
            >
              +
            </Button>
            <p>{soldOut ? 0 : pizzaObject?.quantity ?? 1}</p>
            <Button
              type="round"
              soldOut={soldOut}
              onClick={handleDecreasePizzaQuantity}
            >
              -
            </Button>
          </div>

          <Button type="small" soldOut={soldOut} onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
