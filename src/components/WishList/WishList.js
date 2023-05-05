/** @format */

import { useSelector } from "react-redux";
import "./WishList.style.css";
import { likes, products } from "../../redux/selectors";

export const WishList = () => {
  const list = useSelector(likes);
  const goods = useSelector(products);
  const filtered = goods.filter((e) => list.includes(e._id));
  return (
    <>
      wishlist
      <ul>
        {filtered.map((e) => <WishItem elem={e} /> )}
      </ul>
    </>
  );
};

const WishItem = ({ elem }) => {
  return (
    <li key={elem._id}>
      <p>title: {elem.title}</p>
      <p>price: {elem.price}</p>
    </li>
  );
};
