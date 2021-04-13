import React, { useState, useEffect } from 'react';
import background from './Cloud-background.png';
// import useGeolocation from './useGeolocation';
// import GeoSearch from './GeoSearch'

function SideBar({ result, datas, select, getwoeid }) {
  const [search, setSearch] = useState(true);
  const [value, setValue] = useState('');
  const [location, setLocation] = useState('');

  const [woeid, setWoeid] = useState(0);

  // const currentLocation = useGeolocation();
  // const [geo, setGeo] = useState('');
  // const [gps, setGps] = useState(false);

  useEffect(() => {
    if (location !== '') {
      result(location);
    } else {
      console.log(location);
    }
  }, [location, datas]);

  useEffect(() => {
    if (woeid !== '') {
      getwoeid(woeid);
    } else {
      console.log(woeid);
    }
  }, [woeid]);

  let day = datas.consolidated_weather;
  let info = datas;

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
    <div className="side">
      <div className="search">
        {search ? (
          <>
            <div className="top">
              <button onClick={() => setSearch((prevState) => !prevState)}>
                Search for places
              </button>
              <button class="btn-logo">
                {/* <span className=" material-icons" onClick={getGeolocation}> */}
                <span className=" material-icons">gps_fixed</span>
              </button>
            </div>
            {day && day.length > 1 && (
              <div
                className="content"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                <div className="content-main">
                  <img
                    src={`/icons/${setWeatherImg()}.png`}
                    alt={day[0].weather_state_name}
                  />
                  <h3>
                    <sup>{Math.floor(day[0].the_temp)} </sup> .C{' '}
                  </h3>
                  <h5>{day[0].weather_state_name}</h5>
                  <p>Today .{formatDate(day[0].applicable_date)}</p>
                  <p>
                    <span class="material-icons">place</span>
                    {info.title}
                  </p>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={search ? null : 'searchbar'}>
            <button
              className="close"
              onClick={() => setSearch((prevState) => !prevState)}
            >
              X
            </button>
            <div>
              <div className="top">
                <input
                  type="text"
                  onChange={(e) => {
                    setValue(e.target.value);
                    setLocation(value);
                  }}
                  placeholder="search location"
                  onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      updateValue();
                    }
                  }}
                  autoFocus
                />
                <button onClick={updateValue}>Search</button>
              </div>

              <div className="select">
                {select &&
                  select.map((choose, i) => (
                    <li
                      onClick={() => {
                        setWoeid(choose.woeid);
                        setSearch((prevState) => !prevState);
                      }}
                      key={i}
                    >
                      {choose.title}
                    </li>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
      {/* {gps && (
        <GeoSearch gps={geo}/>
        // <div className={gps ? null : 'searchbar'}>
        //   <h4>gps:{geo}</h4>
        // </div>
      )} */}
    </div>
  );

  function updateValue() {
    setLocation(value);
    // setSearch((prevState) => !prevState);
  }

  // function getGeolocation() {
  //   setGps((prevState) => !prevState);
  //   // console.log(currentLocation)
  //   let lat = currentLocation.lat;
  //   let lng = currentLocation.lng;

  //   let finalLat = (Math.round(lat * 100) / 100).toFixed(2);
  //   let finalLng = (Math.round(lng * 100) / 100).toFixed(2);
  //   // console.log(finalLat, finalLng);
  //   setGeo(`${finalLat},${finalLng}`);
  //   console.log(geo);
  // }
}

export default SideBar;
