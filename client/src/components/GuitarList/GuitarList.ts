import * as angular from "angular";

const moduleName = "guitarCareCenterApp.GuitarList";
export default moduleName;

class GuitarList {

}

angular.module(moduleName, []).component("guitarList", {
    template: require("./GuitarList.html"),
    controller: GuitarList
});
