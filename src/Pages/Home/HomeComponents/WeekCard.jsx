import React from "react";

const WeekCard = ({ week }) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="single-related-product d-flex">
        <div>
          <img src={week.image} alt='' />
        </div>
        <div className="desc">
          <div className="title hv_orange">
            Black lace Heels
          </div>
          <div className="price">
            <h6>$189.00</h6>
            <h6 className="l-through">$210.00</h6>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default WeekCard;
