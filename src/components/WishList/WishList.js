/** @format */

import { useSelector, useDispatch } from "react-redux";
import "./WishList.style.css";
import { likes, products, basket } from "../../redux/selectors";
import { likesSwitcher, basketSwitcher } from "../../redux/slice";

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
  const basketList = useSelector(basket);
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
        <div className='btn_wishlist_container'>
          <button
            type='button'
            className={
              basketList.findIndex((e) => e._id === _id) !== -1
                ? "btn_product"
                : "btn_product active_btn"
            }
            onClick={() => {
              dispatch(basketSwitcher(elem));
            }}>
            {basketList.findIndex((e) => e._id === _id) !== -1
              ? "removeFromBasket"
              : "addToBasket"}
          </button>
          <button
            type='button'
            className='wishlist_btn'
            onClick={() => dispatch(likesSwitcher(_id))}>
            x
          </button>
        </div>
      </div>
    </li>
  );
};
