import * as angular from "angular";

let app = angular.module("guitarCareCenterApp", []);

app.controller("mainCtrl", function ($scope) {

    $scope.greeting = "Hello Thomas!";

});
