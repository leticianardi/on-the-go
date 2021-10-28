let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12.74,
    center: new google.maps.LatLng(37.7586995,-122.4359033,),
    mapTypeId: "default",
  });

  // Create a <script> tag and set the USGS URL as the source.
  const script = document.createElement("script");

  // This example uses a local copy of the GeoJSON stored at
  // https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=20&offset=0
  script.src =
    "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
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