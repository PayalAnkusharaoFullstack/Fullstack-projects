import React from 'react'
import '/src/App.css'
import { Link, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Home from './Home'
import About from './About'
import Features from './Features'
import Menu from './Menu'
import Subscribe from './Subscribe'
import Herosection from './Herosection'
import Contact from './Contact'
import Footer from './Footer'


function Navbar(props) {
  const featureData = [
    {
      title: "Elegant Dining",
      img: "./images/featureOne.svg",
      para: "dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Chef Creations",
      img: "./images/featureTwo.svg",
      para: "dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Fresh Ingredients",
      img: "./images/featureThree.svg",
      para: "dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Hassle-Free ",
      img: "./images/featureFour.svg",
      para: "dolor sit amet consectetur adipisicing elit."
    }
  ]

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid ">

          <div className="logo">
            <i className="fa-solid fa-crown fs-1 me-2"></i></div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-between gap-4 ms-5 me-auto mb-2 mb-lg-0 w-50 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">{props.Home}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Features">{props.Feature}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.About}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Menu">{props.Menu}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Subscribe">{props.Subscribe}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">{props.Contact}</Link>
              </li>

            </ul>

            <button className='button1 mx-2 rounded-3 py-2 px-3'>{props.button1}</button>
            <button className='button2 rounded-3 py-2 px-3'>{props.button2}</button>

          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home h1="" h2="Cook anything with the experts" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. CorruOfficit ratione tempora eligendi perspiciatis, excepturi reiciendis cum animi dolorem voluptatum facere?" img="/images/banner-image.webp" button1="Let's Join Us" button2="Explore Now" />} />
        <Route path="/About" element={<About img="/images/cook.webp" h4="Cook with Us" h2="Cooking together with the expert." paraOne="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem" paraTwo="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...." button="Learn more" />} />
        <Route
          path="/Features"
          element={
            <>
              <Herosection h1="Features" h2="Cook anything with the experts" p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. CorruOfficit ratione tempora eligendi perspiciatis, excepturi reiciendis cum animi dolorem voluptatum facere?" img="/images/banner-image.webp" button1="Let's Join Us" button2="Explore Now" />

              <div className="container d-flex Features_container ">
                <div className="row">
                  <h2 className='text-center fs-1 text-danger p-5 pb-0'>Experience More Than Just a Meal</h2>
                  {featureData.map((item, index) => (
                    <div className="col-md-6 col-xl-3">
                      <Features
                        key={index}
                        title={item.title}
                        img={item.img}
                        para={item.para}
                      />
                    </div>

                  ))}

                </div>
              </div>

      <Footer h1="Contact us" h2="Chef's Kitchen" />

            </>
          }
              

        />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Subscribe" element={<Subscribe h3="NEWSLETTER" h2="Subscribe our
newsletter."  img="/images/burger.webp" />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>

    </>
  )
}

export default Navbar