window.onload = function () {
    let options = {
        enableHighAccuracy: true, //Enable high accuracy, if available
        timeout: 1000,  // 10 seconds
        maximumAge: 300000  //only accepts cached positions whose age is < specified no in ms
    }
    // Check if Geolocation object is available and pass callback function if true .Display error message if not
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayPosition, locationError, options);
    }else {
        displayError("Please Update Your Browser to use Geolocation")
    }
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
    sendCoordinates(pos)
}

function displayError(msg) {
    document.getElementById("location-details").classList.add('hide')
    let elem = document.getElementById('errorArea');
    elem.innerHTML = msg;
}

/* If the user blocks location access or location cannot otherwise be determined */
function locationError(error) {
    let msg = "";

    console.log("error.message = " + error.message);
    switch (error.code){
        case error.PERMISSION_DENIED:
            msg = "User does not want their location displayed"
            break;
        case error.POSITION_UNAVAILABLE:
            msg = "Can't determine User's Location"
            break;
        case error.TIMEOUT:
            msg = "The request for geolocation information timed out"
            break;
        case error.UNKNOWN_ERR:
            msg = "An unknown error occurred"
    }

    displayError(msg)
}

function sendCoordinates(pos) {
    $.ajax({
      type: "GET",
      url: "/",
      data: {
        'longitude': pos.coords.longitude,
          'latitude': pos.coords.latitude,
      },
    });
}
