/** @format */

import { useSelector, useDispatch } from "react-redux";
import "./WishList.style.css";
import { likes, products } from "../../redux/selectors";
import {likesSwitcher} from "../../redux/slice"

export const WishList = () => {
  const list = useSelector(likes);
  const goods = useSelector(products);
  const filtered = goods.filter((e) => list.includes(e._id));
  return (
    <div className="wishlist">
      wishlist
      <ul>
        {filtered.map((e) => <WishItem elem={e} key={e._id + 'wishlist'} /> )}
      </ul>
    </div>
  );
};

const WishItem = ({ elem }) => {
  const dispatch = useDispatch()
  const {title, price, usage, describe, _id} = elem
  return (
    <li key={elem._id}>
      <p>title: {title}</p>
      <p>price: {price}</p>
      <p>usage: {usage}</p>
      <p>description: {describe}</p>
      <button type='button' onClick={() => dispatch(likesSwitcher(_id))}>
        X
      </button>
    </li>
  );
};
