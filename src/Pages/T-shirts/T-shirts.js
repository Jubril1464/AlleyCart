import React from "react"
import { useSelector } from "react-redux/es/exports"
import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview"

const TShirts = () => {
  const selector = useSelector((state) => state.shop.collections)
  const filtered = selector.filter((items) => items.routeName === "t-shirts")
  console.log(filtered)
  return (
    <div className="t-shirt">
      <div className="t-shirts__container">
        {filtered.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    </div>
  )
}

export default TShirts
