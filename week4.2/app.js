function toonTafel() {
    var getal = document.getElementById("getalInput").value;

    if (getal !== "") {
        document.getElementById("resultaat").innerHTML = "";

        for (var i = 1; i <= 10; i++) {
            var resultaat = getal * i;
            document.getElementById("resultaat").innerHTML += `${getal} x ${i} = ${resultaat} <br>`;
        }
    } else {
        alert("Voer aub een getal in.");
    
    }
}