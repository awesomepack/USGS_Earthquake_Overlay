// Earthquake visualization script


// storing API endpoint into variable {Earthquake last 30 days}
 var endpoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
// Request data from the endpoint
d3.json(endpoint).then(function(data) {
    
    // The structure of the properties data
    console.log(data.features[0].properties)

    // The structure of the coordinate data and depth
    console.log(data.features[0].geometry.coordinates.slice(0,2))

    console.log(data)

    // creating mapOptions variable
var mapOptions = {
    center: [15.326572, -76.157227] ,// lat and log for Atlantic Ocean
    zoom: 3
};

// creating the mapObject
var myMap = new L.map('map' , mapOptions);

// creating the tile layer
var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });



// Adding the tile to the map
myMap.addLayer(topo);

// initializing the cities layer and circle array
var circleArray = [];

// creating earthquake circles from data
for (var i = 0; i < data.features.length; i++){

    circleArray.push(
        L.circle([data.features[i].geometry.coordinates[1] ,data.features[i].geometry.coordinates[0]] , setSize(data.features[i].properties.mag) , {
            color: setColor(data.features[i].geometry.coordinates[2]) , 
            fillOpacity:.75
                }
            ).bindPopup('Location: ' + data.features[i].properties.place) // Pop up with location
        )

};

// creating the cityLayer group
var cityLayer = L.layerGroup(circleArray);

// adding cityLayer to map
cityLayer.addTo(myMap)

// Set Up Legend
var legend = L.control({ position: "bottomright" });
legend.onAdd = function() {
    var div = L.DomUtil.create("div", "info legend"), 
    ratingLevels = [1, 2, 3, 4, 5, 6];

    div.innerHTML += "<h3>Depth</h3>"

    for (var i = 0; i < ratingLevels.length; i++) {
        div.innerHTML +=
            '<i style="background: ' + setColor(ratingLevels[i] + 1) + '"></i> ' +
            ratingLevels[i] + (ratingLevels[i + 1] ? '&ndash;' + ratingLevels[i + 1] + '<br>' : '+');
    }
    return div;
};
// Add Legend to the Map
legend.addTo(myMap);

// To Do:
// Get color scale to show on legend





});



// Fucntions

// setColor Function
// Color selection from colorbrewer2.org
//https://colorbrewer2.org/#type=sequential&scheme=YlGnBu&n=6
function setColor(depth) {

    switch(true){

        case depth > 60:
            return '#253494';
        
        case depth > 50:
            return '#2c7fb8';
        
        case depth > 40:
            return '#41b6c4'

        case depth > 30:
            return '#7fcdbb';
        
        case depth > 20:
            return '#c7e9b4';
        
        case depth < 20:
            return '#ffffcc';

    };
};

// setSize function
function setSize(mag){

    return mag * 10000



}
