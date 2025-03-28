let lvls = document.getElementById('levels');

function showAllLevels() {
    let string = '';

    for(let i = 0; i < 6; i++) {
        string += `
        <a href="./game.html"><img class="pics" src="./img/pic${i}.jpg"></a>
        `
    }
    lvls.innerHTML = string;
}
showAllLevels();
function goingDark() {

}