import '/src/styles/settings/colors.css';
import '/src/styles/generic/reset.css'
import '/src/styles/elements/base.css';
import ScoreBoard from '/src/objects/ScoreBoard';
import BoardGame from '/src/objects/BoardGame';
import Footer from './src/objects/footer';
import Header from './src/objects/Header';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend',
    `   
    ${Header()}
    ${ScoreBoard("Player 1")}
    ${BoardGame(12)}
    ${Footer("jefferson")}

        `
);