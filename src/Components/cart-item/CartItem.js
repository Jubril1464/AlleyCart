import React from "react"
import "./CartItem.scss"

const CartItem = ({ item: { imageURL, price, name, quantity } }) => {
  return (
    <div className="cartItem">
      <img src={imageURL} alt="item" />
      <div className="cartItem__details">
        <span className="cartItem__name">{name}</span>
        <span className="price">{ quantity} x ${price}</span>
      </div>
    </div>
  )
}

export default CartItem
