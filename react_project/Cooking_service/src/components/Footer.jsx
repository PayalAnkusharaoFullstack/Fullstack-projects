import React from 'react'

function Footer(props) {
  return (
    <div className="footer_container container-fluid bg-light">
      <div className="text-danger fs-1 text-center fw-bolder py-4">{props.h1}</div>
      <img src="/images/soup.svg" alt="" className='footer_img' />

      <div className="row">
        <div className=" col-md-3">
          <div className='mb-5'>
            <div><i className="fa-solid fa-crown logo fs-1 mb-2"></i>
              <h2>{props.h2}</h2>
            </div>
            <div>
              <div className=" col-md-3">
              </div>
              <i className="fa-brands fa-linkedin-in"></i>
              <i className="fa-brands fa-instagram mx-4"></i>
              <i className="fa-brands fa-x-twitter"></i>
            </div>

          </div>
        </div>
        <div className=" col-md-3 mb-5">
          <h2>Newsletter</h2>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Subscribe</li>
        </div>
        <div className=" col-md-3 mb-5">
          <h2>company</h2>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Subscribe</li>
        </div>
        <div className=" col-md-3">
          <h2>Support</h2>
          <li>Help</li>
          <li>Press</li>
          <li>Owners</li>
          <li>Partners</li>
        </div>
      </div>
    </div>
  )
}

export default Footer