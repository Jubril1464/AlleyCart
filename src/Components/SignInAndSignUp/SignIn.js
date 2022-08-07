import { React, useState } from "react"
import "./SignIn.scss"
import FormInput from "../Form-Input/FormInput"
import Button from "../Button/Button"
import { useUserAuth } from "../../context/userAuthContext"
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'



function SignIn() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("")
  const [password, setPassword] = useState("");
  const { logIn, signInWithGoogle } = useUserAuth()
  
  let navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email && !password ) {
     return toast.error("Please fill in your email and pasword!", {
       position: "top-right",
       autoClose: 2000,
       closeOnClick: true,
     })
    } else if (!email && password) {
    return toast.error("Please fill in your email!", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
    })
    } else if (email && !password) {
      return toast.error("Please fill in  pasword!", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      })
    } else {
      if (!email.includes('@')) {
       return toast.error("Please check your email!", {
         position: "top-right",
         autoClose: 2000,
         closeOnClick: true,
       })
      } else {
        try {
          await logIn(email, password)
          toast.success(`Welcome ${email}, you have sucessfully logged in`, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
          })
          navigate("/")
        } catch (err) {
          setError(err.message)
          toast.error(`Server Error ${err.message}`, {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
          })
        }
        
      }
    }
    
    
  }
  // const handleChange = (e) => {
  //   const value = e.target.value
  //   setState({
  //     ...state,
  //     [e.target.name]: value,
  //   })

  

  const googleSignIn = async (e) => {

    e.preventDefault();
    try {
      await signInWithGoogle()
      navigate('/')
    } catch(err) {
      console.log(err.message)
      alert(err.message)
    }
  }

  return (
    <div className="signContainer">
      <div className="signIn">
        <h2 className="heading--tertiary margin-bottom-medium">
          Login here 👎🏽
        </h2>

        <form onSubmit={handleSubmit} className="signIn__form">
          <FormInput
            type="text"
            name="email"
            className="signIn__form--group"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            // required
            placeholder="Email"
            placeEmail
            // label='Email'
          />

          <FormInput
            type="password"
            name="password"
            className="signIn__form--group"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            // required
            placeholder="Password"
            placePass
            // label='Password'
          />
          <div className="buttons">
            <Button type="submit" className="login--btn">
              Login
            </Button>
            <Button
              onClick={googleSignIn}
              className="google-sign-in"
              color="#4285f4"
            >
              Sign in with Google
            </Button>

          </div>
          <span className="account">Don't have an account? <Link className="account__link" to='/signup'>Click here</Link></span>
        </form>
      </div>
    </div>
  )
}

export default SignIn
