import './style.css';

function EndGame(element) {
    const endTimer = document.querySelector('#timer');

    if (element >= 0) {
        const $endPoints = document.querySelector('#end-points');
        $endPoints.textContent = `${element} Pontos`;
        const $endTimer = document.querySelector('#end-timer');
        $endTimer.textContent = `Tempo: ${endTimer.textContent}`;
    }



    return /*html*/ `
    <div class="end-game">
        <h1 class="title">End Game</h1>

        <span class="end-points" id="end-points"></span>
        <span class="end-timer" id="end-timer"></span>

    </div > `
}


export default EndGame;