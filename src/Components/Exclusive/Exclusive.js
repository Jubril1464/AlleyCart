import { React, useState } from "react"
import img1 from "../../Assets/T-shirts/tshirt1.jpg"
import img2 from "../../Assets/sneakers/shoe1.jpg"
import img3 from "../../Assets/GirlsDress/girl1.jpg"
import "./Exclusive.scss"
import Button from "../Button/Button"

const exclusiveList = [
  {
    title: "Plain White T-Shirth",
    imageURL: img1,
    percentOff: "-70%",
    id: 1,
    price: "$100",
  },
  {
    title: "Comfort Nike Sneaker",
    imageURL: img2,
    percentOff: "-70%",
    id: 2,
    price: "$150",
  },
  {
    title: "Comfort Gown",
    imageURL: img3,
    percentOff: "-70%",
    id: 3,
    price: "$50",
  },
]

function Exclusive() {
  const [section, setSection] = useState(exclusiveList)
  return (
    <div className="exclusiveContainer">
      {section.map(({ imageURL, title, percentOff, id, price }) => (
        <div className="item__container" key={id}>
          <span className="item__percent">{percentOff}</span>
          <Button className="btn--primary btn--cart">Buy Now</Button>
          {/* <Button className="btn--primary">Add to Cart</Button> */}
          <img src={imageURL} alt="" className="item__img" />
          <div className="hiddenContainer"></div>
          <h2 className="item__price">{price}</h2>
          <h3 className="item__text">{title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Exclusive
