
import Points from '../Points';
import './style.css';

function Timer(element = true) {


    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        let addBonus = 0;


        boardGame.handleClick();
        const chances = document.querySelector('#chances');

        if (element == true) {
            setInterval(() => {
                if (chances.textContent == 5) {
                    timer = timer - 1;
                    Points(false, 2);
                    Timer(true);
                    console.log('só tirou 1')
                }
            }, 1000);
        }

        const setTimer = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            const pontos = document.querySelector('#points');
            if (pontos.textContent > addBonus) {
                timer = timer + 5;
                addBonus = addBonus + 1;
            }

            if (--timer < 0) {
                clearInterval(setTimer);
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