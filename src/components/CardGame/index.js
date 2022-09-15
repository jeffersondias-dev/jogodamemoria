import './style.css';

function CardGame(icon = "front-chest", alt = "Icone de um baú") {
    return /*html*/ `
        <article class="card-game">
            <img src="/images/${icon}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;