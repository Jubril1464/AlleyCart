import img1 from "../../Assets/T-shirts/tshirt4.jpg"
import img2 from "../../Assets/GirlsDress/girl3.jpg"
import img3 from "../../Assets/Bag/bag1.jpg"
import img4 from "../../Assets/sneakers/shoe2.jpg"
import img5 from "../../Assets/Jeans/photo7.jpg"
import img6 from '../../Assets/T-shirts/tshirt1.jpg'
import img7 from '../../Assets/jackets/black-shearling.png'
import img8 from '../../Assets/hats/blue-beanie.png'
import img9 from '../../Assets/GirlsDress/girl1.jpg'

const INITIAL_STATE = {
  items: [
    {
      title: "Men",
      imageURL: img1,
      id: 1,
      routeName : 'mens'
    },
    {
      title: "Women",
      imageURL: img2,
      id: 2,
      routeName : 'women'
    },
    {
      title: "Bags",
      imageURL: img3,
      id: 3,
      routeName : 'bags'
    },
    {
      title: "Shoes",
      imageURL: img4,
      id: 4,
      routeName : 'shoes'
    },
    {
      title: "Jeans",
      imageURL: img5,
      id: 5,
      routeName: 'jeans'
    },
    {
      title: "T-Shirts",
      imageURL: img6,
      id: 6,
      routeName: 't-shirts'
    },
    {
      title: "Jackets",
      imageURL: img7,
      id: 7,
      routeName: 'jackets'
    },
    {
      title: "Hats",
      imageURL: img8,
      id: 8,
      routeName: 'hats'
    },
    {
      title: "Girl Dress",
      imageURL: img9,
      id: 9,
      routeName: 'girls'
    },
  ],
}
const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: 
            return state
    }
}
export default directoryReducer