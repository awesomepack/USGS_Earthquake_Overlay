// Earthquake visualization script

// storing API endpoint into variable
var endpoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson'

// Request data from the endpoint
d3.json(endpoint).then(function(data) {
    
    // The structure of the properties data
    console.log(data.features[0].properties)

    // The structure of the coordinate data and depth
    console.log(data.features[0].geometry.coordinates)
});

// create the map function we call on the data



