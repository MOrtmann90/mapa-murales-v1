var sidebar = L.control.sidebar("sidebar", {
  closeButton: true,
  position: "left",
});
map.addControl(sidebar);

// ===================== CLICK HANDLER ===================== //

function mostrarInformacionDeCapa(layer) {
  if (layer.feature && layer.feature.properties.name) {
    console.log(layer.feature.properties.name);
    console.log(layer.feature.properties.img_1);
    setTimeout(function () {
      sidebar.show();
    }, 500);
    sidebar.setContent(
      ` <div class="sidebar-container"><img src="img/${layer.feature.properties.img_1}.jpeg"> <h2>Dirección:</h2> ${layer.feature.properties.name}<h2>Muralista:</h2>${layer.feature.properties.muralista}</div>`
    );
  }
}

// Asigna la función al evento "click"
pointsLayer.on("click", function (e) {
  mostrarInformacionDeCapa(e.layer);
});

// ===================== SIDEBAR FUNCTIONS ===================== //

map.on("click", function () {
  sidebar.hide();
});
