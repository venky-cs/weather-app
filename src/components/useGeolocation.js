import { useState, useEffect } from 'react';

function UseGeolocation() {
  const [current, setCurrent] = useState({
    loaded: false,
    coordinates: { lat: '', lng: '' },
  });

  const onSuccess = (location) => {
    setCurrent({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setCurrent({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  console.log(current.coordinates);
  return current.coordinates;
}

export default UseGeolocation;
