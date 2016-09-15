import * as angular from "angular";

import {IGuitar} from "../domain/IGuitar";
import {Guitar} from "../domain/Guitar";

export interface IGuitarService {
    getAll(): Array<IGuitar>;
    add(guitar: IGuitar);
}

export class GuitarService implements IGuitarService {

    guitars: Array<IGuitar>;

    getAll(): Array<IGuitar> {
        return this.guitars;
    }

    add(guitar: IGuitar) {
        this.guitars.push(guitar);
    }

    constructor() {
        this.guitars = new Array<IGuitar>();
        for (let i: number = 0; i < 5; i++) {
            let guitar = new Guitar();
            guitar.manufacturer = "Fender";
            guitar.model = "Eric Clapton signature Stratocaster";
            guitar.color = "white";
            this.guitars.push(guitar);
        }

    }

}

const moduleName = "guitarCareCenterApp.GuitarService";
export default moduleName;

angular.module(moduleName, []).service("guitarService", GuitarService);
