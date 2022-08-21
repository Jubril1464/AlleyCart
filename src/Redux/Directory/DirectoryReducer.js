import img1 from "../../Assets/T-shirts/tshirt4.jpg"
import img2 from "../../Assets/GirlsDress/girl3.jpg"
import img3 from "../../Assets/Bag/bag1.jpg"
import img4 from "../../Assets/Shoes/shoe2.jpg"
import img5 from "../../Assets/Jeans/photo7.jpg"
const INITIAL_STATE = {
  items: [
    {
      title: "Men",
      imageURL: img1,
      id: 1,
    },
    {
      title: "Women",
      imageURL: img2,
      id: 2,
    },
    {
      title: "Bags",
      imageURL: img3,
      id: 3,
    },
    {
      title: "Shoes",
      imageURL: img4,
      id: 4,
    },
    {
      title: "Jeans",
      imageURL: img5,
      id: 5,
    },
    {
      title: "Kids",
      imageURL: img5,
      id: 6,
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