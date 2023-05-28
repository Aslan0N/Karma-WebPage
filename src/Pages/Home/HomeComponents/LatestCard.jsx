import React from "react";


const LatestCard = ({ latest }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-3">
        <div className="card" style={{ width: "100%", height: "100%" }}>
        <img src={latest.image} alt="" className="card-img-top" />
            <div className="card-body">
                <div className="card-title">
                {latest.title}
                </div>
                <p className="card-text">
                ${latest.price} <del>$ {latest.priceDel}</del>
                </p>
            </div>
            <div className="i-con">
            <span><i className="fa-solid fa-bag-shopping"></i>ADD TO BAG</span>
            <span><i className="fa-solid fa-heart"></i>WISHLIST</span>
            <span><i className="fa-solid fa-rotate"></i>COMPARE</span>
            <span><i className="fa-solid fa-up-down-left-right"></i>VIEW MORE</span>
            </div>
        </div>
      </div>
    </>
  );
};

export default LatestCard;
