import './style.css';
import CardGame from '../CardGame';

function CardFrontBack() {
    return /*html*/ `
      <article class="card-front-back">
        ${CardGame()}
        ${CardGame('html', 'html')}
      </article>
      ` ;
}

export default CardFrontBack;