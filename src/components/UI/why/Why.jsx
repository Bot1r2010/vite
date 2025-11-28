import React from 'react'
import "./Why.scss"
import logo from "../../img/image.png";

const Why = () => {
  return (
    <div className='why'>

        <div className="why__box">

            <div className="why__box1">
              <img src={logo} alt="" className="why__img" />
            </div>

            <div className="why__box2">
                <h1 className="why__h1">
                  Why Createx?
                </h1>

                <p className="why__text">
                  A fermentum in morbi pretium aliquam adipiscing donec tempus.
                  <br />
                  <br />
                  Vulputate placerat amet pulvinar lorem nisl.
                    <br />
                    <br />
                  Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.
                  <br />
                  <br />
                  Etiam duis lobortis in fames ultrices commodo nibh.
                  <br />
                  <br />
                  Tincidunt sagittis neque sem ac eget.
                  <br />
                  <br />
                  Ultricies amet justo et eget quisque purus vulputate dapibus tortor
                </p>

                <button className='why__btn'>More about us</button>
            </div>

        </div>
    </div>
  )
}

export default Why