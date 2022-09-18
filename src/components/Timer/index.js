
import './style.css';

function Timer() {


    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        let addBonus = 0;

        boardGame.handleClick();
        const setTimer = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            const pontos = document.querySelector('#points');

            if (pontos.textContent > addBonus) {
                timer = timer + 10;
                addBonus = addBonus + 1;
            }

            if (--timer < 0) {
                clearInterval(setTimer);
            }

        }, 100);

    }

    window.onload = function () {
        let duration = 60;
        let display = document.querySelector('#timer');
        startTimer(duration, display);
    }


    return /*html*/` 
    <div class="timerContainer">
    <span class="timer" id="timer"></span>
    </div>
    `;
}

export default Timer; 