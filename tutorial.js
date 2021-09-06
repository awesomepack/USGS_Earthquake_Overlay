// Leaflet tutorial from tutorials point

// creating mapOptions variable
var mapOptions = {
    center: [17.385044 , 78.486671] , 
    zoom: 10
};

// creating the mapObject
var myMap = new L.map('map' , mapOptions);

// creating the tile layer
var layer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});


// Adding the tile to the map
myMap.addLayer(layer);

// defining the coordinates of the circle
var circle_coordinates = [17.385044 , 78.488671];

// creating a circleOptions object
var circleOptions = {
    color: 'red' , 
    fillcolor:'#f03' , 
    fillOpacity:.5
};

// Creating the circle object
var circle = L.circle(circle_coordinates , 50000 , circleOptions);


// Adding circle to the map
circle.addTo(myMap);


