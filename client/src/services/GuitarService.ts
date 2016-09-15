import * as angular from "angular";

import {IGuitar} from "../domain/IGuitar";
import {Guitar} from "../domain/Guitar";

export interface IGuitarService {
    getAll(): ng.IPromise<IGuitar[]>;
    add(guitar: IGuitar);
}

export class GuitarService implements IGuitarService {

    getAll(): ng.IPromise<IGuitar[]> {
        return this.$http.get<IGuitar[]>("guitars.json").then(response => response.data);
    }

    add(guitar: IGuitar) {
    }

    constructor(private $http: ng.IHttpService) {
    }

}

const moduleName = "guitarCareCenterApp.GuitarService";
export default moduleName;

angular.module(moduleName, []).service("guitarService", GuitarService);
