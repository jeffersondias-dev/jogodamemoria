import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';


const $root = document.querySelector('#root');
const $htmlBoardGame = BoardGame(2, 'field-agent') + BoardGame(2, 'intelligencer');

$root.insertAdjacentHTML('beforeend', $htmlBoardGame);