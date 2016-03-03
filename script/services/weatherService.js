/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    module.service("weatherService", function ($http, appConstants) {
        this.fetchWeatherByCoordinates = function (location, successCallback, errorCallback) {
            var apiURL = appConstants.weatherAPIUrl +
                '?lat=' + location.latitude +
                '&lon=' + location.longitude +
                "&appid=" + appConstants.appID +
                "&units=metric";
            $http({
                method: 'GET',
                url: apiURL
            }).then(successCallback, errorCallback);
        };
        this.fetchWeatherByZipCode = function (zipCode, successCallback, errorCallback) {
            var apiURL = appConstants.weatherAPIUrl +
                '?zip=' + zipCode +
                "&appid=" + appConstants.appID +
                "&units=metric";
            $http({
                method: 'GET',
                url: apiURL
            }).then(successCallback, errorCallback);
        };
    });
})(weatherApp);