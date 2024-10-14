/** @format */

import { useDispatch, useSelector } from "react-redux";
import "./Basket.style.css";
import { basket, isLoading, isRejected } from "../../redux/selectors";
import { changeQuantity, basketSwitcher } from "../../redux/slice";
import { useState, useRef } from "react";
import { addOrder } from "../../redux/operations";
import { Pending } from "../Pending/Pending";

export const Basket = () => {
  const basketed = useSelector(basket);
  const [open, setopen] = useState(false);

  const sum = basketed.reduce((acc, cur) => {
    return (acc += cur.quantity * cur.price);
  }, 0);

  return (
    <div className='basket'>
      {basketed.length === 0 && <p>basket is empty, add something</p>}
      <ul className='basket_list'>
        {basketed.map((e, index) => (
          <BasketItem key={e._id + "basket"} index={index} elem={e} />
        ))}
      </ul>
      sum: {sum}grn
      <button
        className='basket_btn'
        type='button'
        disabled={basketed.length === 0}
        onClick={() => setopen(!open)}>
        {open ? "close data form" : "open data form"}
      </button>
      {open && basketed.length !== 0 && <UserData />}
    </div>
  );
};

const BasketItem = ({ elem, index }) => {
  const dispatch = useDispatch();
  const { price, title, _id, volume, quantity, img } = elem;

  const handleChange = (e) => {
    if (e.target.value === "") return;
    dispatch(changeQuantity([_id, e.target.value]));
  };

  return (
    <li>
      <div className='table'>
        <span>
          {index + 1}-{title}
        </span>
        <span className='img_container_basket'>
          <img className='basket_img' src={img} alt={title} />
        </span>
        <span>{price}grn</span>
        <span>{volume}ml</span>
        <span className='input_holder'>
          <input
            className='quantity_field'
            type='number'
            placeholder={quantity}
            onChange={handleChange}
          />
        </span>
        <span>{price * quantity} grn</span>
        <button
          className='basket_remove_btn'
          type='button'
          onClick={() => dispatch(basketSwitcher(elem))}>
          x
        </button>
      </div>
    </li>
  );
};

const UserData = () => {
  const name = useRef(undefined);
  const phone = useRef(undefined);
  const dispatch = useDispatch();
  const basketed = useSelector(basket);
  const pending = useSelector(isLoading);
  const reject = useSelector(isRejected);

  const sendOrder = (e) => {
    const form = document.querySelector(".user_data");
    e.preventDefault();

    dispatch(
      addOrder({
        name: name.current.value,
        phone: phone.current.value,
        order: basketed,
        date: new Date(),
      })
    );
    form.reset();
  };
  return (
    <>
      {reject && <span>something went wrong...</span>}
      {pending && <Pending />}
      <form className='user_data' onSubmit={sendOrder}>
        <input
          placeholder='name'
          required
          id='name'
          type='text'
          name='name'
          ref={name}></input>
        <input
          placeholder='phone'
          required
          id='phone'
          type='text'
          name='phone'
          ref={phone}></input>
        <button className='btn_order' type='submit'>
          send
        </button>
      </form>
    </>
  );
};
