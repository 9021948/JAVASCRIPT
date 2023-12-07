const tech = ["playStation", "xbox", "pc"];

let text = "";
for (let i = 0; i < tech.length;  i++) {
  text += tech[i] + "<br>";
}

document.getElementById("j").innerHTML = "Er zitten " + tech.length + "producten in uw winkelmand.";

document.getElementById("a").innerHTML = "Uw producten zijn: <br>" + text;