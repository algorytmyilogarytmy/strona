import './index.css'
import { useState } from "react";
function Header(){
    return(
        <div className="header">

            <div className = "icon">
            <img src = "images/logo/1.png" alt = "Logo" width = "80px" height = "80px"/>
                Algorytmy i Logarytmy
            </div>

            <nav className = "navbar">
                  <a href="#kurs">Kurs</a>
                    <a href="#onas">O nas</a>
                    <a href="#kup">Kup</a>
            </nav>

            <div className = "socials1">
                <a href="https://www.instagram.com/algorytmyilogarytmy/" target = "_blank">
                    <img src = "images/media/instagram1.png" alt = "Instagram" width = "15px" height = "15px"/>
                </a>
                <a href="https://www.tiktok.com/@algorytmyilogarytmy" target = "_blank">
                    <img src = "images/media/tiktok1.png" alt = "Tiktok" width = "15px" height = "15px"/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61579219600679" target = "_blank">
                    <img src = "images/media/facebook1.png" alt = "Facebook" width = "15px" height = "15px"/>
                </a>
            </div>
            </div>
    );
}

export default Header