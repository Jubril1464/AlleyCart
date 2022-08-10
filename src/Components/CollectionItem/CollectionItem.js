import React from "react"
import "./CollectionItem.scss"
import Button from "../Button/Button";
import { GiShoppingCart } from 'react-icons/gi'
import { addItem } from "../../Redux/cart/cart.actions";
import { useSelector, useDispatch } from "react-redux";

const CollectionItem = ({ item }) => {
  const { id, name, price, imageURL, about} = item

  const dispatch = useDispatch()
  return (
    <div className="collection-item">
      <img
        src={imageURL}
        alt=""
        className="collection-item__image margin-bottom-medium"
      />
      <span className="collection-item__price">${price}</span>
      <span className="collection-item__name">{name}</span>

      <p className="collection-item__about">{about}</p>
      <Button color="#64748b" borderRadius="4px" className="addBtn" onClick={()=> dispatch(addItem(item))}>
        Add to Cart <GiShoppingCart></GiShoppingCart>
      </Button>
    </div>
  )
}

export default CollectionItem
