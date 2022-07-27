import '/public/src/styles/settings/colors.css';
import '/public/src/styles/generic/reset.css'
import '/public/src/styles/elements/base.css';
import ScoreBoard from '/public/src/objects/ScoreBoard';
import BoardGame from '/public/src/objects/BoardGame';



const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend',
    `   ${ScoreBoard("Player 1")}
        ${BoardGame(8)}

`
);