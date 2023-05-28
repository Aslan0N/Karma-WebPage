import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h4>About</h4>
            <p>
            Lorem ipsum dolor sit amet, consectetur <br />
             adipisicing elit, sed do eiusmod tempor <br />
              incididunt ut labore dolore magna aliqua.
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h4>Newsletter</h4>
            <p>Stay update with our latest</p>
            <form>
              <input type="email" placeholder='Enter Email' />
              <button className='fa-solid fa-arrow-right'></button>
            </form>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h4>Instagram Feed</h4>
            <div className="img-con">
              <img src="https://preview.colorlib.com/theme/karma/img/i1.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/karma/img/i2.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/karma/img/i3.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/karma/img/i4.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/karma/img/i5.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/karma/img/i6.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/karma/img/i7.jpg" alt="" />
              <img src="https://preview.colorlib.com/theme/karma/img/i8.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3">
            <h4>Follow Us</h4>
            <p>Let us be social</p>
            <div className="i-con">
            <i class="hv_orange fa-brands fa-facebook-f"></i>
            <i class="hv_orange fa-brands fa-twitter"></i>
            <i class="hv_orange fa-brands fa-dribbble"></i>
            <i class="hv_orange fa-brands fa-behance"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p className='end'>Copyright ©2023 All rights reserved | This template is made with <i className="fa-regular fa-heart"></i> by <span>Colorlib</span></p>
      </div>
    </footer>
  )
}

export default Footer