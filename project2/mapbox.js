let lat = 46.234168;
let lng = 6.052926;

onMapClick = (e) => {
	popup.setLatLng(e.latlng)
	.setContent("Current position: " + e.latlng.toString())
	.openOn(mymap);
};

let mymap = L.map('mapid').setView([lat, lng], 14);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
	{
		attribution: '© <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 14,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoibWl0YWthbmlhIiwiYSI6ImNqbWFuM2xnaTBiZWkzdnE0ZTYwaGNkZ2EifQ.2An8ekWb4LR-JGocIUqP1A'
	}).addTo(mymap);
mymap.on('click', onMapClick);

let marker = L.marker([lat, lng]).addTo(mymap);
marker.bindPopup("<b>CERN</b><br>World's Most Powerful Machine!").openPopup();

let circle = L.circle([lat, lng], {
	color: '#add8e6',
	fillColor: '#add8e6',
	fillOpacity: 0.5,
	radius: 100
}).addTo(mymap);

let popup = L.popup();