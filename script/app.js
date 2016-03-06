/**
 * Created by Debarshi on 3/2/2016.
 */
var weatherApp = angular.module("weatherApp", ["ngRoute"]);

weatherApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            template: '<div show-weather></div>',
            controller: 'mainController'
        })
        .when('/zipcode', {
            template: '<div user-location></div>',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: "/"
        });
});