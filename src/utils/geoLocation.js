export const getGeoLocation = (callback) => {
  // callback({
  //   lat: 40.7214921,
  //   lon: -73.8406627
  // })
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      callback({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      });
    });
  } else {
    callback({
      error: 'Geolocation is not supported by this browser.'
    })
  }
};