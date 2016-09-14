import * as angular from "angular";

import {IGuitar} from "../domain/IGuitar";

export interface IGuitarService {
    getAll(): Array<IGuitar>;
    add(guitar: IGuitar);
}

class GuitarService implements IGuitarService {

    guitars: Array<IGuitar>;

    getAll(): Array<IGuitar> {
        return this.guitars;
    }

    add(guitar: IGuitar) {
        this.guitars.push(guitar);
    }

}

const moduleName = "guitarCareCenterApp.GuitarService";
export default moduleName;

angular.module(moduleName, []).service("GuitarService", GuitarService);
