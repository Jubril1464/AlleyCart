import { React, useState } from "react"
import "./SignIn.scss"
import FormInput from "../Form-Input/FormInput"
import Button from "../Button/Button"
import { useUserAuth } from "../../context/userAuthContext"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

function SignUp() {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const { signUp, signInWithGoogle } = useUserAuth()
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    if (!email && !password) {
      return toast.error("Please fill in your email and pasword!", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      })
    } else if (!email && password) {
       return toast.error("Please fill in your email!!", {
         position: "top-right",
         autoClose: 2000,
         closeOnClick: true,
       })
    } else if (email && !password) {
      return toast.error("Please fill in your  pasword!", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      })
    } else if (password !== confirmPassword) {
      return toast.error("Your password doesnt match", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      })
    } else {
      if (!email.includes("@")) {
         return toast.error("Please your email", {
        position: "top-right",
        autoClose: 2000,
        closeOnClick: true,
      })
      } else {
        try {
          await signUp(email, password)
          toast.success("You have successfully signed up", {
            position: "top-right",
            autoClose: 2000,
            closeOnClick: true,
          })
          navigate("/signin")
        } catch (err) {
          setError(err.message)
          toast.error(`Server Error!! ${err.message}`)
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
    e.preventDefault()
    try {
      await signInWithGoogle()
      navigate("/")
    } catch (err) {
      console.log(err.message)
      alert(err.message)
    }
  }

  return (
    <div className="signContainer">
      <div className="signIn">
        <h2 className="heading--tertiary margin-bottom-medium">
          SignUp here 👎🏽
        </h2>

        <form onSubmit={handleSubmit} className="signIn__form">
          <FormInput
            type="email"
            name="email"
            className="signIn__form--group"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
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
            
            placeholder="Password"
            placePass
            // label='Password'
          />
          <FormInput
            type="password"
            name="confirmPassword"
            className="signIn__form--group"
            value={confirmPassword}
            handleChange={(e) => setConfirmPassword(e.target.value)}
           
            placeholder="Confirm password"
            placePass
            // label='Password'
          />
          <div className="buttons">
            <Button type="submit" className="login--btn">
              Sign Up
            </Button>
            <Button
              onClick={googleSignIn}
              className="google-sign-in"
              color="#4285f4"
            >
              Sign Up with Google
            </Button>
          </div>
          <span className="account">
            Already have an account?{" "}
            <Link className="account__link" to="/signin">
              Log In
            </Link>
          </span>
        </form>
      </div>
    </div>
  )
}

export default SignUp
