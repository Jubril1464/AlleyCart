import React from "react"
import Exclusive from "../../Components/Exclusive/Exclusive"
import "./Homepage.scss"
import { IoMdArrowDropdown } from "react-icons/io"
import Directory from "../../Components/Directory/Directory"

function Homepage() {
  return (
    <div className="home__container">
      <div className="items__container">
        <div className="dropdown">
          <span className="label"> Home</span>
        </div>
        <div className="dropdown">
          <span className="label">
            Men <IoMdArrowDropdown className="dropdown__icon" />
          </span>
          <ul className="items">
            <li>
              <a href="/"> Casual </a>
            </li>
            <li>
              <a href="/"> Sport </a>
            </li>
            <li>
              <a href="/"> T-Shirts </a>
            </li>
            <li>
              <a href="/"> Jeans </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <span className="label">
            Women <IoMdArrowDropdown className="dropdown__icon" />
          </span>
          <ul className="items">
            <li>
              <a href="/"> Trouser </a>
            </li>
            <li>
              <a href="/"> Sports </a>
            </li>
            <li>
              <a href="/"> Shoe </a>
            </li>
            <li>
              <a href="/"> Sarees </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <span className="label">
            Kids <IoMdArrowDropdown className="dropdown__icon" />
          </span>
          <ul className="items">
            <li>
              <a href="/"> Trouser </a>
            </li>
            <li>
              <a href="/"> Sport </a>
            </li>
            <li>
              <a href="/"> Shoe </a>
            </li>
            <li>
              <a href="/"> Jeans </a>
            </li>
          </ul>
        </div>
        <div className="dropdown">
          <span className="label">My Account</span>
        </div>
      </div>
      <main className="home-main">
        <h3 className="heading--tertiary margin-bottom-medium">
          Save up to 75% in our store 🔏
        </h3>
        <h1 className="heading--primary margin-bottom-medium">
          Best Collections 🥼
        </h1>
        <p className="paragraph margin-bottom-big">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          incidunt, accusantium natus explicabo eius, odio dolore porro aliqu
        </p>
        <a href="/" className="btn">
          Shop Now
        </a>
      </main>
      <section className="exclusive margin-bottom-medium">
        <div className="u-center-text">
          <h3 className="heading--tertiary margin-bottom-medium">
            {" "}
            Check out our exclusive items!!!
          </h3>
        </div>

        <Exclusive />
      </section>
      <section className="directory">
        <div className="u-center-text margin-bottom-medium">
          <h2 className="heading--tertiary">Shop Now!!!🛒</h2>
        </div>

        <Directory />
      </section>
    </div>
  )
}

export default Homepage
