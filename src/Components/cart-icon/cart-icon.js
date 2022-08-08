import { React } from "react"
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg"
// import { connect } from "react-redux"
import  toggleCartHidden  from "../../Redux/cart/cart.actions"
import "./cart-icon.scss"
import { useSelector, useDispatch } from "react-redux/es/exports"
const CartIcon = () => {
  const icon = useSelector(state => console.log(state.cartIcon))
  const dispatch = useDispatch()
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
      
    </div>
  )
}
// const mapDispatchToProps = (dispatch) => ({
//   toggleCartHidden: dispatch(toggleCartHidden),
// })
export default CartIcon
// export default connect(null, mapDispatchToProps)(CartIcon);
