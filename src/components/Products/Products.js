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
    <>
      {" "}
      products
      {pending && <Pending />}
      {list.length > 0 && (
        <ul>
          {list.map((item) => (
            <ProductItem item={item} key={item._id} />
          ))}
        </ul>
      )}
    </>
  );
};

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const likeList = useSelector(likes);
  const basketList = useSelector(basket);
  const { _id,
    //img,
    title, price, volume, quantity } = item;

  return (
    <li>
      {/*<img src={`${URL}/images/${img}`} alt={title} />*/}
      <p>title: {title}</p>
      <p>price: {price}</p>
      <p>volume: {volume}</p>
      <p>quantity: {quantity}</p>
      <button
        type='button'
        className={
          basketList.findIndex(e=>e._id ===_id) !== -1 ? "active_btn" : ""
        }
        onClick={() => {
          dispatch(basketSwitcher(item))
        }}>
        toBasket
      </button>
      <button
        type='button'
        className={likeList.includes(_id) ? "active_btn" : ""}
        onClick={() => dispatch(likesSwitcher(_id))}>
        toLikes
      </button>
    </li>
  );
};
