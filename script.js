function calculator(a,operator,b){
    switch (operator) {
        case "sum":
            return a+b;
        case "sub":
            return a-b;
        case "divide":
            return a/b;
        case "multi":
            return a*b;
        default:
            break;
    }
}

let numberA = 0;
let numberB = 0;
let operatorSeector = "";

let inputString = document.getElementById("#inputString");

function addToString(inputKey){
    switch (inputKey) {
        case "one":
            inputString.innerText += "1";
            break;
        case "two":
            inputString.innerText += "2";
            break;
        case "three":
            inputString.innerText += "3";
            break;
        case "four":
            inputString.innerText += "4";
            break;
        case "five":
            inputString.innerText += "5";
            break;
        case "six":
            inputString.innerText += "6";
            break;
        case "seven":
            inputString.innerText += "7";
            break;
        case "eight":
            inputString.innerText += "8";
            break;
        case "nine":
            inputString.innerText += "9";
            break;
        default:
            break;
    }
}

let oneBtn = document.getElementById("#container");

console.log(oneBtn)