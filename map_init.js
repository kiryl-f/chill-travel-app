// map_init.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map
    const map = new ol.Map({
        target: 'map', // The ID of the element where the map will be rendered
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM(), // Use OpenStreetMap as the tile source
            }),
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([0, 0]), // Center of the map (longitude, latitude)
            zoom: 2, // Initial zoom level
        }),
    });
});
