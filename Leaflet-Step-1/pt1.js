// Earthquake visualization script

// storing API endpoint into variable
var endpoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'

// Request data from the endpoint
d3.json(endpoint).then(function(data) {
    
    // The structure of the properties data
    console.log(data.features[0].properties)

    // The structure of the coordinate data and depth
    console.log(data.features[0].geometry.coordinates.slice(0,2))

    // calling the creatMap() function
    createMap(data);
});

// create the map function we call on the data

function createMap(EarthquakeData){

    // Generating the map object
    var myMap = L.map('map' , {
        center: [35.75,-39.46] ,
        zoom: 3
    });

    // Adding the open street map tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

    // Create a marker for each Earthquake object
    // Object in question is in: EarthquakeData.features
    // magnitude of an earthquake will be radius
    // depth of earthquake is color

    var magnitude = EarthquakeData.features[0].properties.mag
    
    var depth = EarthquakeData.features[0].geometry.coordinates[2]

    console.log(depth);





};


