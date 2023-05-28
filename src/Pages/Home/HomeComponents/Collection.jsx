import React from 'react'

const Collection = () => {
  return (
    <>
        <section id='collection'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                        <h2>NIKE NEW
                        COLLECTION!</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur repellat non vero totam eligendi doloribus, expedita harum aliquam aperiam nobis ratione soluta. Doloribus, voluptatum praesentium fuga labore velit enim consequatur?</p>
                        <div className="button-con">
                            <button><i class="fa-solid fa-plus"></i></button>
                            <span>ADD TO BAG</span>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 hid">
                        <img src="https://preview.colorlib.com/theme/karma/img/banner/banner-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Collection