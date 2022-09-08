import React from "react"
import "./MenuList.scss"
import {Link} from 'react-router-dom'

function MenuList({ title, imageURL, routeName }) {
  return (
    <div
      className="menulist__container"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <Link to={`/${routeName}`}>
        <div className="content">
          <h1 className="content__title">{title}</h1>
          <span>Shop Now</span>
        </div>
      </Link>
    </div>
  )
}

export default MenuList
