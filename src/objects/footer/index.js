import "./style.css";


function Footer(content) {
    return /*html*/ `

        <footer class="footer">
            <p>&copy; ${new Date().getFullYear()}  ${content}</p>
        </footer>
    
    `;
}

export default Footer;