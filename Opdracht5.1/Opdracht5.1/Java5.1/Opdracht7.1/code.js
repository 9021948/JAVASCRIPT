let budget = 100;
// let budget = prompt("wat is het saldo?","");

let productprijs = 60;
// let product prijs = prompt("Wat is de prijs van het product?","");

let saldo = document.getElementById("Resultaat");

if (budget=> productprijs){
    let over = budget - productprijs;
    saldo.innerHTML = "U heeft genoeg geld!" + over + "is er over van :" + budget + "euro";
    saldo.style.color = "blue";
}
else {
    saldo.innerHTML = "helaas, U heeft te weinig geld!";
    saldo.style.color = "red";
}