import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalPizzaQuantity = useSelector(function (state) {
    return state.cart.cart.reduce(function (sum, citem) {
      return sum + citem.quantity;
    }, 0);
  });

  const totalPizzaPrice = useSelector(function (state) {
    return formatCurrency(
      state.cart.cart.reduce(function (sum, citem) {
        return sum + citem.totalPrice;
      }, 0),
    );
  });

  if (totalPizzaQuantity === 0) {
    return null;
  }

  return (
    <div className="md:text-centre flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalPizzaQuantity} pizzas</span>
        <span>{totalPizzaPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
