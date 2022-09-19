import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from "./data";
import Points from '../../components/Points';
import EndGame from '../../components/EndGame';

function BoardGame() {


    const flipAndHideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
        Points(false, true);
    };

    const matchingCards = ($cardsActive) => {
        if ($cardsActive[0].innerHTML === $cardsActive[1].innerHTML) {
            $cardsActive.forEach((card) => card.classList.add('-matching'));
            Points(true, 2);
        }
    };

    const timeOut = ($allCards, $showAndCloseEndGame) => {
        $allCards.forEach((card) => card.classList.add('-timeIsOut'));
        $showAndCloseEndGame.classList.add('-timeIsOut');
    };


    window.boardGame = {}
    window.boardGame.handleClick = () => {

        const $boardGame = document.querySelector('.board-game');
        const $showAndEndGame = document.querySelector('.end-game');

        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')
        const $allCards = $boardGame.querySelectorAll('.card-front-back');

        const endPoints = document.querySelector('#points');
        const endTimer = document.querySelector('#timer');


        const checkedTimer = setInterval(() => {
            confirmTime(endPoints, endTimer);
        }, 1000);


        const confirmTime = () => {
            const timeNow = document.querySelector('#timer');
            if (timeNow.textContent === '00:00') {
                timeOut($allCards, $showAndEndGame);
                clearTimeout(checkedTimer);
            }
        };

        if ($cardsActive.length === 2) {
            matchingCards($cardsActive);
            setTimeout(() => {
                flipAndHideCards($cardsActive);
            }, 1000);
        }
        else if ($cardsActive.length >= 3) {
            flipAndHideCards($cardsActive);
        }
    }

    const randomCards = (htmlCardsList) => {
        for (let i = 0; i < htmlCardsList.length; i++) {
            let randomNumber = Math.floor(Math.random() * htmlCardsList.length);
            let aux = htmlCardsList[randomNumber];
            htmlCardsList[randomNumber] = htmlCardsList[i];
            htmlCardsList[i] = aux;
        }
    };


    const htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    randomCards(htmlCardsList);
    const $htmlCards = htmlCardsList.join('');

    return /*html*/`
            <section class="board-game" onClick="boardGame.handleClick()">
                ${$htmlCards}
                ${EndGame()
        }
            </section >
    `;
}



export default BoardGame;