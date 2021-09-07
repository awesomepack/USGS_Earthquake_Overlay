// Leaflet tutorial from tutorials point

// creating mapOptions variable
var mapOptions = {
    center: [36.778259, -119.417931] ,// lat and log for CA 
    zoom: 6
};

// creating the mapObject
var myMap = new L.map('map' , mapOptions);

// creating the tile layer
var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });



// Adding the tile to the map
myMap.addLayer(topo);

// defining a latlng object
// Geo-coordinates of SF , LA , SD
var dataObj = {

    'city': ['San Francisco' , 'Los Angeles' , 'San Diego' , 'Merced' ,'Las Vegas' , 'Phoenix' ] ,
    'coordinates': [[37.77986 , -122.42905] ,[34.05349 , -118.24532] , [32.71571 , -117.16472] , [37.1807 , -120.2858] , [36.114647 , -115.1728], [33.44838 , -112.07404]] , 
    'population': [250000 , 150000 , 125000 , 100000 , 75000 , 72000 , 70000] , 
    'rating': [6 , 5 , 4 , 3 , 2 , 1 ]
};

// initializing the cities layer and circle array
var circleArray = [];

// creating city circles from dataObj
for (var i = 0; i < dataObj.city.length; i++){

    circleArray.push(
        L.circle(dataObj.coordinates[i] , dataObj.population[i] , {
            color: setColor(dataObj.rating[i]) , 
            fillOpacity:.90
                }
            )
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

    div.innerHTML += "<h3>Magnitude</h3>"

    for (var i = 0; i < ratingLevels.length; i++) {
        div.innerHTML +=
            '<i style="background: ' + setColor(ratingLevels[i] + 1) + '"></i> ' +
            ratingLevels[i] + (ratingLevels[i + 1] ? '&ndash;' + ratingLevels[i + 1] + '<br>' : '+');
    }
    return div;
};
// Add Legend to the Map
legend.addTo(myMap);


// Fucntions

// setColor Function
// Color selection from colorbrewer2.org
//https://colorbrewer2.org/#type=sequential&scheme=YlGnBu&n=6
function setColor(cool) {

    switch(true){

        case cool > 5:
            return '#253494';
        
        case cool > 4:
            return '#2c7fb8';
        
        case cool > 3:
            return '#41b6c4'

        case cool > 2:
            return '#7fcdbb';
        
        case cool > 1:
            return '#c7e9b4';
        
        case cool > 0:
            return '#ffffcc';

    };
};


