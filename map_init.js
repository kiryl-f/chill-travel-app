document.addEventListener('DOMContentLoaded', function () {
    // Array of destinations: each destination has a name and coordinates (longitude, latitude)
    const destinations = [
        { name: 'Eiffel Tower (Paris)', coordinates: [2.2945, 48.8584] }, // Eiffel Tower
        { name: 'Statue of Liberty (New York)', coordinates: [-74.0445, 40.6892] }, // Statue of Liberty
        { name: 'Colosseum (Rome)', coordinates: [12.4924, 41.8902] }, // Colosseum
        { name: 'Great Wall of China (Beijing)', coordinates: [116.5704, 40.4319] }, // Great Wall of China
        { name: 'Sydney Opera House (Sydney)', coordinates: [151.2153, -33.8568] } // Sydney Opera House
    ];

    // Randomly select a destination from the array
    const randomDestination = destinations[Math.floor(Math.random() * destinations.length)];

    // Initialize the map
    const map = new ol.Map({
        target: 'map', // The ID of the element where the map will be rendered
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(), // Use OpenStreetMap as the tile source
            }),
            // Add vector layer for markers
            new ol.layer.Vector({
                source: new ol.source.Vector(),
            }),
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat(randomDestination.coordinates), // Center the map on the randomly selected destination
            zoom: 4, // Initial zoom level
        }),
    });

    // Convert the coordinates from longitude/latitude to the map projection
    const markerPosition = ol.proj.fromLonLat(randomDestination.coordinates);

    // Create a new feature for the marker
    const markerFeature = new ol.Feature({
        geometry: new ol.geom.Point(markerPosition),
    });

    // Add the marker feature to the map's vector layer
    const vectorLayer = map.getLayers().item(1);
    const vectorSource = vectorLayer.getSource();
    vectorSource.addFeature(markerFeature);

    // Optional: Log the selected destination to the console (for debugging)
    console.log('Randomly selected destination:', randomDestination.name);
});
