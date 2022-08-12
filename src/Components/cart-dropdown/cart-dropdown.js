import React from 'react'
import Button from '../Button/Button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/CartItem'
import { useSelector } from 'react-redux'
const CartDropdown = () => {
  const select = useSelector(state => state.cartIcon.cartItems)
  console.log(select);
  return (
      <div className='cart-dropdown'>
      <div className="cart-dropdown__cart-items">
        {
          select.map(cartItems => (
            <CartItem key={cartItems.id} item={cartItems} />
          ))
        }
              
          </div>
          <Button className='button'>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown