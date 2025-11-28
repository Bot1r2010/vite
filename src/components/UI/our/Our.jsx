import React from 'react'
import "./Our.scss"

const Our = () => {
  return (
    <div className='our'>
        <div className="our__text">
            <h1 className="our__h1">Lectures & workshops</h1>
        </div>
        <div className="our__cards">
          
          <div className="our__card">
              <h1 className="our__son">05</h1>
              <h5 className="our__h5">
                  August 
                  <br />
                  11:00 – 14:00
              </h5>

              <h4 className="our__h5">Formation of the organizational structure of the company in the face of uncertainty.</h4>

              <button className="our__btn">View more</button>
          </div>

          <div className="our__card">
              <h1 className="our__son">24</h1>
              <h5 className="our__h5">
                  July
                  <br />
                  11:00 – 12:30
              </h5>

              <h4 className="our__h5">Building a customer service department. Best Practices.</h4>

              <button className="our__btn">View more</button>
          </div>

                 <div className="our__card">
              <h1 className="our__son">16</h1>
              <h5 className="our__h5">
                July
                <br />
                10:00 – 13:00
              </h5>

              <h4 className="our__h5">How to apply methods of speculative design in practice. Worldbuilding prototyping.</h4>
              
              <button className="our__btn">View more</button>
          </div>
        </div>
    </div>
  )
}

export default Our