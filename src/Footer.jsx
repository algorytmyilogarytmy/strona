import './index.css'

function Footer(){
    return(
        <footer className = "footer">
            <p id = "contact">Kontakt: <a href = "mailto:algorytmyilogarytmy@gmail.com">algorytmyilogarytmy@gmail.com</a></p>
            <p id = "documents"><a href = "documents/Polityka prywatności.pdf" target="_blank">Polityka prywatności</a> |  
                <a href="documents/Regulamin platformy.pdf" target="_blank">Regulamin</a></p>
            <div className = "socials">
                <p><a href="https://www.instagram.com/algorytmyilogarytmy/" target = "_blank">
                    <img src = "images/media/instagram.png" alt = "Instagram" width = "15px" height = "15px"/>
                </a><span>@algorytmyilogarytmy</span><br/>
                <a href="https://www.tiktok.com/@algorytmyilogarytmy" target = "_blank">
                    <img src = "images/media/tiktok.png" alt = "Tiktok" width = "15px" height = "15px"/>
                </a><span>@algorytmyilogarytmy</span><br/>
                <a href="https://www.facebook.com/profile.php?id=61579219600679" target = "_blank">
                    <img src = "images/media/facebook.png" alt = "Facebook" width = "15px" height = "15px"/>
                </a><span>Algorytmy i logarytmy</span><br/></p>
            </div>
            <p id = "cookies">Ta strona wykorzystuje pliki cookies. <a href="documents/Polityka prywatności.pdf">Dowiedz się więcej w polityce prywatności</a>.</p>
            <p id = "date">&copy; {new Date().getFullYear()} Algorytmy i logarytmy. Wszelkie prawa zastrzeżone</p>
        </footer>
    );
}

export default Footer