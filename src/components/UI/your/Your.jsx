import React from 'react'
import "./Your.scss"
import img from "../../img/foto.png";
import imges from "../../img/logos.png"

const Your = () => {
  return (
    <div className='your'>
        <div className="your__global">
          <div className="your__text">
            <h3 className="your__h3">
              Createx Certificate
            </h3>

            <h1 className="your__h1">Your expertise will be confirmed</h1>

            <p className="your__p">We are accredited by international professional 
              <br />
              organizations and institutes:</p>

              <img src={imges} alt="" />
        </div>

        <div className="your__img">
            <img src={img} alt="" className="your__img" />
        </div>
        </div>
    </div>
  )
}

export default Your
