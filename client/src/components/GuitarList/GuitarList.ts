import * as angular from "angular";

import {IGuitar} from "../../domain/IGuitar";
import GuitarServiceModule, {IGuitarService} from "../../services/GuitarService";

const moduleName = "guitarCareCenterApp.GuitarList";
export default moduleName;

class GuitarList {

    guitars: Array<IGuitar>;

    constructor(guitarService: IGuitarService) {
        this.guitars = guitarService.getAll();
    }

}

angular.module(moduleName, [GuitarServiceModule])
    .component("guitarList", {
        template: require("./GuitarList.html"),
        controller: GuitarList
    });
