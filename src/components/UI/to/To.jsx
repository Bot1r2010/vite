import React from 'react'
import "./To.scss"

const To = () => {
  return (
    <div className='to'>
        <div className="to__box">
            <h1 className="to__h1">Subscribe to the Createx School announcements</h1>

            <form action="#" className='to__form'>
                <input className='to__input' type="text" placeholder='Your working email' />

                <button className='to__btn'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default To