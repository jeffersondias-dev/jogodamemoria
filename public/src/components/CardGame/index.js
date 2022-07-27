import './style.css';

function CardGame(icon = "field-agent", alt = "Field Agent") {
    return /*html*/ `
        <article class="card-game">
            <img src="/public/src/images/${icon}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;