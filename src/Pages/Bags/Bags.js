import React from "react"
import { useSelector } from "react-redux/es/exports"
import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview"

const Bags = () => {
  const selector = useSelector((state) => state.shop.collections)
  const filtered = selector.filter((items) => items.routeName === "bags")
  console.log(filtered)
  return (
    <div className="bags">
      <div className="bags__container">
        {filtered.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    </div>
  )
}

export default Bags
