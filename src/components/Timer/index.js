
import './style.css';

function Timer() {

    window.onload = function () {
        var duration = 60;
        var display = document.querySelector('#timer');
        startTimer(duration, display);
    }


    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;

        setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;

            }
        }, 1000);

    }


    return /*html*/` 
    <div class="timerContainer">
        <span class="timer" id="timer"></span>
    </div>
    `;
}

export default Timer; 