import '/src/styles/settings/colors.css';
import '/src/styles/generic/reset.css'
import '/src/styles/elements/base.css';
import Header from './src/objects/Header';
import ScoreBoard from '/src/objects/ScoreBoard';
import BoardGame from '/src/objects/BoardGame';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend',
    `   
    ${Header()}
    ${ScoreBoard()}
    ${BoardGame()}
        `
);