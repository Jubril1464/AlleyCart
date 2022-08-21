import { React } from "react"
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg"
// import { connect } from "react-redux"
import  {toggleCartHidden}  from "../../Redux/cart/cart.actions"
import "./cart-icon.scss"
import { useSelector, useDispatch } from "react-redux/es/exports"
import {GiShoppingCart} from 'react-icons/gi'
const CartIcon = () => {
  const total = useSelector(state => state.cartIcon.cartItems);
  const itemCount = total.reduce((accumulatedQuantity, cartItems) => (accumulatedQuantity + cartItems.quantity),0)
  const dispatch = useDispatch()
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      {/* <ShoppingIcon /> */}
      <GiShoppingCart className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: dispatch(toggleCartHidden),
// })
export default CartIcon
// export default connect(null, mapDispatchToProps)(CartIcon);
