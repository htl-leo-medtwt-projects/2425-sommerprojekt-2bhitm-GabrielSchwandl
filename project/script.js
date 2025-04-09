let lvls = document.getElementById('levels');
let root = document.querySelector(':root');

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
}

function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    
}