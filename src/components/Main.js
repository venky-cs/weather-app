import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import DetailBar from "./DetailBar";

import axios from "axios";

let city = 28743736;
function Main() {
  const [state, setState] = useState("");
  const [woeid, setWoeid] = useState(city);
  useEffect(() => {
    console.log(state);
    if (state.length > 1) {
      axios
        .get(
          ` https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${state}`
        )
        .then((response) => console.log(response.data));
    } else {
      console.log("empty state");
    }
  }, [state]);
  return (
    <div className="main">
      <SideBar result={getLocation} />
      <DetailBar value={state} />
    </div>
  );

  async function getLocation(value) {
    let a = await value;
    if (a.length > 1) {
      setState(a);
    } else {
      console.log("error");
    }
  }
}

export default Main;
