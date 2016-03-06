/**
 * Created by Debarshi on 3/2/2016.
 */
var weatherApp = angular.module("weatherApp", ["ngRoute"]);

weatherApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<div show-weather></div>'
        })
        .when('/zipcode', {
            template: '<div user-location></div>'
        })
        .otherwise({
            redirectTo: "/"
        });
}]);