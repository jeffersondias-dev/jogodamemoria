import './style.css';
import CardFrontBack from '../../components/CardFrontBack';
import cards from "./data";
import Points from '../../components/Points';

function BoardGame() {


    const flipAndHideCards = ($cardsActive) => {
        $cardsActive.forEach((card) => card.classList.remove('-active'));
    };

    const matchingCards = ($cardsActive) => {
        if ($cardsActive[0].innerHTML === $cardsActive[1].innerHTML) {
            $cardsActive.forEach((card) => card.classList.add('-matching'));
            Points(true);
        }
    };


    window.boardGame = {}
    window.boardGame.handleClick = () => {

        const $boardGame = document.querySelector('.board-game');
        const $cardsActive = $boardGame.querySelectorAll('.card-front-back.-active')

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
        </section>
    `;
}
export default BoardGame;