// Eerst definiëren we enkele variabelen
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
 
// Variabelen voor de positie en snelheid van de cirkel
let x = 50; // startpositie X
let y = 50; // startpositie Y
let dx = 6; // snelheid X    
let dy = 4; // snelheid Y
let radius = 20; // radius van de cirkel

// variabelen voor de 2e bal
let x2 = 100;
let y2 = 150;
let speed = 4;
let radius2 = 10;

// variable voor score
let score = 0;
let tijdMax = 25;
let tijdTeller = 0;

function scoreScherm() {
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(String(score),10,22); 
    tijdTeller++;
    if (tijdTeller>tijdMax){}
}



document.addEventListener('keydown', function(event){
    if (Event.key === `ArrowLeft`) {
        x2 -= speed;
        if  (x2 < radius2) {
            x2 = canvas.width - radius2;
            x2 = radius2;
        }

    } 
    if (event.key === 'ArrowUp'){}
    else if (event.key === 'ArrowRight'){
         x2 += speed; 
     if (x2 > canvas.witdh - radius2){
         x2 = radius2;
     }
    }
});
if (event.key == 'arrowUp && y2 > radius2'){
    y2 -= speed;

}
function collission() {
     if (x == x2 && y == y2) {
        alert ("Game Over");
     }
}

// starten van bewegen bal 1
function startBewegen() {
    dx = 2;
    dy = 2;
}
// functie om te klik op button om te zetten in uivoeren functie startbewegen
document.getElementById('startButton').addEventListener('click', startBewegen);
 
// De functie om de cirkel te tekenen bal 1
function drawCircle() {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

// De functie om de cirkel te tekenen bal2
function drawCircle2() {
    ctx.beginPath();
    ctx.arc(x2, y2, radius2, 0, Math.PI * 2, true);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
}
function collission() { // meten of de randen elkaar raken
    let rx = x - x2;
    let ry = y - y2;
    let distance = Math.sqrt(rx *rx + ry *ry); // stelling van pythagroras
if (distance < Radius + radius2){
    alert('score: ${score} . Game Over!'); // score weergave met alert
    Score=0; // score weer op 0 
    x=100; y=100; // bal 1 reset
    x2 = canvas.width-100;
    y2 = 200; // reset bal 2 
    dx = 0; dy = 0; // auto bewegen bal 1 uitzetten
 }
}



// De update functie die elke frame wordt uitgevoerd
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FEFEFE";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
    drawCircle();
    drawCircle2();
    collission();
    scoreScherm();

 
    // Verander de positie van de cirkel
    x += dx;
    y += dy;
 
    // Laat de cirkel stuiteren wanneer hij de randen van het canvas raakt
    if (x + dx > canvas.width - radius || x + dx < radius) {
        dx = -dx;
    }
    if (y + dy > canvas.height - radius || y + dy < radius) {
        dy = -dy;
    }
 
    requestAnimationFrame(update); // Roep update weer aan voor de volgende frame
}
 
// Start de animatieloop
update();