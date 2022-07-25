import './style.css';
import PlayerName from '../../components/PlayerName';

function ScoreBoard(content, content2) {
    return /*html*/ `
    <header class="score-board">
        ${PlayerName(content)}
        ${PlayerName(content2)}
    </header>
`;
}


export default ScoreBoard;