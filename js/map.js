var map = L.map("map").setView([-37.3156, -59.13597], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// POINT LAYER
var myIcon = L.divIcon({
  className: 'icon-container',
  html: '<div class="circle"></div><img src="img/camera-solid.svg" width="14" height="14">'
});

let pointsLayer = L.geoJSON(puntos_murales, {
pointToLayer: function (feature, latlng) {
  return L.marker(latlng, { icon: myIcon });
}
});

pointsLayer.addTo(map);
