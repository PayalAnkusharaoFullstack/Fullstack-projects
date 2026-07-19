import React from 'react'
import Herosection from './Herosection'
import Footer from './Footer'
function Subscribe(props) {
  return (
    <>

      <Herosection h1="Subscribe" h2="Cook anything with the experts" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. CorruOfficit ratione tempora eligendi perspiciatis, excepturi reiciendis cum animi dolorem voluptatum facere?" img="/images/banner-image.webp" button1="Let's Join Us" button2="Explore Now" />

      <div className="container subscribe_parent">
        <div className="row subscribe_container">
          <div className="d-flex align-items-center justify-content-center text-center">
            <div className="col-md-6 subscribe_content">
              <h3 className='text-white fw-light mb-3'>{props.h3}</h3>
              <h2>{props.h2}</h2>
              <form action="">
                <input type="email" placeholder='Enter your email' name="user_email"
                  id="user_email" className='rounded-pill p-2 w-50 border-0 ms-4 mt-3' />
              </form>
            </div>
            <div className="col md-6 img-fluid  d-none d-md-block">
              <img src={props.img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer h1="Contact us" h2="Chef's Kitchen" />

    </>
  )
}

export default Subscribe