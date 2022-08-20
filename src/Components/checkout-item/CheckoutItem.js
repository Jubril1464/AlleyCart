import React from 'react'
import './CheckoutItem.scss'
import { clearItemFromCart } from '../../Redux/cart/cart.actions'
import { useDispatch } from 'react-redux/es/exports'
import { addItem } from '../../Redux/cart/cart.actions'
import { removeItem } from '../../Redux/cart/cart.actions'

const CheckoutItem = ({ cartItems  }) => {
  const { name, quantity, imageURL, price } = cartItems
  const dispatch = useDispatch()
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageURL} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={ () => dispatch(removeItem(cartItems))}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(cartItems))}>&#10095;</div>
      </span>

      <span className="price">{price}</span>
      <div
        className="remove-btn"
        onClick={() => dispatch(clearItemFromCart(cartItems))}
      >
        &#10005;{" "}
      </div>
    </div>
  )
}

export default CheckoutItem