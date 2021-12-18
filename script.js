
// initialize Leaflet
var map = L.map('map').setView({lon: 0, lat: 0}, 2);

// add the OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
}).addTo(map);

new GeoSearchControl({
    provider: OpenStreetMap, // required
    style: 'bar', // optional: bar|button  - default button
  }).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({imperial: true, metric: true}).addTo(map);


map.addControl(
  new GeoSearchControl({
    provider,
  }),
);


