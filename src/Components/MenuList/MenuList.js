import React from "react"
import "./MenuList.scss"

function MenuList({ title, imageURL }) {
  return (
    <div
      className="menulist__container"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className="content">
        <h1 className="content__title">{title}</h1>
        <span>Shop Now</span>
      </div>
    </div>
  )
}

export default MenuList
