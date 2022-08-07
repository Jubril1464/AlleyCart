import React from "react"
import "./Button.scss"

function Button({ children, color, type, className, onClick, borderRadius }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      style={{
      backgroundColor: color,
      borderRadius:borderRadius }}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button



