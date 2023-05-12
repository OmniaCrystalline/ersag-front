/** @format */

import { useEffect } from "react";
import "./Products.style.css";
import { useDispatch, useSelector } from "react-redux";
import { getGoods } from "../../redux/operations";
import { products, isLoading, likes, basket } from "../../redux/selectors";
import { Pending } from "../Pending/Pending";
//import { URL } from "../../redux/operations";
import { likesSwitcher, basketSwitcher } from "../../redux/slice";

export const Products = () => {
  const list = useSelector(products);
  const pending = useSelector(isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  return (
    <div className='products_container'>
      {pending && <Pending />}
      {list.length > 0 && (
        <ul className='products_list'>
          {list.map((item) => (
            <ProductItem item={item} key={item._id} />
          ))}
        </ul>
      )}
    </div>
  );
};

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const likeList = useSelector(likes);
  const basketList = useSelector(basket);
  const { _id, img, title, price, volume } = item;

  return (
    <li className='product_item'>
      <div className='img_product'>
        <img src={img} alt={title} />
      </div>
      <div className='product_card_content'>
        <p>{title}</p>
        <p>price: {price}</p>
        <p>volume: {volume} ml</p>
      </div>
      <div className='btn_card_container'>
        <button
          type='button'
          className={
            basketList.findIndex((e) => e._id === _id) !== -1
              ? "btn_product active_btn"
              : "btn_product"
          }
          onClick={() => {
            dispatch(basketSwitcher(item));
          }}>
          toBasket
        </button>
        <button
          type='button'
          className={
            likeList.includes(_id) ? "btn_product active_btn" : "btn_product"
          }
          onClick={() => dispatch(likesSwitcher(_id))}>
          toLikes
        </button>
      </div>
    </li>
  );
};
