import './style.css';
import PlayerName from '../../components/PlayerName';
import Timer from '../../components/Timer';
import Points from '../../components/Points';



function ScoreBoard() {

    return /*html*/ `
    <header class="score-board">
        <div class="player-info">
        ${PlayerName("Player")}
        </div>
        <div class="game-info">
        ${Points()}
        ${Timer()}
        </div>

    </header>
`;
}


export default ScoreBoard;
