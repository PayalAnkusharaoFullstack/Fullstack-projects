import React from 'react'

function Herosection(props) {
  return (
    <>
          <div className="d-flex justify-content-center align-items-center home_container">
        <div className='d-md-flex'>
          <div className="hero_text col-md-6 d-flex flex-column justify-content-center align-items-center text-center ">
            <h1 className='Options text-danger fs-1 pb-3'>{props.h1}</h1>
            <h2 className='fs-1 pb-3'>{props.h2}</h2>
            <p>{props.p}</p>
            <div>
              <button className='button1 mx-2 rounded-3 py-2 px-3 p-lg-3 px-lg-4'>{props.button1}</button>
              <button className='button2 mx-2 rounded-3 py-2 px-3 p-lg-3 px-lg-4'>{props.button2}</button>
            </div>
          </div>
          <div className="img-fluid col-md-6">
            <img src={props.img} className='hero_img' alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Herosection