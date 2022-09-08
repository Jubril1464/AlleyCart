import "./App.scss"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Homepage from "./Pages/Homepage/HomePage"
import { UserAuthContextProvider } from "./context/userAuthContext"
import SignIn from "./Components/SignInAndSignUp/SignIn"
import SignUp from "./Components/SignInAndSignUp/SignUp"
import ProtectedRoute from "./Components/ProtectedRoute"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Checkout from "./Pages/Checkout/Checkout"
import Error from "./Pages/error/error"
import {useLocation} from 'react-router-dom'
import Hats from "./Pages/hats/Hats"
import Women from "./Pages/women/Women"
import Mens from "./Pages/men/Men"
import Jackets from "./Pages/jackets/Jackets"
import Jeans from "./Pages/Jeans/Jeans"
import Sneakers from "./Pages/Sneakers/Sneakers"
import TShirts from "./Pages/T-shirts/T-shirts"
import Shoes from "./Pages/Shoes/Shoes"
import Bags from "./Pages/Bags/Bags"
function App() {
  const location = useLocation()
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Nav />
        <Routes Location={location} key={location.pathname}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />}></Route>
          {/* <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <ShopComponent />
              </ProtectedRoute>
            }
          /> */}
          <Route path="/hats" element={<Hats />} />
          <Route path="/women" element={<Women />} />
          <Route path="/mens" element={<Mens />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/jeans" element={<Jeans />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/t-shirts" element={<TShirts />} />
          <Route path="/shoes" element={<Shoes />} />
          <Route path="/bags" element={<Bags />} />
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
          <Route exact path="/checkout" element={<Checkout></Checkout>}></Route>
          {/* <Route path='*' element={<Error></Error>} /> */}
        </Routes>
      </UserAuthContextProvider>
      <ToastContainer />
    </div>
  )
}

export default App
