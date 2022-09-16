import './style.css';
import PlayerName from '../../components/PlayerName';
import Timer from '../../components/Timer';



function ScoreBoard(content) {
    return /*html*/ `
    <header class="score-board">
        ${PlayerName("Player 1")}
        ${Timer()}

    </header>
`;
}


export default ScoreBoard;
