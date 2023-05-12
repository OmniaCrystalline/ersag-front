/** @format */

import { useSelector } from "react-redux";
import "./History.style.css";
import { history } from "../../redux/selectors";

export const History = () => {
  const list = useSelector(history);
  console.log('list', list)
  return (
    <div className='historty_container'>
      order's history
      <ol className='history_orders_list'>
        {list.map(({ order, date }, index) => {
          const d = new Date(date);
          console.log('date', d)

          return (
            <li key={index} className='list_item_history'>
              {d.toDateString()}
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
