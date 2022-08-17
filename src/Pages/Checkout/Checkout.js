import React from 'react'
import './Checkout.scss'
import { useSelector } from 'react-redux'
import { BsArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import CheckoutItem from '../../Components/checkout-item/CheckoutItem'


const Checkout = () => {
  const navigate = useNavigate()
  const selector = useSelector(state => state.cartIcon.cartItems)
  const total = selector.reduce((accumulatedQuantity, cartItems)=> (accumulatedQuantity + cartItems.quantity * cartItems.price),0)
  return (
    <div className="checkout">
      <BsArrowLeft className='back-icon' onClick={() => navigate(-1) }/>
      <div className="checkout__container">
        <div className="checkout__header">
          <div className="checkout__header--element">
            <span>Products</span>
          </div>
          <div className="checkout__header--element">
            <span>Description</span>
          </div>
          <div className="checkout__header--element">
            <span>Quantity</span>
          </div>
          <div className="checkout__header--element">
            <span>Price</span>
          </div>
          <div className="checkout__header--element">
            <span>Remove</span>
          </div>
        </div>

        {
          selector.map(cartItems => 
            <CheckoutItem key={cartItems.id} cartItems={cartItems} />
            
            )
        }
        <div className="checkout__total">
          <span>TOTAL:
            ${total}</span>
        </div>
      </div>
    </div>
  )
}

export default Checkout