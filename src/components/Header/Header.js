import { useDispatch } from "react-redux";
import "./Header.style.css"
import { NavLink } from "react-router-dom"
import { reset } from "../../redux/slice";

export const Header = () => {
  const dispatch = useDispatch()
    return (
      <nav className='nav'>
        <div className='navlinks_container'>
          <NavLink className='navlink' to='/products'>
            products
          </NavLink>
          <NavLink className='navlink' to='/wishlist'>
            wishlist
          </NavLink>
          <NavLink className='navlink' to='/basket'>
            basket
          </NavLink>
          <NavLink className='navlink' to='/history'>
            history
          </NavLink>
          <button className="header_btn" type='button' onClick={()=>dispatch(reset())}>reset order history</button>
        </div>
      </nav>
    );
}