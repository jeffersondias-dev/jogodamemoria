import './style.css';

function CardGame(icon = "field-agent", alt = "Field Agent") {
    return /*html*/ `
        <article class="card-game">
            <img src="/src/images/${icon}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;