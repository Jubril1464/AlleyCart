import React from "react"
import { useSelector } from "react-redux"
import CollectionPreview from "../../Components/Collection-Preview/CollectionPreview"

const Women = () => {
  const selector = useSelector((state) => state.shop.collections)
  console.log(selector);
  const women = selector.filter((item) => item.routeName === "women")
  console.log(women)
  return (
    <div>
      {women.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Women
