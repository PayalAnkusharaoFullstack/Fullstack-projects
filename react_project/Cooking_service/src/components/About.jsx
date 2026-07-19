import React from 'react'
import Herosection from './Herosection'
import Footer from './Footer'
function About(props) {
  return (
    <>

      <Herosection h1="About us" h2="Cook anything with the experts" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. CorruOfficit ratione tempora eligendi perspiciatis, excepturi reiciendis cum animi dolorem voluptatum facere?" img="/images/banner-image.webp" button1="Let's Join Us" button2="Explore Now" />


      <div className="about_container d-md-flex justify-content-center align-items-center pt-5">
        
        <div>
          <img src={props.img} className="about_img" alt="" />
        </div>
        <div className="about_text p-3 text-md-center ">
          <h4 className="text-center text-danger ">{props.h4}</h4>
          <h2 className="p-md-1 pt-lg-3 pb-lg-4 fs-1">{props.h2}</h2>
          <p>{props.paraOne}</p>
          <p className="pt-0">{props.paraTwo}</p>
          <div className='d-flex justify-content-center '>
            <button className='button1 p-2 rounded-3 mt-lg-3 p-xl-3 px-xl-5'>{props.button}</button>
          </div>
        </div>
      </div>

      <Footer h2="Contact us"/>

    </>
  )
}

export default About