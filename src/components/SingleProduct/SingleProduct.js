/** @format */

import React, { useState } from "react";
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
  const { describe, usage, img } = elem;
  
   const box= "https://res.cloudinary.com/dligd0nd6/image/upload/v1728815696/razobx1fzbcqogyzblkw.jpg"
  
  const [url, seturl] = useState(img);

  return (
    <div className='single-wrapper'>
      <div className='single-img-wrapper'>
        <img src={url} alt='1' className='single-img' />
        <button
          className='arrow-l'
          onClick={() => seturl(url === img ? box : img)}>
          prev
        </button>
        <button
          className='arrow-r'
          onClick={() => seturl(url === img ? box : img)}>
          next
        </button>
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
  );
};

export default SingleProduct;
