import React from 'react'
import "./How.scss"
import logo from "../../img/illustration (1).png"

const How = () => {
  return (
    <div className='how'>
      <div className="how__global">

        <h1 className="how__h1">That’s how we do it</h1>
          <div className="how__cards">
              <button className="how__btn">Experienced Tutors</button>
              <button className="how__btn">Feedback & Support</button>
              <button className="how__btn">24/7 Online Library</button>
              <button className="how__btn">Community</button>
          </div>

          <div className="how__box">
              <div className="how__text">

                    <h1 className="how__h1">Only practicing tutors</h1>

                    <p className="how__p">Urna nisi, arcu cras nunc. Aenean quam est lobortis mi non fames dictum suspendisse. Morbi mauris cras massa ut dolor quis sociis mollis augue. Nunc, sodales tortor sit diam mi amet massa. Fermentum diam diam sociis vestibulum. Nulla nisl accumsan, id dignissim massa ut amet. Amet enim, nisi tempus vehicula.</p>
              </div>

              <div className="how__img">
                  <img src={logo} alt="" className="how__img" />
              </div>
          </div>
      </div>
    </div>
  )
}

export default How