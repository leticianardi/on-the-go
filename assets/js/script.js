let map;

// initialize the map
function initMap() {
// map location
  const sfran = { lat: 37.773, lng: -122.431 };
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: -34.397, lng: 150.644 },
  });

  // // add a marker
  // const marker = new google.maps.Marker({
  //   position: sfran,
  //   map: map,
  // });

}




//   map = new google.maps.Map(document.querySelector("mapouter"), {
//     zoom: 12.74,
//     center: new google.maps.LatLng(37.7586995,-122.4359033,),
//     mapTypeId: "default",
//   });

//   // Create a <script> tag and set the USGS URL as the source.
//   const script = document.createElement("script");

//   // This example uses a local copy of the GeoJSON stored at
//   // https://www.refugerestrooms.org/api/v1/restrooms?page=1&per_page=20&offset=0
//   script.src =
//     "https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js";
//   document.getElementsByTagName("head")[0].appendChild(script);
// }

// Loop through the results array and place a marker for each
// set of coordinates.
<<<<<<< HEAD
// const eqfeed_callback = function (results) {
//   for (let i = 0; i < results.features.length; i++) {
//     const coords = results.features[i].geometry.coordinates;
//     const latLng = new google.maps.LatLng(coords[1], coords[0]);

//     new google.maps.Marker({
//       position: latLng,
//       map: map,
//     });
//   }
// };
=======
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

// toggling the menu
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }

  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )  
}

hamburger.addEventListener("click", toggleMenu);



>>>>>>> 3945b5fef2dd35f3213608f488044b2da627a9a5
