/**
 * Created by Debarshi on 3/2/2016.
 */

(function (module) {
    function mainController($rootScope, $scope, $location, locationService, weatherService) {
        $scope.locationFetched = function (position) {
            weatherService.fetchWeatherByCoordinates({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }, $scope.weatherFetched, $scope.weatherError);
        };
        $scope.weatherError = function () {
            alert("Error fetching weather! Try Again");
            $scope.locationError();
        };
        $scope.weatherFetched = function (data) {
            $location.path("/");
            $rootScope.temperature = new WeatherInfo(data, $scope.weatherError);
        };
        $scope.locationError = function () {
            $location.path("/zipcode");
            $scope.apply();
        };
        $scope.apply = function () {
            if (!$scope.$$phase) {
                $scope.$apply()
            }
        };
        locationService.getCurrentLocation($scope.locationFetched, $scope.locationError);
    }

    module.controller("mainController", ["$rootScope", "$scope", "$location", "locationService", "weatherService", mainController]);
})(weatherApp);