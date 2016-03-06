/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    function userLocationController($rootScope, $scope, weatherService) {
        $scope.getLocationByZipCode = function () {
            $rootScope.isLoadCurrentUserLocationData = false;
            weatherService.fetchWeatherByZipCode($scope.zipCode, $scope.weatherFetched, $scope.weatherError);
        };
    }

    module.directive("userLocation", function () {
        return {
            restrict: 'AE',
            scope: false,
            templateUrl: 'partials/userLocation.html',
            controller: ["$rootScope", "$scope", "weatherService", userLocationController]
        };

    });
})(weatherApp);