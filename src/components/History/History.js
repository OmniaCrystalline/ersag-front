/** @format */

import { useDispatch, useSelector } from "react-redux";
import "./History.style.css";
import { history } from "../../redux/selectors";
import { reset } from "../../redux/slice";

export const History = () => {
  const list = useSelector(history);
  const dispatch = useDispatch();
  return (
    <div className='historty_container'>
      <div className='heading_history'>
        <p>order's history</p>
        <button
          className='history_reset_btn'
          type='button'
          onClick={() => dispatch(reset())}>
          reset orders history
        </button>
      </div>
      {list.length === 1 && <p>you didn't make orders yet</p>}
      <ol className='history_orders_list'>
        {list &&
          list.length > 1 &&
          list.map(({ order, date }, index) => {
            const d = new Date(date);
            return (
              <li key={index} className='list_item_history'>
                {date !== null && d.toDateString()}
                <ol className='history_orders_list'>
                  {order.map(({ title, quantity, price, _id }) => (
                    <li key={_id + "history"} className='list_item_history'>
                      {title} - {quantity} - {price}
                    </li>
                  ))}
                </ol>
              </li>
            );
          })}
      </ol>
    </div>
  );
};
