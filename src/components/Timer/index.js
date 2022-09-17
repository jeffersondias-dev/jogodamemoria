
import './style.css';

function Timer() {


    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        let bonusTimer = 0;

        setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            const pontos = document.querySelector('#points');
            console.log(pontos.textContent);

            if (pontos.textContent > bonusTimer) {
                timer = timer + 10;
                bonusTimer = bonusTimer + 1;

            }

            if (--timer <= 0) {
                timer = console.log("acabou o tempo");
            }

        }, 1000);

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