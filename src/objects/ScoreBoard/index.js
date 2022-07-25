import './style.css';
import PlayerName from '../../components/PlayerName';

function ScoreBoard(content) {
    return /*html*/ `
    <header class="score-board">
        ${PlayerName(content)}
        ${PlayerName(content)}
    </header>
`;
}


export default ScoreBoard;