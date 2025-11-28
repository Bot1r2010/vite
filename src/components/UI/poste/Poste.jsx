import React from 'react'
import "./Poste.scss"
import img from "../../img/blog.png"

const Poste = () => {
  return (
    <div className='poste'>
      <div className="poste__global">

        <div className="poste__text">
          <h1 className="poste__h1">
            Latest posts
          </h1>

          <button className='poste__btn'>Go to blog</button>
        </div>

        <div className="poste__cards">

            <div className="poste__card">
              <img src={img} alt="" className="poste__img" />

              <h4 className="poste__h4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam voluptatem! Maiores provident itaque soluta ipsum?
              </h4>
            </div>

            <div className="poste__card">
              <img src={img} alt="" className="poste__img" />

              <h4 className="poste__h4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam voluptatem! Maiores provident itaque soluta ipsum?
              </h4>
            </div>

            <div className="poste__card">
              <img src={img} alt="" className="poste__img" />

              <h4 className="poste__h4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, ullam voluptatem! Maiores provident itaque soluta ipsum?
              </h4>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Poste