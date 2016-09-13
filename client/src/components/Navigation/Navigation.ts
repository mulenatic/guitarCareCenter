import * as angular from "angular";

const moduleName = "guitarCareCenterApp.navigation";
export default moduleName;

class Navigation {
    constructor() { }
}

angular.module(moduleName, [])
    .component("navigation", {
        template: require("./Navigation.html"),
        controller: Navigation
    });
