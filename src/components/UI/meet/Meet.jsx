import React from 'react'
import "./Meet.scss"
import img from "../../img/meet.png"

const Meet = () => {
  return (
    <div className='meet'>

      <div className="meet__box1">

        <h1 className='meet__h1'>Meet our team</h1>

        <div className="meet__cards">
            <div className="meet__card">


                <div className="meet__imges">
                  <img src={img} alt="" className="meet__img" />
                </div>

                <h4 className="meet__h4">Kristin Watson</h4>

            </div>
            <div className="meet__card">

                <div className="meet__imges">
                  <img src={img} alt="" className="meet__img" />
                </div>

                <h4 className="meet__h4">Kristin Watson</h4>

            </div>
            <div className="meet__card">

                <div className="meet__imges">
                  <img src={img} alt="" className="meet__img" />
                </div>

                <h4 className="meet__h4">Kristin Watson</h4>

            </div>
            <div className="meet__card">

                <div className="meet__imges">
                  <img src={img} alt="" className="meet__img" />
                </div>

                <h4 className="meet__h4">Kristin Watson</h4>

            </div>
        </div>

      </div>

      <div className="meet__box2">
          <h1 className='meet__text'>What our students say</h1>

          <div className="meet__tetle">
              <p className="meet__p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod praesentium quaerat veniam quisquam ea? Rerum recusandae officia blanditiis sunt? Beatae ut animi atque alias consequuntur!</p>

              
          </div>

          
      </div>
    </div>
  )
}

export default Meet