import './style.css';
import CardGame from '../CardGame';

function CardFrontBack() {
    return /*html*/ `
      <article class="card-front-back">
        ${CardGame("field-agent")}
        ${CardGame("intelligencer")}
      </article>

      `
}

export default CardFrontBack;