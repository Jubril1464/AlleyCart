import React from "react"
import "./Nav.scss"
import { AiOutlineSearch } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "../context/userAuthContext"
import CartIcon from "./cart-icon/cart-icon"
import CartDropdown from "./cart-dropdown/cart-dropdown"
import { useSelector } from "react-redux/es/exports"

function Nav() {
  const { logOut, user } = useUserAuth()
  const navigate = useNavigate()
  const handleLogOut = async () => {
    try {
      await logOut()
      navigate("/signin")
    } catch (err) {
      console.log(err.message)
    }
  }
  const hidden = useSelector((state) => state.cartIcon.hidden)
  return (
    <div className="nav__container">
      <div className="nav__logo">
        <h1 className="nav__logo--text">
          Alley<span>Cart</span>
        </h1>
      </div>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          className="searchbar__input"
        />
        <AiOutlineSearch className="searchbar__icon" />
      </div>
      <ul className="nav__menu">
        
        
        <Link to="/checkout">
          {" "}
          <li className="nav__menu--items checkout">Checkout</li>{" "}
        </Link>
        <li className="nav__menu--items cart-icon">
          <CartIcon  />
        </li> 
        {user ? (
          <li className="nav__menu--items sign-In" onClick={handleLogOut}>
            SignOut
          </li>
        ) : (
          <Link to="/signin">
            <li className="nav__menu--items sign-In">SignIn</li>
          </Link>
        )}
      </ul>
      {hidden ? null : <CartDropdown />}
    </div>
  )
}
export default Nav
