let lvls = document.getElementById('levels');
let root = document.querySelector(':root');
let game = document.getElementById('game');
let overlay = document.getElementById('gameOverlay');
let backOverlay = document.getElementById('backOverlay');

function showAllLevels() {
    let string = '';

    for(let i = 1; i < 7; i++) {
        string += `
        <img class="pics" src="./img/pic${i}.jpg" onclick="displayGame('${i}')">
        `
    }
    lvls.innerHTML = string;
}

showAllLevels();
function goingDark() {
    root.style.setProperty('--color-bg', '#2E2E2E');
    root.style.setProperty('--color-border', '#000000');
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    
}

function showTutorial() {
    if(!hasAccount) {
        
    }

}

function displayGame(i) {
    let content = "";
    
    content += `
    <img id="gameImage" src="./img/pic${i}.jpg" alt="level${i}"></img>
    <div class="waldo" id="waldo${i}" onclick="vanish()"></div>
    `;

    overlay.innerHTML = content;
    overlay.style.display = "block";
    backOverlay.style.display = "block";
}
function vanish() {
    overlay.style.display = "none";
    backOverlay.style.display = "none";
}

function waldoFound() {
    overlay.style.display = "none";
    backOverlay.style.display = "none";

    
}