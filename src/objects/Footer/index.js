import "./style.css";


function Footer() {

    window.restartGame = {};

    window.restartGame.handleClick = () => {
        location.reload();
    };

    return /*html*/ `

        <footer class="footer">  
        <button class="button-start" onClick="restartGame.handleClick()">Start</button>  
        </footer>
    
    `;
}

export default Footer;