import React, { useState,useEffect } from "react";

function SideBar({result}) {
  const [search, setSearch] = useState(true);
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
      if(location !== ""){
          result(location);
      }else{
          console.log(location)
      }
  },[location])
  return (
    <div className="side">
      <div className="search">
        {search ? (
          <div className="top">
            <button onClick={() => setSearch((prevState) => !prevState)}>
              Search for places
            </button>
            <button>
              <span class="material-icons">gps_fixed</span>
            </button>
          </div>
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
