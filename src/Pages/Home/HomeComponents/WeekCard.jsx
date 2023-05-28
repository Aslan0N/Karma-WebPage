import React from "react";

const WeekCard = ({week}) => {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-lg-4">
        <div className="card mb-3" style={{ width:'100%', height:'100%' }}>
          <div className="row g-3">
            <div className="col-md-4">
              <img src={week.image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body ms-5">
                <p className="card-title">{week.title}</p>
                <p className="card-text">
                  {week.price} <del>{week.priceDel}</del>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekCard;
