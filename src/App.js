import "./App.scss"
import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Nav from "./Components/Nav"
import Homepage from "./Pages/Homepage/HomePage"
import { UserAuthContextProvider } from "./context/userAuthContext"
import ShopComponent from "./Pages/Shop/ShopComponent"
import SignIn from "./Components/SignInAndSignUp/SignIn"
import SignUp from "./Components/SignInAndSignUp/SignUp"
import ProtectedRoute from "./Components/ProtectedRoute"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />}></Route>
          <Route
            path="/shop"
            element={
              <ProtectedRoute>
                <ShopComponent />
              </ProtectedRoute>
            }
          />
          <Route
            exact
            path="/"
            element={
              <ProtectedRoute>
                <Homepage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserAuthContextProvider>
      <ToastContainer />
    </div>
  )
}

export default App
