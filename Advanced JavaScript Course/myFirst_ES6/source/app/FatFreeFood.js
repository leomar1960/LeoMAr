"use strict";

import Food from './Food.js';

//FatFreeFood is derived class
export class FatFreeFood extends Food {
    constructor(name, protein, carbs) {
        super(name, protein, carbs, 0)
    }
    print() {
        super.print();
        console.log(`Would you look at that -- ${this.name} has no fat`);
    }
}