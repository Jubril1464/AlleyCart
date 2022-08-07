import React from "react"
import "./CollectionItem.scss"
import Button from "../Button/Button"

const CollectionItem = ({ id, name, price, imageURL, about }) => {
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
      <Button color="#64748b" borderRadius="4px" className="addBtn">
        Add to Cart
      </Button>
    </div>
  )
}

export default CollectionItem
