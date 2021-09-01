// Leaflet quick start tutorial


// Intializing map and setting view

var London_center = [51.505 , -0.09];

// Defining the map object
var myMap = L.map('map').setView(London_center , 13);

// Creating street map tile using open street map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Adding a marker at London's Center
var marker = L.marker([51.5 , -.09]).addTo(myMap);

// Adding a circle to the map
var circle = L.circle([51.508 , -.11] , {
    color: 'red' , 
    fillcolor: '#f03' , 
    fillopacity: .5 , 
    radius: 500 
}).addTo(myMap);

// Adding a polygon
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(myMap);

// Adding a pop up message to each of our objects
marker.bindPopup('<b>Hello World!</b><br> I am a Pop up</br>').openPopup();

circle.bindPopup('I am a circle');

polygon.bindPopup('I am a polygon');

// Pop ups can be used as layers

var popup = L.popup()
.setLatLng([51.5 , -.09])
.setContent('I am a standalone popup')
.openOn(myMap);

// When objects in leaflet are interacted with they send out an event
// that we can capture using a function

function onMapClick(e) {
    alert('you clicked the map at' + e.latlng)
}

myMap.on('click' , onMapClick);