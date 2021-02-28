(() => {
  function prepareMap() {
    const map = L.map("mapid", {
      minZoom: 10,
      maxZoom: 18,
    }).setView([54.1756, 15.58122], 18);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    const marker = L.marker([54.1756, 15.58122], {
      icon: L.divIcon({
        className: "marker",
        iconSize: [24, 24],
        popupAnchor: [160, 39],
      }),
    });

    marker.bindPopup("Kołobrzeg, ul. Słowińców 9/41").openPopup();

    marker.on("mouseover", (e) => {
      marker.openPopup();
    });

    marker.on("mouseout", (e) => {
      marker.closePopup();
    });

    marker.addTo(map);
  }

  function prepareMapButton() {
    const mapButton = document.getElementsByClassName("map-button")[0];
    const mapEl = document.getElementById("mapid");

    mapButton.addEventListener("click", () => {
      mapEl.scrollIntoView();
      window.scrollBy(0, -140);
    });
  }

  prepareMap();
  prepareMapButton();
})();
