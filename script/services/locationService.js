/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    function locationService() {
        //constructor
    }

    locationService.prototype.getCurrentLocation = function (successCallback, errorCallback) {
        if (this.isLocationApiAvailable()) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        }
        else {
            errorCallback();
        }
    };
    locationService.prototype.isLocationApiAvailable = function () {
        return navigator.geolocation;
    };
    module.service("locationService", locationService);
})(weatherApp);