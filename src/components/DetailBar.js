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
            return <div className="card">
            <p>{data.applicable_date}</p>
            <img src={data.weather_state_name} alt={data.weather_state_name} />
            <p>
              <span>{Math.floor(data.max_temp)}</span>
              <span>{Math.floor(data.min_temp)}</span>
            </p>
          </div>;
        })}
      </div>
    </div>
  );
}

export default DetailBar;
