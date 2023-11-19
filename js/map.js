var map = L.map("map").setView([-37.3156, -59.13597], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// POINT LAYER
var geojsonMarkerOptions = {
  radius: 12,
  fillColor: "#ffffff",
  color: "#bf3d3b",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8,
};

let circleMarker = L.geoJSON(puntos_murales, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
  }
});

circleMarker.addTo(map);


var myIcon = L.icon({
  iconUrl: 'img/camera-solid.svg',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

let pointsLayer = L.geoJSON(puntos_murales, {
pointToLayer: function (feature, latlng) {
  return L.marker(latlng, { icon: myIcon });
}
});

pointsLayer.addTo(map);
