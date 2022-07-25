import './src/styles/settings/colors.css';
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css';
import BoardGame from './src/objects/BoardGame';
import PLayerName from './src/components/PlayerName';


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    'beforeend',
    `
        ${PLayerName('Player 1')}
        ${PLayerName('Player 2')}
        ${BoardGame(6, 'field-agent')}
    
    `
);