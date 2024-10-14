import "./Header.style.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
      <nav className='nav container'>
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
        </div>
      </nav>
    );
}