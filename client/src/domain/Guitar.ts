import {IGuitar} from "./IGuitar";

export class Guitar implements IGuitar {

    manufacturer: string;
    model: string;
    color: string;
    purchaseDate: string;
    price: number;

    constructor() { }

    reset(): void {
        this.manufacturer = undefined;
        this.model = undefined;
        this.color = undefined;
        this.purchaseDate = undefined;
        this.price = undefined;
    }

}
