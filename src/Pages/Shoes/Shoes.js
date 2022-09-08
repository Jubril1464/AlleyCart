import React from "react"
import { useSelector } from "react-redux/es/exports"
import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview"

const Shoes = () => {
  const selector = useSelector((state) => state.shop.collections)
  const filtered = selector.filter((items) => items.routeName === "shoes")
  console.log(filtered)
  return (
    <div className="shoes">
      <div className="shoes__container">
        {filtered.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    </div>
  )
}

export default Shoes
