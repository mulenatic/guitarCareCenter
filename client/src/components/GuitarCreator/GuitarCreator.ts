import * as angular from "angular";

const moduleName = "guitarCareCenterApp.guitarCreationComponent";
export default moduleName;

class GuitarCreator {

    greeting: string = "Hello Component";

    constructor() { }

}

angular.module(moduleName, [])
    .component("guitarCreator", {
        template: require("./GuitarCreator.html"),
        controller: GuitarCreator
    });
