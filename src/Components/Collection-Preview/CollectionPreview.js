import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({title, items}) => {
  return (
      <div className='collection-preview'>
          <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
          <div className="collection-preview__preview">
              {items.filter((items, idx) => idx < 7)
                  .map((item) => (
                      
                  <CollectionItem key={item.id} item={item} />
              ))}
          </div>
    </div>
  )
}

export default CollectionPreview