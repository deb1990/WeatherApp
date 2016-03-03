/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    var $http, appConstants;

    function weatherService(_$http_, _appConstants_) {
        $http = _$http_;
        appConstants = _appConstants_;
    }

    weatherService.prototype.fetchWeatherByCoordinates = function (location, successCallback, errorCallback) {
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
    weatherService.prototype.fetchWeatherByZipCode = function (zipCode, successCallback, errorCallback) {
        var apiURL = appConstants.weatherAPIUrl +
            '?zip=' + zipCode +
            "&appid=" + appConstants.appID +
            "&units=metric";
        $http({
            method: 'GET',
            url: apiURL
        }).then(successCallback, errorCallback);
    };
    module.service("weatherService", ["$http", "appConstants", weatherService]);
})(weatherApp);