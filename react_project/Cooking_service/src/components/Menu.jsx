import React from 'react'
import Footer from './Footer'
import Herosection from './Herosection'
function CookGallary() {
  return (
    <>
          <Herosection h1="Menu" h2="Cook anything with the experts" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. CorruOfficit ratione tempora eligendi perspiciatis, excepturi reiciendis cum animi dolorem voluptatum facere?" img="/images/banner-image.webp" button1="Let's Join Us" button2="Explore Now" />

      <div className="menu_container container-fluid mb-5">
        
<div className="row ">
        <div className="d-md-flex justify-content-center">
          <div>
            <img src="images/foodone.webp"  className='first_img' alt="" />
          </div>
          <div>
            <img src="images/foodtwo.webp" className='second_img ' alt="" />

          </div>
        </div>

        <div className="d-md-flex justify-content-center ">
          <div>
            <img src="images/foodthree.webp" className='third_img'  alt="" />
          </div>
          <div className='fourth_img_container'>
            <img src="images/foodfour.webp" className='fourth_img'  alt="" />

          </div>
        </div>

      </div>
</div>
      <div>
        <Footer h1="Contact us" h2="Chef's Kitchen"/>
      </div>

    </>)
}

export default CookGallary