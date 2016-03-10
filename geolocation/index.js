(function() {
	var map

  window.onload = function() {
		navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
	};

	function geoSuccess(position) {
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		var accuracy = Math.floor(position.coords.accuracy);
		document.getElementById("accuracy").innerHTML("accuracy: " + accuracy + "m");

		setMap(lat, lng);
	}

	function geoError() {
		alert("Geolocation Error")
	}

	function setMap(lat, lng) {
		var latlng = new google.maps.LatLng(lat, lng);
		var mapOptions = {
			zoom: 18,
			scaleControl: true,
			streetViewControl: false,
			panControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM
			},
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_BOTTOM
			},
			center: latlng
		};

		map = new google.maps.Map(document.getElementById("map"), mapOptions);

		var marker = new google.maps.Marker({
			map: map,
			draggable: true,
			animation: google.maps.Animation.DROP,
			position: latlng
		});
	}
})();
