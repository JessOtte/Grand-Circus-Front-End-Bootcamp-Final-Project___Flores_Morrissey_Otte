"use strict";
angular
    .module("WeatherEventApp")
    // Configuring the routing
    // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
            // When the user visits the display route...
            .when("/event-details", {
                // Load the display component
                template: "<event-details></event-details>"
            })
            .when("/weather-list", {
                // Load the display component
            template: "<weather-list></weather-list>"
            })
            .when("/meet-the-team", {
                // Load the display component
            template: "<meet-the-team></meet-the-team>"
            })
            .when("/gr-event-list", {
                // Load the display component
            template: "<gr-event-list></gr-event-list>"
            })
            .otherwise({ redirectTo: "/weather-list" });
    }]);
