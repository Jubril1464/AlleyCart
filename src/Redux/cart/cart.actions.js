import CartActionTypes from "./cart.type";
 export const toggleCartHidden = () => {
    return {
      type: CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}
export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item

  }
}

/// Action is a function that returns an object