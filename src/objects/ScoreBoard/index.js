import './style.css';
import PlayerName from '../../components/PlayerName';
import Timer from '../../components/Timer';
import Points from '../../components/Points';



function ScoreBoard() {

    return /*html*/ `
    <header class="score-board">
        ${PlayerName("Player 1")}
        ${Points()}
        ${Timer()}

    </header>
`;
}


export default ScoreBoard;
