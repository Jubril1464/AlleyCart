import React from "react"
import "./FormInput.scss"
import { AiOutlineMail } from "react-icons/ai"
import { AiFillLock } from "react-icons/ai"

function FormInput({
  handleChange,
  label,
  placeEmail,
  placePass,
  ...otherprops
}) {
  return (
    <div className="form__group">
      {/* {label ? <label className="form__group--label">{label}</label> : null} */}
      {placeEmail ? (
        <AiOutlineMail className="form__group--icon"></AiOutlineMail>
      ) : null}
      {placePass ? (
        <AiFillLock className="form__group--icon"></AiFillLock>
      ) : null}
      <input
        onChange={handleChange}
        {...otherprops}
        className="form__group--input margin-bottom-medium"
      />
    </div>
  )
}

export default FormInput
