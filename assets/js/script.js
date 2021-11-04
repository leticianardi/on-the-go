// variables for API keys and ID
let lat = 37
let lng = -122
var apiKey = "AIzaSyDmHfuQJwMCXi2eNPE0MEeUQVYZvBRCCqY";
var mapSearchInput = document.querySelector("#map-search-input");
// do we need a variable for the lat and lng?
var cordinatesLatLng

function getMap(location) {
  
   var requestURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + location + "&key" + apiKey
  fetch(requestURL)
    .then(function (response) {
      console.log(response)
      return response.json();
    })
    .then(function (data) {
      console.log(data, location);
    })

function formSubmit(event) {
  event.preventDefault();}
  var mapProp = {
    center: new google.maps.LatLng(lat, lng),
    zoom: 13.12,
    mapTypeId: "terrain",
}
}
let map;
var bathroomsList = [];


async function myMap() {

  // Get location form
  var locationForm = document.getElementById('location-form');

  // Listen for submit
  locationForm.addEventListener('submit', geocode);

  function geocode(e) {
    if(e){
    e.preventDefault();}

    var location = document.getElementById('map-search-input').value;
if(!location){
  location = "San Francisco"
}
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: location,
        key: 'AIzaSyDmHfuQJwMCXi2eNPE0MEeUQVYZvBRCCqY'
      }
    })
      .then(function (response) {
        // Log full response
        console.log(response);


        // Geometry
        lat = response.data.results[0].geometry.location.lat;
        lng = response.data.results[0].geometry.location.lng;
        console.log(lat);
        console.log(lng);

        // var geometryOutput = `
        // https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=5&lat=${lat}&lng=${lng}`;

        // console.log(geometryOutput);



        // insert geocoding 
        // fetch result to store lat and lng
        var mapStart = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=5&lat=' + lat + '&lng=' + lng
        var mapProp = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 13.12,
          mapTypeId: "terrain",

        };

        fetch(mapStart)
          .then(response => response.json())
          .then(data => {
            for (i = 0; i < data.length; i++) {
              var dataPoint = data[i]
              // console.log(data[i])
              bathroomsList.push(dataPoint)
            }

          })
          .then(() => {
            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
            console.log(bathroomsList);

            for (i = 0; i < bathroomsList.length; i++) {
              console.log(bathroomsList[i])
              var dataPoint = bathroomsList[i];

              const marker = new google.maps.Marker({
                position: { lat: dataPoint.latitude, lng: dataPoint.longitude },
                map: map,
              });

            }

          })
      }
      )
  }
  geocode();
}

// async function getRestrooms() {
//   fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=5&lat=${lat}&lng=-${lng}`)
//     .then(response => response.json())
//     .then(data => {
//       for (i = 0; i < data.length; i++) {
//         var dataPoint = data[i]
//         // console.log(data[i])
//         bathroomsList.push(dataPoint)
//       }



const eqfeed_callback = function (results) {
  for (let i = 0; i < results.features.length; i++) {
    const coords = results.features[i].geometry.coordinates;
    const latLng = new google.maps.LatLng(coords[1], coords[0]);

    new google.maps.Marker({
      position: latLng,
      map: map,
    });
  }
};