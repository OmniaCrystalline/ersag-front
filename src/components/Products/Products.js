/** @format */

import { useEffect, useState } from "react";
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
  const [search, setsearch] = useState("");
  const [body, setbody] = useState(true);
  const [clean, setclean] = useState(true);
  const [parfume, setparfume] = useState(true);

  useEffect(() => {
    dispatch(getGoods());
  }, [dispatch]);

  const filter = (data, val) => {
    const { body, search, clean, parfume } = data;
    if (body) setbody(val);
    if (search) setsearch(val);
    if (body) setbody(val);
    if (clean) setclean(val);
    if (parfume) setparfume(val);
  };

  const filtered = list
    .filter((e) => e.title.toLowerCase().includes(search))
    .filter((e) => (clean ? e : e.type !== "clean"))
    .filter((e) => (!parfume ? !e.title.toLowerCase().includes("пар") : e))
    .filter((e) => (!body ? !e.title.toLowerCase().includes("шамп") : e))
    .filter((e) => (!body ? !e.title.toLowerCase().includes("душу") : e));

  return (
    <div className='products_container'>
      {pending && <Pending />}
      <SearchBar callback={filter} />
      {list.length > 0 && (
        <ul className='products_list'>
          {filtered.map((item) => (
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

const SearchBar = ({ callback }) => {
  const searchChange = (e) => {
    const val = e.target.value;
    const checked = e.target.checked;
    const data = e.target.dataset;
    if (data.search) callback(data, val);
    else {
      callback(data, checked);
    }
  };
  return (
    <div>
      <form className='filter' onChange={searchChange}>
        <input
          type='text'
          data-search
          placeholder='search'
          className='search'></input>
        <label>
          <input
            type='checkbox'
            data-parfume
            value='parfume'
            defaultChecked></input>
          parfume
        </label>
        <label>
          <input
            type='checkbox'
            data-clean
            value='clean'
            defaultChecked></input>
          clean house
        </label>
        <label>
          <input type='checkbox' data-body value='body' defaultChecked></input>
          body care
        </label>
      </form>
    </div>
  );
};
