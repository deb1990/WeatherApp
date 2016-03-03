/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    module.directive("userLocation", function () {
        return {
            restrict: 'AE',
            scope: false,
            templateUrl: 'partials/userLocation.html',
            controller: function ($scope, weatherService) {
                $scope.getLocationByZipCode = function () {
                    weatherService.fetchWeatherByZipCode($scope.zipCode, $scope.weatherFetched, $scope.weatherError);
                };
            }
        };

    });
})(weatherApp);