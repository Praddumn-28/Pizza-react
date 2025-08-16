/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { useSelector } from "react-redux";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map(function (pizza) {
        return <MenuItem pizza={pizza} key={pizza.id} />;
      })}
    </ul>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
