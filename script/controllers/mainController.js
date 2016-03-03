/**
 * Created by Debarshi on 3/2/2016.
 */

(function (module) {
    module.controller("mainController", function ($scope, locationService, weatherService) {
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
            $scope.temperature = {
                cityName: data.data.name + ', ' + data.data.sys.country,
                maxTemp: parseInt(data.data.main.temp_max),
                minTemp: parseInt(data.data.main.temp_min),
                currentTemp: parseInt(data.data.main.temp),
                icon: data.data.weather[0].icon
            };
        };
        $scope.locationError = function () {
            $scope.isLocationNotAvailable = true;
        };
        locationService.getCurrentLocation($scope.locationFetched, $scope.locationError);

    });
})(weatherApp);