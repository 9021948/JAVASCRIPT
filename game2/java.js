let startTime;
let endTime;

function startGame() {
  document.getElementById('go-btn').style.display = 'none';
  document.getElementById('green-screen').style.display = 'block';

  // Random time between 1 and 10 seconds
  const randomTime = Math.floor(Math.random() * 10000) + 1;

  setTimeout(() => {
    document.getElementById('green-screen').style.backgroundColor = 'green';
    startTime = new Date();
  }, randomTime);
}

function stopGame() {
  if (startTime) {
    endTime = new Date();
    const reactionTime = endTime - startTime;
    document.getElementById('reaction-time').innerText = `Reactietijd: ${reactionTime} ms`;

    // Optional: Implement logic for tracking top 5 times

    // Reset for the next round
    document.getElementById('green-screen').style.backgroundColor = '';
    document.getElementById('go-btn').style.display = 'block';
    startTime = null;
    endTime = null;
  }
}
