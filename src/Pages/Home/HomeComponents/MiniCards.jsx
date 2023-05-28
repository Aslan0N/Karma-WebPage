import React from 'react'

const MiniCards = () => {
  return (
    <>
        <section id="mini-card">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="item bord">
                            <i class="fa-solid fa-truck"></i>
                            <h2>Free Delivery</h2>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="item bord">
                        <i class="fa-solid fa-rotate"></i>
                            <h2>Return Policy</h2>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="item bord">
                        <i class="fa-solid fa-headset"></i>
                            <h2>24/7 Support</h2>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3">
                        <div className="item">
                        <i class="fa-solid fa-coins"></i>
                            <h2>Secure Payment</h2>
                            <p>Free Shipping on all order</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default MiniCards