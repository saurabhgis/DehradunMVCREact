
var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');



var view = new ol.View({
    center: ol.proj.fromLonLat([78.0322, 30.3165]),
    zoom: 11
})

var overlay = new ol.Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250,
    },
});
closer.onclick = function () {
    overlay.setPosition(undefined);
    closer.blur();
    return false;
};

var map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    overlays: [overlay],
    view: view
});
