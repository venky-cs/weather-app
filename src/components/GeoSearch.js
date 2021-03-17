import React,{useState, useEffect} from 'react'
import axios from 'axios';

let cors = 'https://cors-anywhere-venky.herokuapp.com/';
function GeoSearch({gps}) {
    const [geoWoeid,setGeoWoeid] = useState('')
    useEffect(() => {
        axios
          .get(
            ` ${cors}https://www.metaweather.com/api/location/search/?lattlong=${gps}`
          )
          .then((response) => setGeoWoeid(response.data));
    }, [gps]);
    return (
        <div>
            <h3>{gps}</h3>
            {/* <h5>{geoWoeid}</h5> */}
        </div>
    )
}

export default GeoSearch
