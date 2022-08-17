import React from 'react'
import Button from '../Button/Button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toggleCartHidden } from "../../Redux/cart/cart.actions"

const CartDropdown = () => {
  const navigate = useNavigate()
  let dispatch = useDispatch()
  const select = useSelector(state => state.cartIcon.cartItems)
  console.log(select);
  const handleCheckout = function () {
    navigate('/checkout')
    dispatch(toggleCartHidden())
  }
  return (
      <div className='cart-dropdown'>
      <div className="cart-dropdown__cart-items">
        {
          select.length ?
          (select.map(cartItems => (
            <CartItem key={cartItems.id} item={cartItems} />)
          ))
            : <span className='empty-message'>Your cart is empty!!!</span>
        }
              
          </div>
          <Button className='button' onClick={handleCheckout}>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown