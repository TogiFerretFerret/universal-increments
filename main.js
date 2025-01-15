let increments = 0;
let incrementValue = 1;
let upgradeCost = 10;

function increment() {
    increments += incrementValue;
    document.getElementById('increment-count').innerText = increments;
}

function upgrade() {
    if (increments >= upgradeCost) {
        increments -= upgradeCost;
        incrementValue++;
        upgradeCost *= 2;
        document.getElementById('increment-count').innerText = increments;
        document.getElementById('increment-value').innerText = incrementValue;
    } else {
        alert('Not enough increments to upgrade!');
    }
}

// Save game state to local storage
function saveGame() {
    localStorage.setItem('increments', increments);
    localStorage.setItem('incrementValue', incrementValue);
    localStorage.setItem('upgradeCost', upgradeCost);
}

// Load game state from local storage
function loadGame() {
    increments = parseInt(localStorage.getItem('increments')) || 0;
    incrementValue = parseInt(localStorage.getItem('incrementValue')) || 1;
    upgradeCost = parseInt(localStorage.getItem('upgradeCost')) || 10;

    document.getElementById('increment-count').innerText = increments;
    document.getElementById('increment-value').innerText = incrementValue;
}

// Auto-save game state every 30 seconds
setInterval(saveGame, 30000);

// Load game state on startup
window.onload = loadGame;
