import React from 'react'
import About from './About'
import '/src/App.css'
import Herosection from './Herosection'
import Features from './Features'
import Footer from './Footer'
function Home(props) {
  const featureData=[
     {
       title:"Elegant Dining",
      img:"./images/featureOne.svg",
       para:"dolor sit amet consectetur adipisicing elit."
     },
     {
       title:"Chef Creations",
      img:"./images/featureTwo.svg",
       para:"dolor sit amet consectetur adipisicing elit."
     },
          {
       title:"Fresh Ingredients",
       img:"./images/featureThree.svg",
       para:"dolor sit amet consectetur adipisicing elit."
     },
          {
       title:"Hassle-Free ",
      img:"./images/featureFour.svg",
       para:"dolor sit amet consectetur adipisicing elit."
     }
    ]


  return (
    <>
            <Herosection h1="" h2="Cook anything with the experts" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. CorruOfficit ratione tempora eligendi perspiciatis, excepturi reiciendis cum animi dolorem voluptatum facere?" img="/images/banner-image.webp" button1="Let's Join Us" button2="Explore Now" />


            <div className="about_container d-md-flex justify-content-center align-items-center pt-5">
        <div>
          <img src="/images/cook.webp" className="about_img" alt="" />
        </div>
        <div className="about_text p-3 text-md-center ">
          <h4 className="text-center text-danger ">Cook with Us</h4>
          <h2 className="p-md-1 pt-lg-3 pb-lg-4 fs-1">Cooking together with the expert.</h2>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem</p>
          <p className="pt-0">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....</p>
          <div className='d-flex justify-content-center '>
            <button className='button1 p-2 rounded-3 mt-lg-3 p-xl-3 px-xl-5'>Learn more</button>
          </div>
        </div>
      </div>

<div className="container d-flex mb-5 Features_container ">
  <div className="row">
<h2 className='text-center fs-1 text-danger p-5 pb-0'>Experience More Than Just a Meal</h2>
        {featureData.map((item, index) => (
          <div className="col-md-6 col-xl-3"key={index}>
        <Features
          title={item.title}
          img={item.img}
          para={item.para}
        />
        </div>
      ))}

</div>
</div>

 <div className="menu_container container-fluid ">
<div className="row">
        <div className="d-md-flex justify-content-center">
          <div>
            <img src="images/foodone.webp"  className='first_img' alt="" />
          </div>
          <div>
            <img src="images/foodtwo.webp" className='second_img' alt="" />

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

    <div className="container subscribe_parent">
      <div className="row subscribe_container">
        <div className="d-flex align-items-center justify-content-center text-center">
        <div className="col-md-6 subscribe_content">
          <h3 className='text-white fw-light mb-3'>NEWSLETTER</h3>
          <h2>Subscribe our
newsletter.</h2>
          <form action="">
            <input type="email" placeholder='Enter your email' className='rounded-pill p-2 w-50 border-0 ms-4 mt-3' />
          </form>
        </div>
        <div className="col md-6 img-fluid  d-none d-md-block">
          <img src="/images/burger.webp" alt="" />
        </div>
        </div>
      </div>
      </div>

<Footer h1="Contact us" h2="Chef's Kitchen"/>
    </>


  )
}

export default Home