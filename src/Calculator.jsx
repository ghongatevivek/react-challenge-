import React from "react";

function add(a, b){
    let sum = a + b;
    return sum;
}

function sub(a, b){
    let subtraction = a - b;
    return subtraction;
}

function mul(a, b){
    let sum = a * b;
    return sum;
}

function div(a, b){
    let sum = a + b;
    sum = sum.toFixed(2);
    return sum;
}

export {add, sub, mul, div}