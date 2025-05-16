let lvls = document.getElementById('levels');
let root = document.querySelector(':root');
let game = document.getElementById('game');
let overlay = document.getElementById('gameOverlay');
let backOverlay = document.getElementById('backOverlay');
let shop = document.getElementById('shop');
let timer = document.getElementById('timer');
let logIn = document.getElementById('LogIn');
let nav = document.getElementById('navId');
let body = document.getElementsByTagName("body");
let points = 0;

function showAllLevels() {
    if (lvls == null) {
        console.log('this is shop');
    } else {
        let string = '';
    
        for(let i = 1; i < 7; i++) {
            string += `
            <img class="pics" src="./img/pic${i}.jpg" onclick="showDifficulty(${i})">
            `;
        }
        lvls.innerHTML = string;
    }

}

showLogIn()
showPoints()
showShop()
showAllLevels()

function showShop() {
    if(shop == null) {
        console.log('das hier ist levels');
    } else {
        let string = '';
    for(let i = 0; i < 3; i++) {
        string += `
        <div class='card'>
        <img class="Shopics" src="./img/picShop${i}.png">
        `

        if(i == 0) {
            string += `<h3>Magnifying Glass</h3>
            <p>transforms the Cursor into a Magnifying Glass</p>
            <div id="buy"><h3 onclick="buy(${i})">BUY - 200</h3></div>
            `
        } else if(i == 1) {
            string += `<h3>Minimalist Cursor</h3>
            <p>transforms the Cursor to look much simpler</p>
            <div id="buy"><h3 onclick="buy(${i})">BUY- 200</h3></div>
            `
        } else {
            string += `<h3>Maximalist Cursor</h3>
            <p>transforms the Cursor to look much fancier and extravagant</p>
            <div id="buy"><h3 onclick="buy(${i})">BUY - 200</h3></div>
            `
        }

        
        string += `</div>`;
    }
    
    shop.innerHTML = string;
    }
}

function goingDark() {
    root.style.setProperty('--color-bg', '#2E2E2E');
    root.style.setProperty('--color-border', '#000000');
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let string = '';

    if (username == localStorage.getItem('username') && password == localStorage.getItem('username')) {
        points = localStorage.getItem('points');
    } else if(username == 'dev'&& password == 'hi') {
        points = 10000000;
        localStorage.setItem('points', points);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    } else {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('points', points);
    }
    localStorage.setItem('isLogged', true);
    
    string += `
    <h3>Points: ${points}</h3>
    `

    logIn.innerHTML = string;
}

function showTutorial(i) {
    if(overlay != null && backOverlay != null) {
        
    if(localStorage.getItem('isLogged') == 'false') {
        content += `
    <div class="reveal">
        <div class="slides">
		    <section><h1>HOW TO PLAY</h1></section>
		    <section><h2>look for Waldo. He looks like this:</h2> <img src="./img/Wally.png" alt="waldo" id="explanation"><h2>when you find him click on him</h2></section>
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
    Reveal.initialize();
    }
    
    }
}

function showLogIn() {
    if(logIn == null) {
        console.log("not login")
    } else {
        let string ='';
        if(localStorage.getItem('isLogged') == 'false' || localStorage.getItem('isLogged') == null) {
            string += `
            <p>User:</p>
            <input type="text" id="username" placeholder="Waldo">
            <p>Password (DONT USE A REAL ONE)</p>
            <input type="password" id="password" placeholder="Waldo's Password">
            <button id="loginButton" onclick="login()">Log In</button>
            `

            logIn.innerHTML = string;
        } else {
            points = localStorage.getItem('points');
            string += `
            <h3>Points: ${points}</h3>
            `

            logIn.innerHTML = string;
        }
    }
}

function displayGame(i, difficulty) {
    if (localStorage.getItem('isLogged') == false) {
        showTutorial(i);
    } else {
        let content = "";
    
    content += `
        <div id="timer"></div>
        <img id="gameImage" src="./img/pic${i}.jpg" alt="level${i}"></img>
        <div class="waldo" id="waldo${i}" onclick="vanish()"></div>
    `;

    overlay.innerHTML = content;
    overlay.style.display = "block";
    backOverlay.style.display = "block";
    
    startTimer(difficulty);
    }
}
function vanish() {
    overlay.style.display = "none";
    backOverlay.style.display = "none";
}

function waldoFound() {
    points = localStorage.getItem('points');
    points = points + 100;
    localStorage.setItem('points', points);
    vanish();
}

function startTimer(difficulty) {
    if (difficulty == "easy") {
        timer.style.display = "none";
    }
    if(difficulty == "medium") {
        for(let i = 60; i > 0; i--) {
        
        setTimeout(() => {
            timer.innerHTML = `<h3>Time: ${i}</h3>`;
        }, 1000);
    }
    } else {
        for(let i = 30; i > 0; i--) {
        
        setTimeout(() => {
            timer.innerHTML = `<h3>Time: ${i}</h3>`;
        }, 1000);
    }
    

    vanish();
}
}

function buy(i) {
    if (localStorage.getItem('points') < 200) {
        alert("You don't have enough points!");
    } else {
    body.style.cursor = 'none';
    points = localStorage.getItem('points');
    points = points - 200;
    localStorage.setItem('points', points);
    body.style.cursor = `url('./img/picShop${i}.png'), auto`;
    }
}

function showDifficulty(i) {
    let string = '';

    string += `
    <div id="difficultyOverlay">

    <div id="easy" class="difficultys" onclick="displayGame(${i}, "easy")">
    <h4>Easy</h4>
    
    <p>Description:<br>-No Timer<br> -Hints after some time</p>
    </div>

    <div id="medium" class="difficultys" onclick="displayGame(${i}, "medium")">
    <h4>Medium</h4>
    
    <p>Description:<br>-60 second Timer<br> -Hints after a long time</p>
    </div>

    <div id="hard" class="difficultys" onclick="displayGame(${i}, "hard")">
    <h4>Hard</h4>
    
    <p>Description:<br>-30 second Timer<br> -No Hints</p>
    </div>

    </div>
    `;

    overlay.innerHTML = string;
    overlay.style.display = "block";
    backOverlay.style.display = "block";
}

function showPoints() {
    if(shop == null) {
        console.log("shop is null")
    } else {
        let string = '';
        points = localStorage.getItem('points');

        string = `
        <h2 id="points">${points} P</h2>
        `

        shop.innerHTML += string;
    }
}