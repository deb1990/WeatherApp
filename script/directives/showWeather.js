/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    function showWeatherController($rootScope, $scope, locationService) {
        if ($rootScope.isLoadCurrentUserLocationData) {
            locationService.getCurrentLocation($scope.locationFetched, $scope.locationError);
        }
    }

    module.directive("showWeather", function () {
        return {
            restrict: 'AE',
            scope: false,
            templateUrl: 'partials/weather.html',
            controller: ["$rootScope", "$scope", "locationService", showWeatherController]
        };

    });
})(weatherApp);