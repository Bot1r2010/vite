import React from 'react'
import "./Footer.scss"
import logo from "../img/logo.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__box">
          <div className="footer__box1">
            <img src={img} alt="" />

            <p className='footer__p'>
              Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country. 
            </p>
          </div>

          <div className="footer__box2">
              <h6 className="footer__h6">
                SITE MAP
                <br />
                <br />
                About Us
                <br />
                  Courses
                  <br />
                  Events
                  <br />
                  Blog
                  <br />
                  Contacts
                  </h6>
          </div>
      </div>
    </div>
  )
}

export default Footer
