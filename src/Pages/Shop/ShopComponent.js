import { React, useState } from 'react'
import CollectionPreview from '../../Components/Collection-Preview/CollectionPreview'
import Shop_Data  from './ShopData'

const ShopComponent = () => {
    const [collection, setCollection] = useState(Shop_Data)
  return (
      <div className='shop-page'>
          {
              collection.map(({ id, ...otherItemsProps }) => (
                  <CollectionPreview key={id} {...otherItemsProps} />
              ))
          }
          
    </div>
  )
}

export default ShopComponent