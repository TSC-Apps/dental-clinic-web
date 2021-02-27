const mymap = L.map("mapid").setView([54.1756, 15.58122], 30);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(mymap);

const marker = L.marker([54.1756, 15.58122]).addTo(mymap);
marker.bindPopup("Kołobrzeg, 78-100 ul. Słowińców 9/41").openPopup();
