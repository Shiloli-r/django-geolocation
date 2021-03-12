'use strict';

let map = null;
let locationMap = {
    'latitude': -1.3005745,
    'longitude': 36.7948243,
};

window.onload = function () {
    drawMap(locationMap)
}

function drawMap(mapObject) {
    //create a new open layer map
    map = new ol.Map({
       target: 'map',
       layers: [
           new ol.layer.Tile({
               source: new ol.source.OSM()  // will be tiled using OpenStreetMap
           })
       ],
       view: new ol.View({
           center: ol.proj.fromLonLat([mapObject.longitude, mapObject.latitude]),
           zoom: 18
       })
    });

    drawMarker(mapobject);
}

function drawMarker(mapObject) {
    //Add a marker on the user location
    let layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [
                new ol.Feature({
                    geometry: new ol.geom.Point(
                        ol.proj.fromLonLat([mapObject.longitude, mapObject.latitude])
                    )
                })
            ]
        })
    });
    map.addLayer(layer);
}
