let Budget = 100;https://chat.openai.com/
let product = prompt("Vul de kosten van uw product in", 0);

let ResultP = document.getElementById("ResultParagraph");
if (Budget >= product) {
    ResultP.innerHTML = "U heeft genoeg PAP!";
    ResultP.style.color = "green";
}
else {
    ResultP.innerHTML = "Helaas te weinig PAP!";
    ResultP.style.color = "red";
}