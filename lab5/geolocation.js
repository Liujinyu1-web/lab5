// Function to get geolocation
function getGeolocation() {
    const geoDisplay = document.getElementById('geolocation');

    // Check if Geolocation is supported
    if (navigator.geolocation) {
        // If supported, get the current position
        navigator.geolocation.getCurrentPosition(showGeolocation, showError);
    } else {
        // If not supported, display an error
        geoDisplay.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Callback function to show the geolocation
function showGeolocation(position) {
    const geoDisplay = document.getElementById('geolocation');
    geoDisplay.innerHTML = "Latitude: " + position.coords.latitude + 
                           "<br>Longitude: " + position.coords.longitude;
}

// Function to handle errors during geolocation
function showError(error) {
    const geoDisplay = document.getElementById('geolocation');
    
    switch (error.code) {
        case error.PERMISSION_DENIED:
            geoDisplay.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            geoDisplay.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            geoDisplay.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            geoDisplay.innerHTML = "An unknown error occurred.";
            break;
    }
}
