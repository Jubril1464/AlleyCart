import React from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from '../../Components/Collection-Preview/CollectionPreview'

const Jackets = () => {
    const selector = useSelector(state => state.shop.collections)
    const jackets = selector .filter(item => item.routeName === 'jackets')
  return (
      <div>
          {
              jackets.map(({ id, ...otherProps }) => (
                  <CollectionPreview key={id}{...otherProps} />
              ))
          }
          
    </div>
  )
}

export default Jackets