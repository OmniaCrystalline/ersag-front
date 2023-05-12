/** @format */

import { useSelector, useDispatch } from "react-redux";
import "./WishList.style.css";
import { likes, products } from "../../redux/selectors";
import { likesSwitcher } from "../../redux/slice";

export const WishList = () => {
  const list = useSelector(likes);
  const goods = useSelector(products);
  const filtered = goods.filter((e) => list.includes(e._id));
  return (
    <div className='wishlist_container'>
      {filtered.length === 0 && <p>list is empty, add someting</p>}
      <ul className='wishlist'>
        {filtered.map((e) => (
          <WishItem elem={e} key={e._id + "wishlist"} />
        ))}
      </ul>
    </div>
  );
};

const WishItem = ({ elem }) => {
  const dispatch = useDispatch();
  const { title, usage, describe, _id, img } = elem;
  return (
    <li className='wishlist_item' key={elem._id}>
      <div className='img_wishlist_container'>
        <img className='wishlist_img' width='150px' src={img} alt={title} />
      </div>
      <div className='wishlist_content'>
        <p>{title}</p>
        <p>{describe}</p>

        <p>{usage}</p>
        <button
          type='button'
          className='wishlist_btn'
          onClick={() => dispatch(likesSwitcher(_id))}>
          x
        </button>
      </div>
    </li>
  );
};
