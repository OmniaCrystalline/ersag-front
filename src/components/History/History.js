/** @format */

import { useSelector } from "react-redux";
import "./History.style.css";
import { history } from "../../redux/selectors";

export const History = () => {
  const list = useSelector(history);
  return (
    <div className='historty_container'>
      order's history
      <ol className='history_orders_list'>
        {list.map(({ order, date }) => {
          return (
            <li key={date} className='list_item_history'>
              {date}
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
