import { useState, useEffect } from 'react';
import SideBar from './SideBar';
import DetailBar from './DetailBar';

import axios from 'axios';

let city = '28743736';
let cors = 'https://cors-anywhere-venky.herokuapp.com/';
function Main() {
  const [state, setState] = useState('');
  const [select, setSelect] = useState('');
  const [woeid, setWoeid] = useState(city);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log(state);
    if (state.length > 1) {
      axios
        .get(
          ` ${cors}https://www.metaweather.com/api/location/search/?query=${state}`
        )
        .then((response) => {
          setSelect(response.data);
          // setWoeid(response.data[0].woeid)
        });
      // console.log("woeid", woeid);
    } else {
      console.log('empty state');
    }
  }, [state, data]);

  useEffect(() => {
    axios
      .get(`${cors}https://www.metaweather.com/api/location/${woeid}`)
      .then((response) => setData(response.data));
    // console.log('data', data);
  }, [woeid]);

  return (
    <div className="main">
      <SideBar
        select={select}
        getwoeid={getWoeid}
        result={getLocation}
        datas={data}
        name={state}
      />
      <DetailBar datas={data} />
    </div>
  );

  async function getLocation(value) {
    let a = await value;
    if (a.length > 1) {
      setState(a);
    } else {
      console.log('error');
    }
  }

  function getWoeid(a) {
    setWoeid(a);
    // console.log(woeid,"testing")
  }
}

export default Main;
