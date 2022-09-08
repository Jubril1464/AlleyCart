import React from 'react'
import { useSelector } from 'react-redux'
import CollectionPreview from '../Collection-Preview/CollectionPreview';
import {useParams} from 'react-router-dom'


const CollectionOverview = ({ category }) => {
  const params = useParams()
  const collection = useSelector(state => state.shop.collections)
  let filteredCollection = collection.filter((item) => params.name === item.title)
  
    console.log(collection);  
    // console.log(recent);
  return (
      <div className="collectionOverview">
         
          {collection.map(({ id, ...otherItemsProps }) => (
          <CollectionPreview key={id} {...otherItemsProps} />

      ))}
    </div>
  )
}

export default CollectionOverview