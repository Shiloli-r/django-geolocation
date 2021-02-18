window.onload = function () {
    geoController.getCurrentLocation(displayPosition, displayError)
}

function displayPosition(pos) {
    document.getElementById("timestamp").innerText = new Date(pos.timestamp);
    document.getElementById("lat").innerText = pos.coords.latitude;
    document.getElementById("long").innerText = pos.coords.longitude;
    document.getElementById("accuracy").innerText = pos.coords.accuracy;
    document.getElementById("altitude").innerText = (pos.coords.altitude ? pos.coords.altitude : "n/a" );
    document.getElementById("altitudeaccuracy").innerText = (pos.coords.altitudeAccuracy ? pos.coords.altitudeAccuracy : "n/a");
    document.getElementById("heading").innerText = pos.coords.heading;
    document.getElementById("speed").innerText = pos.coords.speed;
}

function displayError(msg) {
    document.getElementById("location-details").classList.add('hide')
    let elem = document.getElementById('errorArea');
    elem.innerHTML = msg;
}

    function testGeoController() {
      console.log(geoController.getPosition());
      console.log(geoController.getLastError());
      console.log(geoController.getLastMessage());
      console.log(geoController.getOptions());
      geoController.setOptions({
        enableHighAccuracy: false,  // Enable high accuracy, if available
        timeout: 5000,            // 5 seconds
        maximumAge: 10000         // Only accept cached positions whose age is not greater than 10 seconds
      });
      console.log(geoController.getOptions());
    }
