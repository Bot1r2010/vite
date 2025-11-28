import React from 'react'
import "./Navbar.scss"
import logo from '../img/logo.png'
import img from '../img/illustration.png'

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className="navbar__nav">


          <img src={logo} alt="" />


          <ul className="navbar__ul">
            <li className="navbar__li">
                <a href="#" className="navbar__a">About Us</a>
            </li>

            <li className="navbar__li">
                <a href="#" className="navbar__a">Courses</a>
            </li>

            <li className="navbar__li">
                <a href="#" className="navbar__a">Events</a>
            </li>

            <li className="navbar__li">
                <a href="#" className="navbar__a">Blog</a>
            </li>

            <li className="navbar__li">
                <a href="#" className="navbar__a">Contact</a>
            </li>
          </ul>


          <button className='navbar__btn'>Get consultation</button>

      </div>


      <div className="navbar__intro">

        <div className="navbar__global">

            <div className="navbar__box1">
                <h1 className='navbar__h1'>Enjoy studying
              with Createx Online Courses</h1>

              <div className="navbar__button">

                <button className='navbar__btn-1'>About us</button>

                <button className='navbar__btn-2'>Explore courses</button>

              </div>

            </div>

            <div className="navbar__box2">
              <img src={img} alt="" />
            </div>

        </div>


      </div>
        
    </div>
  )
}

export default Navbar