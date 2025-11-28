import React from 'react'
import "./Courses.scss"
import logo from "../../img/img.png";

const Courses = () => {
  return (
    <div className='courses'>
        <div className="courses__box">
            <div className="courses__box1">
                <h1 className="courses__h1">Featured Courses</h1>
                <button className='courses__btn'>View all courses</button>
            </div>


            <div className="courses__card">
                     <div className="courses__box2">

                        <div className="courses__cards1">
                           <img className='img' src={logo} alt="" />

                           <h1 className="courses__text">The Ultimate Google Ads Training Course</h1>
                           
                           <h5 className="courses__h5">$100</h5>
                        </div>
                        <div className="courses__cards1">
                           <img className='img' src={logo} alt="" />

                           <h1 className="courses__text">The Ultimate Google Ads Training Course</h1>
                           
                           <h5 className="courses__h5">$100</h5>
                        </div>
                        <div className="courses__cards1">
                           <img className='img' src={logo} alt="" />

                           <h1 className="courses__text">The Ultimate Google Ads Training Course</h1>
                           
                           <h5 className="courses__h5">$100</h5>
                        </div>

                        


                  </div>

                  <div className="courses__box2">

                        <div className="courses__cards1">
                           <img className='img' src={logo} alt="" />

                           <h1 className="courses__text">The Ultimate Google Ads Training Course</h1>
                           
                           <h5 className="courses__h5">$100</h5>
                        </div>
                        <div className="courses__cards1">
                           <img className='img' src={logo} alt="" />

                           <h1 className="courses__text">The Ultimate Google Ads Training Course</h1>
                           
                           <h5 className="courses__h5">$100</h5>
                        </div>
                        <div className="courses__cards1">
                           <img className='img' src={logo} alt="" />

                           <h1 className="courses__text">The Ultimate Google Ads Training Course</h1>
                           
                           <h5 className="courses__h5">$100</h5>
                        </div>

                        


                  </div>
            </div>

            
        </div>
    </div>
  )
}

export default Courses