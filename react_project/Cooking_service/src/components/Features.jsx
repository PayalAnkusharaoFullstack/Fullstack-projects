import React from 'react'
import Herosection from './Herosection'
function Features(props) {

  return (
    <>
      <div className="text-center">

        <div className="feature_container">
          <div className="feature_img">
            <img src={props.img} alt="Feature_img" />
            <div className='feature_content'>
              <h2>{props.title}</h2>
              <p>{props.para}</p>
              <button className='feature_button'>Read More <i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </div>

      

    </>

  )
}

export default Features