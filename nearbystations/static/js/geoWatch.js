let watchId = null;
let options = {
  enableHighAccuracy: true,  // Enable high accuracy, if available
  timeout: 10000,            // 10 seconds
  maximumAge: 300000         // Only accept cached positions whose age is not greater than 5 minutes
};

window.onload = function () {
    startWatching();
};

function startWatching(){
    //Toggle the buttons
    document.getElementById("startButton").classList.add('hide');
    document.getElementById("stopButton").classList.remove('hide');

    if (navigator.geolocation){
        //setup watch position
        watchId = navigator.geolocation.watchPosition(displayPosition, locationError, options);
    }else{
        displayError("Update your browser to use Geolocation")
    }

}

function getCurrentLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayPosition, locationError, options)
    }else{
        displayError("Update your browser to use Geolocation");
    }
}

function stopWatching() {
    //Toggle buttons
    document.getElementById("stopButton").classList.add("hide");
    document.getElementById("startButton").classList.remove("hide");

    //clear the watch variable
    navigator.geolocation.clearWatch(watchId);

    //Display the current location
    getCurrentLocation();
}
