import '/src/styles/settings/colors.css';
import '/src/styles/generic/reset.css'
import '/src/styles/elements/base.css';
import Header from './src/objects/Header';
import ScoreBoard from '/src/objects/ScoreBoard';
import BoardGame from '/src/objects/BoardGame';
import Footer from './src/objects/Footer';
import InsertName from './src/objects/InsertName';


const $root = document.querySelector('#root');

const Name = true;

if (Name === true) {

    $root.insertAdjacentHTML(
        'beforeend',
        `   
            ${Header()}
            ${ScoreBoard()}
            ${BoardGame()}
      `
    );

} else {
    $root.insertAdjacentHTML(
        'beforeend',
        `   
                ${Header()}
                ${InsertName()}
                ${Footer()}
                `
    );
}