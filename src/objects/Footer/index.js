import "./style.css";


function Footer() {

    window.restartGame = {};

    window.restartGame.handleClick = () => {
        location.reload();
    };

    return /*html*/ `

        <footer class="footer">  
        <button class="button-restart" onClick="restartGame.handleClick()">Reiniciar</button>
        <button class="button-restart" onClick="restartGame.handleClick()">Reiniciar</button>  
        </footer>
    
    `;
}

export default Footer;