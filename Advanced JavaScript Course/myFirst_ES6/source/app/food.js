"use strict";

//Food is a base class
export default class Food {
    constructor(name, protein, carbs, fat){
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }
    toString(){
        return `${this.name} | ${this.protein}g P:: ${this.carbs}g C :: ${this.fat}g F`
    }
    print(){
        console.log(this.toString());
    }
}