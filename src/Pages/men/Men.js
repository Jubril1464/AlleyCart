import React from "react"
import { useSelector } from "react-redux"
import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview"

const Mens = () => {
  const selector = useSelector((state) => state.shop.collections)
  const men = selector.filter((item) => item.routeName === "mens")
  return (
    <div>
      {men.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Mens
