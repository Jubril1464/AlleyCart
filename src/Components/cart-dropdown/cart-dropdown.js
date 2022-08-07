import React from 'react'
import Button from '../Button/Button'
import './cart-dropdown.scss'

const CartDropdown = () => {
  return (
      <div className='cart-dropdown'>
          <div className="cart-dropdown__cart-items">
              
          </div>
          <Button className='button'>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown