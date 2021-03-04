import React, { useState, useEffect } from "react";

function DetailBar({ datas }) {
  const [info, setInfo] = useState([]);
  var todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);
  let day = datas.consolidated_weather;

  useEffect(() => {
    if (day) {
      let dayFilt = day.filter((data) =>
        data.applicable_date !== todayDate
      );
      setInfo(dayFilt);
    } else console.log("no data");
  }, [day]);

  console.log(info);

  return (
    <div className="detail">
      <div className="top">
        <div className="card"></div>
      </div>
    </div>
  );
}

export default DetailBar;
