import multiply from "./mathModule.js";
import { toUpperCase } from "./stringModule.js";

export function findMax(arr) {
    return Math.max.apply(Math, arr);
}

export function reverseArray(arr) {
    return arr.reverse();
}

export function multiplyMaxArrayValue(arr) {
    let i = multiply(Math.max.apply(Math, arr), 3);
    console.log(toUpperCase(i.toString()));
}