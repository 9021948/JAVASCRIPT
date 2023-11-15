function veranderkleur()
{
    document.getElementById("id1").style.color = "blue";
    
}

function verandertekst()
{
    document.getElementById("id1").innerHTML = "Tekst is Veranderd!!!";
}


function Calculate(getal1,getal2)
{
    getal1 = parseInt (prompt("geef getal 1" , ""),10);
    getal2 = parseInt (prompt("geef getal 1" , ""),10);
    

    antwoord = getal1 + getal2;
    console.log(antwoord)
    document.write("de som is: " + getal1 + "+" + getal2 + "= " + antwoord");
}

