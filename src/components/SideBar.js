import React, { useState, useEffect } from "react";

function SideBar({ result, datas }) {
  const [search, setSearch] = useState(true);
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (location !== "") {
      result(location);
    } else {
      console.log(location);
    }
  }, [location, datas]);

  let day = datas.consolidated_weather;
  let info = datas;

  return (
    <div className="side">
      <div className="search">
        {search ? (
          <>
            <div className="top">
              <button onClick={() => setSearch((prevState) => !prevState)}>
                Search for places
              </button>
              <button>
                <span class="material-icons">gps_fixed</span>
              </button>
            </div>
            {day && day.length > 1 && (
              <div>
                <img
                  src={`/icons/${day[0].weather_state_name}.png`}
                  alt={day[0].weather_state_name}
                />
                <h3>
                  <sup>{Math.floor(day[0].the_temp)} </sup> .C{" "}
                </h3>
                <h5>{day[0].weather_state_name}</h5>
                <p>Today .{day[0].applicable_date}</p>
                <p>{info.title}</p>
              </div>
            )}
          </>
        ) : (
          <div className="searchbar">
            <button onClick={() => setSearch((prevState) => !prevState)}>
              X
            </button>
            <div className="top">
              <input
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder="search location"
              />
              <button
                onClick={() => {
                  setLocation(value);
                  setSearch((prevState) => !prevState);
                }}
              >
                Search
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SideBar;
