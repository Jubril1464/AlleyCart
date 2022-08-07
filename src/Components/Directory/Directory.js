import { React, useState } from 'react';
import img1 from '../../Assets/T-shirts/tshirt4.jpg'
import img2 from "../../Assets/GirlsDress/girl3.jpg"
import img3 from "../../Assets/Bag/bag1.jpg"
import img4 from "../../Assets/Shoes/shoe2.jpg"
import img5 from "../../Assets/Jeans/photo7.jpg"
import MenuList from "../MenuList/MenuList"
import './Directory.scss'
const items = [
    {
        title: 'Men',
        imageURL: img1

    },
    {
        title: 'Women',
        imageURL: img2
    },
    {
        title: 'Bags',
        imageURL: img3
    },
    {
        title: 'Shoes',
        imageURL: img4,
        
    },
    {
        title: 'Jeans',
        imageURL: img5,
        
    },
    {
        title: 'Kids',
        imageURL: img5,
        
    }

]

function Directory() {
    const [list, setList] = useState(items)
    
  return (
      <div className='directory__container'>
          {
              list.map(({ title, imageURL, size }) => (
                  <MenuList title={title} imageURL={imageURL} size={ size } />
              ))
         }
          
          

    </div>
  )
}

export default Directory