import { useState, useEffect } from "react";
import SideBar from "./SideBar";
import DetailBar from "./DetailBar";

import axios from "axios";

let city = 28743736;
function Main() {
  const [state, setState] = useState("");
  const [woeid, setWoeid] = useState(city);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(state);
    if (state.length > 1) {
      axios
        .get(
          ` https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${state}`
        )
        .then((response) => setWoeid(response.data[0].woeid));
      console.log("woeid", woeid);
    } else {
      console.log("empty state");
    }
  }, [state]);

  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
      )
      .then((response) => setData(response.data.consolidated_weather));
    console.log("data", data);
  }, [woeid]);

  return (
    <div className="main">
      <SideBar result={getLocation} datas={data} name={state} />
      <DetailBar />
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
