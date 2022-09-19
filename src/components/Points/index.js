import './style.css';
import EndGame from '../EndGame';
import Timer from '../Timer';

let points = 0;
let loserPoints = 0;

function Points(point, loserPoint) {

    if (point == true) {
        points++;
        loserPoints = 0;
        Timer(true);
    }

    if (loserPoint == 1) {
        loserPoints++;
    } else if (loserPoint == 2) {
        loserPoints = 0;
    }

    setInterval(() => {
        const display = document.querySelector('#points');
        const chances = document.querySelector('#chances');
        display.textContent = points;
        chances.textContent = loserPoints;
        console.log(loserPoints);
        EndGame(points);

    }, 1000);

    return /*html*/` 
    <div class="pointsContainer">
        <span class="points" id="points">0</span>
        <span id="chances"></span>
    </div>
    `;
}


export default Points;