import React from "react"
import { useSelector } from "react-redux/es/exports"
import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview"

const Sneakers = () => {
  const selector = useSelector((state) => state.shop.collections)
  const filtered = selector.filter((items) => items.routeName === "sneakers")
  console.log(filtered)
  return (
    <div className="sneakers">
      <div className="sneakers__container">
        {filtered.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    </div>
  )
}

export default Sneakers
