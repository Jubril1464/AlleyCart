import React from "react"
import { useSelector } from "react-redux/es/exports"
import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview"

const Jeans = () => {
  const selector = useSelector((state) => state.shop.collections)
  const filtered = selector.filter((items) => items.routeName === "jeans")
  console.log(filtered)
  return (
    <div className="jeans">
      <div className="jeans__container">
        {filtered.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    </div>
  )
}

export default  Jeans
