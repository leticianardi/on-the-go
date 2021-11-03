let map;
var bathroomsList = [];
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 2,
//     center: new google.maps.LatLng(2.8, -187.3),

//   });

//   // Create a <script> tag and set the USGS URL as the source.
//   const script = document.createElement("script");

//   // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src =
//     "https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=5&lat=37.7586995&lng=-122.43590333";

//     document.getElementsByTagName("head")[0].appendChild(script);
// }

async function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(37.7586995, -122.120850),
        zoom: 10,
        mapTypeId: "terrain",

    };
    const uluru = { lat: 37.344, lng: -122.036 };
    // insert geocoding 
    // fetch result to store lat and lng
    let lat 
    let lng
    fetch(`https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=5&lat=${37.7586995}&lng=${-122.120850}`)
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < data.length; i++) {
                var dataPoint = data[i]
               // console.log(data[i])
                bathroomsList.push(dataPoint)
            }
            

        })
        .then(()=> {    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        console.log(bathroomsList);
        
            for(i=0; i < bathroomsList.length; i++) {
                console.log(bathroomsList[i])
                var dataPoint = bathroomsList[i];

                const marker = new google.maps.Marker({
                    position: { lat: dataPoint.latitude, lng: dataPoint.longitude},
                    map: map,
                });
    
        }
        

        }) 

}

async function getRestrooms() {
    fetch("https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=100&offset=5&lat=37.7586995&lng=-122.43590333")
        .then(response => response.json())
        .then(data => {
            for (i = 0; i < data.length; i++) {
                var dataPoint = data[i]
               // console.log(data[i])
                bathroomsList.push(dataPoint)
            }
            

        });
}
// initMap();
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
// toggling the menu
/* const menu = document.querySelector(".menu");
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

hamburger.addEventListener("click", toggleMenu); */
