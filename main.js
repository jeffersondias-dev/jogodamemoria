import '/assets/styles/settings/colors.css';
import '/assets/styles/generic/reset.css'
import '/assets/styles/elements/base.css';
import ScoreBoard from '/assets/objects/ScoreBoard';
import BoardGame from '/assets/objects/BoardGame';



const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend',
    `   ${ScoreBoard("Player 1")}
        ${BoardGame(8)}

`
);