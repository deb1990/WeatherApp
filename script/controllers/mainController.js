/**
 * Created by Debarshi on 3/2/2016.
 */

(function (module) {
    function mainController($rootScope, $scope, $location, weatherService) {
        $rootScope.isLoadCurrentUserLocationData = true;
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
            $rootScope.isLoadCurrentUserLocationData = false;
            $location.path("/zipcode");
            $scope.apply($rootScope);
        };
        $scope.apply = function (scope) {
            if (!scope.$$phase) {
                scope.$apply()
            }
        };
    }

    module.controller("mainController", ["$rootScope", "$scope", "$location", "weatherService", mainController]);
})(weatherApp);