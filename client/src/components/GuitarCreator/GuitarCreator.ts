import * as angular from "angular";

import { Guitar } from "../../domain/Guitar";

import GuitarServiceModule, {IGuitarService} from "../../services/GuitarService";

const moduleName = "guitarCareCenterApp.guitarCreationComponent";
export default moduleName;

class GuitarCreator {

    guitar: Guitar;

    constructor(private guitarService: IGuitarService) {
        this.guitar = new Guitar();
    }

    resetForm(): void {
        this.guitar = new Guitar();
    }

    add() {
        this.guitarService.add(this.guitar);
        this.resetForm();
    }

}

angular.module(moduleName, [])
    .component("guitarCreator", {
        template: require("./GuitarCreator.html"),
        controller: GuitarCreator
    });
