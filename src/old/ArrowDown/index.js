
import './style.css'

function ArrowDown(currentPlayer = 1) {
  return /* html */ `
  <img class="arrow-down" 
      data-currentPLayer = ${currentPlayer}
      src="/images/arrow-down.png" 
      alt="Ícone de uma seta para baixo para selecionar o jogador" />
  `;
}


export default ArrowDown;
