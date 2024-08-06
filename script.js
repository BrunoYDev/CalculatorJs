function calculator(a,operator,b){

    if(a === null || a === undefined){
        alert("Put some entry number");
        return;
    }
    if(b === null || b === undefined){
        alert("Put some other number to calc");
        return;
    }
    if(operator === null || operator === undefined || operator === ""){
        alert("Can't realize operation");
        return;
    }

    switch (operator) {
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "/":
            if(a === 0 || b === 0){
                alert("Can't divide by zero");
                break;
            }
            return a/b;
        case "*":
            return a*b;
        default:
            break;
    }
}

let numberA = 0;
let numberB = 0;
let operatorSelector = "";
let hasOperator = false;


let inputString = document.querySelector("#inputString");


// Add the numbers on screen
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
        case "zero":
            inputString.innerText += "0";
            break;
        case "sum":
            inputString.innerText += "+";
            break;
        case "sub":
            inputString.innerText += "-";
            break;
        case "divide":
            inputString.innerText += "/";
            break;
        case "multi":
            inputString.innerText += "*";
            break;
        case "decimal":
            inputString.innerText += ".";
            break;
        default:
            break;
    }
}

function pickCalcString(stringToResolve){
    if(stringToResolve === ""){
        alert("No numbers to calc");
    }
    let toResolve = stringToResolve.split("");
    let tempStringA = "";
    let tempStringB = "";
    let tempOperator = "";
    let foundDecimal = false;
    

    for(let i = 0; i<toResolve.length; i++){
        if(i > 0 && toResolve[i] === "." && !foundDecimal){
            foundDecimal = true;
            tempStringA += toResolve[i];
            continue;
        }
        let numbfy = Number(toResolve[i]);
        if(isNaN(numbfy) && toResolve[i] !== "."){
            tempOperator = String(toResolve[i]);
            break;
        }
        
        tempStringA += toResolve[i];
    }

    let tempOperatorIndex = toResolve.indexOf(tempOperator);

    for(let i = tempOperatorIndex+1; i<toResolve.length; i++){
        if(i-1 !== toResolve[tempOperatorIndex] && toResolve[i] === "." && !foundDecimal){
            foundDecimal = true;
            tempStringB += toResolve[i];
            continue;
        }
        tempStringB += String(toResolve[i]);
    }

    numberA = Number(tempStringA);
    numberB = Number(tempStringB);
    operatorSelector = tempOperator;

    let result = calculator(numberA,operatorSelector,numberB);
    return Number.isInteger(result) ? result : result.toFixed(2);
    
}

// All Keys on the keyboard
document.querySelector("#zero").addEventListener("mousedown", () => {
    addToString("zero");
});
document.querySelector("#one").addEventListener("mousedown", () => {
    addToString("one");
});
document.querySelector("#two").addEventListener("mousedown", () => {
    addToString("two");
});
document.querySelector("#three").addEventListener("mousedown", () => {
    addToString("three");
});
document.querySelector("#four").addEventListener("mousedown", () => {
    addToString("four");
});
document.querySelector("#five").addEventListener("mousedown", () => {
    addToString("five");
});
document.querySelector("#six").addEventListener("mousedown", () => {
    addToString("six");
});
document.querySelector("#seven").addEventListener("mousedown", () => {
    addToString("seven");
});
document.querySelector("#eight").addEventListener("mousedown", () => {
    addToString("eight");
});
document.querySelector("#nine").addEventListener("mousedown", () => {
    addToString("nine");
});
document.querySelector("#decimal").addEventListener("mousedown", () => {
    addToString("decimal");
})
document.querySelector("#sum").addEventListener("mousedown", () => {
    addOperatorToCalculator("sum");
})
document.querySelector("#divide").addEventListener("mousedown", () => {
   addOperatorToCalculator("divide");
})
document.querySelector("#multiply").addEventListener("mousedown", () => {
    addOperatorToCalculator("multi");
})
document.querySelector("#subtract").addEventListener("mousedown", () => {
    addOperatorToCalculator("sub");
})
document.querySelector("#equals").addEventListener("mousedown", () => {
    addOperatorToCalculator("equals");
})
document.querySelector("#deleteAll").addEventListener("mousedown", () => {
    inputString.innerText = "";
    hasOperator = false;
})
document.querySelector("#deleteOne").addEventListener("mousedown", () => {
    let allTheString = inputString.innerText
    let splitted = allTheString.split("");
    splitted.pop();
    if(splitted == []){
        inputString.innerText = "";
    }
    let removed = splitted.join("");
    inputString.innerText = removed;
    hasOperator = false;
})

function addOperatorToCalculator(operator){
    if(!hasOperator && operator != "equals"){
        addToString(operator);
        hasOperator = true;
    }else{
        let calcResult = pickCalcString(inputString.innerText)
        if(calcResult === undefined || calcResult === null || isNaN(calcResult)){
            alert("Calc Error!");
            return;
        } 
        inputString.innerText = calcResult;
        hasOperator = false;
    }
}