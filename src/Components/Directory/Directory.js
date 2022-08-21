import { React } from 'react';
import MenuList from "../MenuList/MenuList"
import './Directory.scss'
import { useSelector } from 'react-redux';


function Directory() {
    
    const lists = useSelector(state => state.directory.items)
    console.log(lists); 
    
  return (
      <div className='directory__container'>
          {
              lists.map(({ title, imageURL, size }) => (
                  <MenuList title={title} imageURL={imageURL} size={ size } />
              ))
         }
          
          

    </div>
  )
}

export default Directory