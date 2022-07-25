import './style.css';

function CardGame(cardLogo = "field-agent", alt = "field-agent") {
    return /*html*/ `
        <article class="card-game">
            <img src="/src/images/${cardLogo}.png" alt="${alt}">
        </article>
    `;
}

export default CardGame;