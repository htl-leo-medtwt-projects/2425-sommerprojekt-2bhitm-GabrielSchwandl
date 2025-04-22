let lvls = document.getElementById('levels');
let root = document.querySelector(':root');
let game = document.getElementById('game');
let overlay = document.getElementById('gameOverlay');
let backOverlay = document.getElementById('backOverlay');

function showAllLevels() {
    let string = '';

    for(let i = 1; i < 7; i++) {
        string += `
        <img class="pics" src="./img/pic${i}.jpg" onclick="showTutorial(${i})">
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

function showTutorial(i) {
    let content = "";

    content += `
    <div class="reveal">
            <div class="slides">
		    <section><h1>HOW TO PLAY</h1></section>
		    <section><h2>look for Waldo.He looks like this:</h2> <img src="./img/Wally.jpg" alt="waldo" id="explanation"><h2>when you find him click on him</h2></section>
            <section><h1 onclick="displayGame(${i})" id="ready">READY?</h1></section>
	    </div>
    </div>
    `;

    overlay.innerHTML = content;
    overlay.style.display = "block";
    backOverlay.style.display = "block";
        
    Reveal.initialize({
        hash: true,
        
        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [ RevealMarkdown, RevealHighlight, RevealNotes ]
    });
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
    Reveal.initialize();
}
function vanish() {
    overlay.style.display = "none";
    backOverlay.style.display = "none";
}

function waldoFound() {
    overlay.style.display = "none";
    backOverlay.style.display = "none";

    
}