let Value1 = document.getElementById("Value 1").value;
let Value2 = document.getElementById("Value 1").value;
let Result;
let ResultH1 = document.getElementById("ResultH1");


function Multiply() {
    GetValues();
    Result = Value1 * Value2;
    SetResult(Result);
}
function Subtract() {
    GetValues();
    Result = Value1 - Value2;
    SetResult(Result);
}
function Sum() {
    GetValues();
    Result = (Value1 + Value2);
    SetResult(Result);
}
function Divide() {
    GetValues();
    Result = Value1 / Value2;
    SetResult(Result);
}

function GetValues() {
    Value1 = parseInt(document.getElementById("Value 1").value);
    Value2 = parseInt(document.getElementById("Value 2").value);
}
function SetResult(result) {
    ResultH1.innerHTML = "Result: " + result;
}

