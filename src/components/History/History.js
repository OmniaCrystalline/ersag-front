import { useSelector } from 'react-redux'
import './History.style.css'
import {history} from '../../redux/selectors'

export const History = () => {
    const list = useSelector(history)
    return (
      <>
        order's history
        <ol className='history_orders_list'>
          {list.map((elem, index) => (
            <li key={index}>
              <ol className='history_order'>
                {elem.map(({ _id, title, price, quantity }) => (
                  <li key={_id + "order"}>
                    {title} - {price} grn - {quantity} quantity
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </>
    );
}