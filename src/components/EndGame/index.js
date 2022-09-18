import './style.css';

function EndGame(element) {

    if (element >= 0) {
        const $points = document.querySelector('#end-points');
        $points.textContent = `${element} Pontos`;
    }


    return /*html*/ `
    <div class="end-game">
        <h1 class="title">End Game</h1>

        <span class="end-points" id="end-points"></span>
        
    </div > `
}


export default EndGame;