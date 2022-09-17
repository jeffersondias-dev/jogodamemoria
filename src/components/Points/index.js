import './style.css';
let points = 0;

function Points(elements) {
    if (elements == true) {
        points++;
    }

    setInterval(() => {
        const display = document.querySelector('#points');
        display.textContent = points;
    }, 1000);

    return /*html*/` 
    <div class="pointsContainer">
        <span id="points"></span>
    </div>
    `;
}


export default Points;