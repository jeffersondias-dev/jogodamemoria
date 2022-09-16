import './style.css';

function Timer(content = 0) {
    return /*html*/` 
    <div class="timerContainer">
        <span class="timer">${content}</span>
    </div>
    `;
}

export default Timer;