/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    function userLocationController($scope, weatherService) {
        $scope.getLocationByZipCode = function () {
            weatherService.fetchWeatherByZipCode($scope.zipCode, $scope.weatherFetched, $scope.weatherError);
        };
    }

    module.directive("userLocation", function () {
        return {
            restrict: 'AE',
            scope: false,
            templateUrl: 'partials/userLocation.html',
            controller: ["$scope", "weatherService", userLocationController]
        };

    });
})(weatherApp);