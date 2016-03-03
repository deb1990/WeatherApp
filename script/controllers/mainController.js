/**
 * Created by Debarshi on 3/2/2016.
 */

(function (module) {
    function mainController($scope, locationService, weatherService) {
        $scope.locationFetched = function (position) {
            weatherService.fetchWeatherByCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, $scope.weatherFetched, $scope.weatherError);
        };
        $scope.weatherError = function () {

        };
        $scope.weatherFetched = function (data) {
            $scope.isLocationNotAvailable = false;
            $scope.temperature = new WeatherInfo(data);
        };
        $scope.locationError = function () {
            $scope.isLocationNotAvailable = true;
        };
        locationService.getCurrentLocation($scope.locationFetched, $scope.locationError);
    }

    module.controller("mainController", ["$scope", "locationService", "weatherService", mainController]);
})(weatherApp);