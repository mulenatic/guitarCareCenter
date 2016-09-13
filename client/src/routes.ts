import * as angular from "angular";
import "angular-route";

const moduleName = "guitarCareCenterApp.routes";
export default moduleName;

angular.module(moduleName, [])
    .config(($routeProvider: angular.route.IRouteProvider) => {
        $routeProvider
            .when("/", { template: "<guitar-creator></guitar-creator>" })
            .otherwise("/");
    });


