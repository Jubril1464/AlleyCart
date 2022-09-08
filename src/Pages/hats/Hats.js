import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import CollectionPreview from '../../Components/Collection-Preview/CollectionPreview'

const Hats = () => {
    const selector = useSelector(state => state.shop.collections)
    const filtered = selector.filter(items => items.routeName === 'hats')
    console.log(filtered);
  return (
      <div className='hats'>
          <div className="hats__container">
              {
                  
                  filtered.map(({ id, ...otherProps }) => (
                      <CollectionPreview key={id} {...otherProps} />
                     
                  ))
              }
          </div>
    </div>
  )
}

export default Hats
