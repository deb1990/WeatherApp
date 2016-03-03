/**
 * Created by Debarshi on 3/2/2016.
 */
(function (module) {
    module.directive("showWeather", function () {
        return {
            restrict: 'AE',
            scope: false,
            templateUrl: 'partials/weather.html'
        };

    });
})(weatherApp);