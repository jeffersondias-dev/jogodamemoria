import './style.css';
import PlayerName from '../../components/PlayerName';
import PlayerScore from '../../components/PlayerScore';
import VsPlayer from '../../components/VsPlayer';

function ScoreBoard(content) {
    return /*html*/ `
    <header class="score-board">

        ${PlayerName("Player 1")}
        ${PlayerScore()}
        ${VsPlayer()}
        ${PlayerScore()}
        ${PlayerName("Player 2")}
    </header>
`;
}


export default ScoreBoard;