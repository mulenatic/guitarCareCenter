import * as angular from "angular";

import { Guitar } from "../../domain/Guitar";

const moduleName = "guitarCareCenterApp.guitarCreationComponent";
export default moduleName;

class GuitarCreator {

    guitar: Guitar;

    constructor() {
        this.guitar = new Guitar();
    }

    resetForm(): void {
        this.guitar = new Guitar();
    }

}

angular.module(moduleName, [])
    .component("guitarCreator", {
        template: require("./GuitarCreator.html"),
        controller: GuitarCreator
    });
