
let canvas = document.createElement ('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

ctx.beginPath(); // start met tekenen
ctx.rect (20, 20, 150, 100); // teken een vierhoek
ctx.stroke(); // schrijf de tekening weg

// vatiabelen voor de positie en snelheid van de cirkel 
let x = 50; // startpositie x 
let y = 50; // startpositie y
let dx = 2; // snleheid x 
let dy = 2; // snelheid y
let radius = 20; // radius van de cirkel 

// functie om een circel te tekenen 
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillstyle = 'white';
    ctx.fill();
    ctx. closePath();
}
//testen:
drawCircle();

// uitrekenen van rand, tekenen canvas
function update() {
    ctx.clearRect (0,0, canvas.width, canvas.height);
    ctx.fillstyle = "#FEFEFE";
    ctx.fillRect (0,0, canvas.width, canvas.height);
    drawCircle();
    
    // Verander de positie van de cirkel
    x += dx // = x=x+dx;
    y += dy;
    
    //laat de cirkel stuiteren wanneer hij de randen van het canvas raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }
    requestAnimationFrame(update); // roep update weer aan voor de volgende 
}
update(); // start de animatie
