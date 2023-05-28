// import axios from "axios";
import React, {  useState } from "react";
import WeekCard from "./WeekCard";
import weekData from '../../../Data/WeekData.json'

const Week = () => {
  const [weeksData, setWeekData] = useState(weekData);

  // useEffect(() => {
  //   axios
  //     .get("http://127.0.0.1:5500/src/Data/WeekData.json")
  //     .then((res) => setWeekData(res.data));
  // }, []);

  return (
    <>
      <div id="week">
        <div className="container">
          <h2>Deals of the Week</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor <br />
            incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-8">
              <div className="container-fluid">
                <div className="row g-5 mt-3">
                  {weeksData.map((item, index) => {
                    return <WeekCard week={item} key={index} />;
                  })}
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
              <img
                src="https://preview.colorlib.com/theme/karma/img/category/c5.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Week;
