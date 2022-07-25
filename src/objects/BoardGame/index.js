import CardGame from '../../components/CardGame';
import './style.css';

function BoardGame(amountCards, state) {

    const $htmlCardGame = CardGame(state);
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    return $htmlBoardGame;
}

export default BoardGame;