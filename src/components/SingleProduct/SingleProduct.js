/** @format */

import React from "react";
import "./SingleProduct.style.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { basketSwitcher, getCurrent, likesSwitcher } from "../../redux/slice";
import { current } from "../../redux/selectors";

const SingleProduct = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  dispatch(getCurrent(id));
  const elem = useSelector(current);
  const { describe, usage, img } = elem

  return (
    <>
      <div className='single-wrapper'>
        <div className='single-img-wrapper'>
            <img src={img} alt='' className='single-img' />
      </div>
      <div className='single-text-wrapper'>
        <div className='single-desc'>
          <b>Опис: </b>
          {describe}
        </div>
        <div className='single-usage'>
          <b>Використання: </b>
          {usage}
        </div>
        <div className='single-btn-wrapper'>
          <button
            className='single-btn'
            onClick={() => dispatch(likesSwitcher(id))}>
            До обраного
          </button>
          <button
            className='single-btn'
            onClick={() => dispatch(basketSwitcher(elem))}>
            В корзину
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default SingleProduct;
