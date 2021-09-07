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

    'city': ['San Francisco' , 'Los Angeles' , 'San Diego'] ,
    'coordinates': [[37.77986 , -122.42905] ,[34.05349 , -118.24532] , [32.71571 , -117.16472]] , 
    'population': [250000 , 150000 , 30000] , 
    'awesomeness': [7 , 8 , 10]
};

// initializing the cities layer and circle array
var circleArray = [];

// creating city circles from dataObj
for (var i = 0; i < dataObj.city.length; i++){

    circleArray.push(
        L.circle(dataObj.coordinates[i] , dataObj.population[i]))

};

// creating the cityLayer group
var cityLayer = L.layerGroup(circleArray);

// adding cityLayer to map
cityLayer.addTo(myMap)


