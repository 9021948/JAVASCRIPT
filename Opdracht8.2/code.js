let Value1 = document.getElementById("Value 1").value;
let Value2 = document.getElementById("Value 1").value;
let Result;
let ResultH1 = document.getElementById("ResultH1");


function Multiply() {
    if (GetValues()) {
        Result = Value1 * Value2;
        SetResult(Result);
    } 
}
function Subtract() {
    if (GetValues()) {
        Result = Value1 - Value2;
        SetResult(Result);
    }    
}
function Sum() {
    if (GetValues()) {
        Result = Value1 + Value2;
        SetResult(Result);
    } 
}
function Divide() {
    if (GetValues()) {
        Result = Value1 / Value2;
        SetResult(Result);
    } 
}

function GetValues() {
    Value1 = parseInt(document.getElementById("Value 1").value);
    Value2 = parseInt(document.getElementById("Value 2").value);
    if (Value1 <= 0 || Value2 <=0) {
        SetResult("Het getal is te laag");
        return false;
    }
    else {
        return true;
    }
}
function SetResult(result) {
    ResultH1.innerHTML = "Result: " + result;
}