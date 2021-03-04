import React, { useState, useEffect } from "react";

function DetailBar({ datas }) {
  const [info, setInfo] = useState([]);
  var todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);
  let day = datas.consolidated_weather;

  useEffect(() => {
    if (day) {
      let dayFilt = day.filter((data) => data.applicable_date !== todayDate);
      setInfo(dayFilt);
    } else console.log("no data");
  }, [day]);

  console.log(info);

  return (
    <div className="detail">
      <div className="top">
        {info.map((data) => {
          return (
            <div className="card">
              <p>{data.applicable_date}</p>
              <img
                src={data.weather_state_name}
                alt={data.weather_state_name}
              />
              <p>
                <span>{Math.floor(data.max_temp)}</span>
                <span>{Math.floor(data.min_temp)}</span>
              </p>
            </div>
          );
        })}
      </div>

      <div className="middle">
        <h3>Today's Highlights</h3>
        <div className="card">
          <div className="row">
            <div>
              <p>Windstatus</p>
              <h4>
                <b>{Math.floor(day[0].wind_speed)}</b>mph
              </h4>
              <p>{day[0].wind_direction_compass}</p>
            </div>
            <div>
              <p>Humidity</p>
              <h4>
                <b>{day[0].humidity}</b>%
              </h4>
              <progress></progress>
            </div>
          </div>
          <div className="row">
            <div>
              <p>Visibility</p>
              <h4>
                <b>{Math.floor(day[0].visibility)}</b>miles
              </h4>
            </div>
            <div>
              <p>AirPressure</p>
              <h4>
                <b>{day[0].air_pressure}</b>mb
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailBar;
