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
export const removeItem = (item) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload : item
  }
}
export const clearItemFromCart = (item) => {
  return {
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
  }
}

/// Action is a function that returns an object