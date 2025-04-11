let lvls = document.getElementById('levels');
let root = document.querySelector(':root');
let game = document.getElementById('game');

function showAllLevels() {
    let string = '';

    for(let i = 1; i < 7; i++) {
        string += `
        <a href="./game.html"><img class="pics" src="./img/pic${i}.jpg"></a>
        `
    }
    lvls.innerHTML = string;
}
showAllLevels();
function goingDark() {
    root.style.setProperty('--color-bg', '#2E2E2E');
    root.style.setProperty('--color-border', '#000000')
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    
}

function showTutorial() {
    if(!hasAccount) {
        
    }

}