import './style.css';

function CardGame(icon = "chest", alt = "Front of Card, a chest icon") {
    return /*html*/ `
        <article class="card-game">
            <img src="/images/${icon}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;