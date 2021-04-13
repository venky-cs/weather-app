import React, { useState, useEffect } from 'react';

function DetailBar({ datas }) {
  const [info, setInfo] = useState([]);
  var todayDate = new Date().toISOString().slice(0, 10);
  // console.log(todayDate);
  let day = datas.consolidated_weather;

  useEffect(() => {
    if (day) {
      let dayFilt = day.filter((data) => data.applicable_date !== todayDate);
      setInfo(dayFilt);
    } else console.log('no data');
  }, [day]);

  console.log(info);

  const setWeatherImg = () => {
    const weatherName = day[0].weather_state_name.replace(/ +/g, '');
    return weatherName;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const splitDate = date.toString().split(' ');
    return `${splitDate[0]}, ${splitDate[2]} ${splitDate[1]}`;
  };

  return (
    <div className="detail">
      {day && (
        <>
          <div className="top">
            {info.map((data) => {
              return (
                <div className="card">
                  <p>{formatDate(data.applicable_date)}</p>
                  <img
                    src={`/icons/${setWeatherImg()}.png`}
                    alt={data.weather_state_name}
                  />
                  <p>
                    <span>{Math.floor(data.max_temp)}.C</span>
                    <span>{Math.floor(data.min_temp)}.C</span>
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
                  <p>
                    <span id="near" class="material-icons">
                      near_me
                    </span>
                    {day[0].wind_direction_compass}
                  </p>
                </div>
                <div>
                  <p>Humidity</p>
                  <h4>
                    <b>{day[0].humidity}</b>%
                  </h4>
                  <progress max="100" value={day[0].humidity}></progress>
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
        </>
      )}
    </div>
  );
}

export default DetailBar;
