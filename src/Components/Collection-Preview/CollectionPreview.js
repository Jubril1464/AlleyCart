import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './CollectionPreview.scss'

const CollectionPreview = ({title, items}) => {
  return (
      <div className='collection-preview'>
          <h1 className="collection-preview__title">{title.toUpperCase()}</h1>
          <div className="collection-preview__preview">
              {items.filter((items, idx) => idx < 7)
                  .map(({ id, ...otherItemProps }) => (
                      
                  <CollectionItem key={id} {...otherItemProps} />
              ))}
          </div>
    </div>
  )
}

export default CollectionPreview