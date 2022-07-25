import './style.css';

function CardGame(cardLogo) {
    return /*html*/ `
        <article class="card-game">
            <img src="/src/images/${cardLogo}.png" alt="${cardLogo}">
        </article>
    `;
}

export default CardGame;