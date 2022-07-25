import './style.css';
import CardGame from '../../components/CardGame';

function BoardGame(amountCards, state) {

    const $htmlCardGame = CardGame(state);
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
export default BoardGame;