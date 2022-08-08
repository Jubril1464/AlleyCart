import CartActionTypes from "./cart.type";
const toggleCartHidden = () => {
    return {
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}
export default toggleCartHidden
/// Action is a function that returns an object