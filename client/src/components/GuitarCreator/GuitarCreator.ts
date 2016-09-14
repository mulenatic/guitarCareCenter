import * as angular from "angular";

import { IGuitar } from "../../domain/IGuitar";

const moduleName = "guitarCareCenterApp.guitarCreationComponent";
export default moduleName;

class GuitarCreator {

    guitar: IGuitar;

    constructor() { }

}

angular.module(moduleName, [])
    .component("guitarCreator", {
        template: require("./GuitarCreator.html"),
        controller: GuitarCreator
    });
