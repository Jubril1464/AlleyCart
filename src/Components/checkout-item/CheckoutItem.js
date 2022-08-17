import React from 'react'
import './CheckoutItem.scss'


const CheckoutItem = ({cartItems : {name, quantity, imageURL, price}}) => {
  return (
      <div className='checkout-item'>
          <div className="image-container">
              <img src={imageURL} alt="item" />
          </div>
          <span className='name'>{ name}</span>
          <span className='quantity'>{ quantity }</span>
          <span className='price'>{price }</span>
          <div className="remove-btn">&#10005; </div>
    </div>
  )
}

export default CheckoutItem