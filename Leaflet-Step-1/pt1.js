// Earthquake visualization script


// storing API endpoint into variable {Earthquake last 30 days}
 var endpoint = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson'
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

    // Create a marker for each Earthquake object
    // Object in question is in: EarthquakeData.features
    // magnitude of an earthquake will be radius
    // depth of earthquake is color

    var quake_array = [];

    EarthquakeData.features.forEach(earthQuake => {
        
        var quake_location = earthQuake.geometry.coordinates.slice(0,2);

        var magnitude = earthQuake.properties.mag * 10000 ;
    
        var depth = earthQuake.geometry.coordinates[2] *1000  ;

        // passing the magnitude as radius and depth as color for our circles
    quake_array.push(
        L.circle(quake_location , {
            fillOpacity: .75 , 
            color: depth ,
            fillcolor: 'blue' ,
            radius: magnitude , // The magnitudes need to be scaled using some function to make them visible

            }));
    });

    console.log(quake_array)

    // Adding the open street map tile layer
    var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    })

    // Adding the open street map topo layer
    var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    quake_layer = L.layerGroup(quake_array);

    // Base map object to hold the street and topo layers
    var baseMaps = {
        "Street Map": street ,
        "Topo Map": topo
    };

    // Create an overlayMaps object to contain the earthquake layer
    var overlayMaps = {
        'Earthquakes': quake_layer
    };


    // Generating the map object
    var myMap = L.map('map' , {
        center: [35.75,-39.46] , // North Atlantic ocean [35.75 ,-39.46]
        zoom: 3 , 
        layers: [street , quake_layer]
    });

    // Create a layer control that contains our baseMaps and overlayMaps, and add them to the map.
    L.control.layers(baseMaps , overlayMaps, { 
        collapsed: false
    }).addTo(myMap)



};

// To do:


