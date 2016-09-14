import * as angular from "angular";

import {IGuitar} from "../domain/IGuitar";

const moduleName = "guitarCareCenterApp.GuitarService";
export default moduleName;

class GuitarService {

    guitars: Array<IGuitar>;

    getAll(): Array<IGuitar> {
        return this.guitars;
    }

    add(guitar: IGuitar) {
        this.guitars.push(guitar);
    }

}

angular.module(moduleName, []).service("GuitarService", GuitarService);
