// variables for API keys and ID
var appID = "";
var appKey = "";

// global variables
// this is the variable that takes user input???
var mapSearchInput = document.querySelector("#map-search-input");
// do we need a variable for the lat and lng?
var cordinatesLatLng

// fetch function, when response from API comes back, run refuge API function
function getMap(location) {
    // this gets the location of the map - need to have a string for the url
    var requestURL = "https://" + appID + "&appKey" + "&q=" +
        fetch(requestURL)
            .then(function (response) {
                console.log(response)
                return response.json();
            })
            .then(function (data) {
                console.log(data, location);
                locationResult(data, location);
            })
}

// prevent default behavior of a form 
function formSubmit(event) {
    event.preventDefault();
    var location = cordinatesLatLng.value.trim();
    if (location) {
        getMap(location);
        previoius.unshift({ location });
        cordinatesLatLng.value = "";
    }
    else {
        swal({
            title: "Do you need a restroom?",
            text: "Please enter a location",
            icon: "warning",
            buton: "Try Again",

        });
    }
    save();
    history(location);
}


// event listner for formSubmit function
mapSearchInput.addEventListener("submit", formSubmit);

// global variables for the cordinateLatLngResults function
var locationResult = document.querySelector("#location");
var locationAppend = document.querySelector("#location-append");

function locationResult(locationInput) {
    
    // clear old data
    locationAppend.textContent = ""
    locationResult.textContent = locationInput.q;

    // for loop allows function to run and display more than one result
    var cards = locationInput.hits;
    for (var i = 0; i < cards.lenght - 4; i++){
        var location = cards[i];

        console.log(location);

        // todo we need to take the results and get them on the page... this happens here?!
        // // creating element to put results in
        // var locationResultEl = document.createElement("div");
        // locationResultEl.classList = "card bg-body text"


        locationAppend.appendChild(locationResultsEl);

    }
}

// empty array for searches
var previous = [];
// pointer to html
var pastSearch = document.querySelector("#past-search-results");


// function to set local storage
function save() {
    localStorage.setItem("previous", JSON.stringify(previoius));
};


// todo local storage thing?
// create a button element that shows up as a clickable object in order to show its data when clicked
function history(previous) {
    oldLocation
}

    


    
    
    
    
    
    
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
        zoom: 11,
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