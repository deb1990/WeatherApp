/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    module.service("locationService", function () {
        this.getCurrentLocation = function (successCallback, errorCallback) {
            if (this.isLocationApiAvailable()) {
                navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
            }
            else {
                errorCallback();
            }

        };

        this.isLocationApiAvailable = function () {
            return navigator.geolocation;
        };
    });
})(weatherApp);