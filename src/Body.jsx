import './index.css'
import { useEffect } from 'react';

const sets = [
    { count: 7, width: "10%", height: "10%", image: "images/animacje/animacje2.png" },
    { count: 5, width: "5%",  height: "5%",  image: "images/animacje/rownanie7.png" },
    { count: 7,  width: "10%", height: "10%", image: "images/animacje/rownanie5.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie3.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie1.png" },
    { count: 7,  width: "10%", height: "10%", image: "images/animacje/rownanie2.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie4.png" },
    { count: 7,  width: "10%", height: "10%", image: "images/animacje/rownanie6.png" },
    { count: 5,  width: "10%", height: "10%", image: "images/animacje/rownanie8.png" },
    { count: 7,  width: "5%", height: "5%", image: "images/animacje/rownanie10.png" }
];

function Body(){

  useEffect(() => {
    sets.forEach(set => {
      for (let i = 0; i < set.count; i++) {
        const el = document.createElement("div");
        el.classList.add("animation");

        el.style.left = Math.random() * 90 + "vw";
        el.style.width = set.width;
        el.style.height = set.height;
        el.style.backgroundImage = `url(${set.image})`;
        el.style.animationDelay = Math.random() * 80 + "s";

        document.querySelector(".back").appendChild(el);
      }
    });
  }, []);
    return(
    <div className="back">
        <main>
        <div className = "animation animation1"></div>
        <div className = "animation animation2"></div>
        <div className = "animation animation3"></div>
        <div className = "animation animation4"></div>
        <div className = "animation animation5"></div>
            <div className = "container">
                    <div className = "box">
                    <div className="box1">

                            <h1 id = "greeting">NOWOCZESNY PDF MATEMATYCZNY</h1><br/>
                            <p id = "myP1">
                                Przygotowujesz się do matury z matematyki i gubisz się w zadaniach? <br/>
                                Ten PDF to proste wyjaśnienia, rozwiązane przykłady i wskazówki, 
                                które <br/> 
                                uporządkują cały materiał 📖.
                            </p>
                            <br/>
                            <a href="#kup" className="btn-link">Dowiedz się więcej</a>
                            <div className = "image1"></div>

                    </div>
                         <div className="box2">
                        <div className = "logo3"></div>
                            </div>
                    </div>
                </div>
                <div className = "container2" id = "kurs">
                    <div className = "block">
                         <div className="box3">
                            <h1 id = "greeting">Jak działa nasz kurs?</h1>
                            <p id = "myP2">
                                Otwierasz PDF i przechodzisz przez materiał dokładnie tak, jak na maturze – dział po dziale. 
                                Najpierw dostajesz krótkie i jasne wytłumaczenie zagadnienia, potem rozwiązane zadania krok po kroku, 
                                a na końcu wskazówki, które pokazują najprostsze sposoby dochodzenia do odpowiedzi. Dzięki temu uczysz się nie tylko samych wyników, 
                                ale też sposobu myślenia, który pozwala poradzić sobie z każdym typem zadania na egzaminie.
                            </p>
                            </div>
                          <img src="images/grafika1.png" alt="Logo" className="logo2" />
                    </div>
                </div>
             <div className = "container2">
                    <div className = "box">
                         <div className="box3">
                            <p id = "myP2">
                            Nasz kurs w formie PDF to kompletny przewodnik po maturze z matematyki podstawowej. 
                            Zawiera opracowanie każdego działu, tak aby krok po kroku przeprowadzić Cię przez cały materiał wymagany na egzaminie. 
                            Każde zagadnienie zostało jasno wytłumaczone, a obok teorii znajdziesz rozwiązane zadania – ułożone po kolei, tak jak mogą pojawiać się na maturze. 
                            Do każdego przykładu dodajemy wskazówki i sposoby rozwiązywania, które pomagają zrozumieć, skąd biorą się kolejne kroki i jak poradzić sobie nawet z trudniejszymi poleceniami. 
                            Dzięki temu PDF jest nie tylko zbiorem gotowych rozwiązań, ale przede wszystkim praktycznym przewodnikiem, który uczy myślenia matematycznego i daje pewność podczas egzaminu.
                            </p>
                            </div>
                    </div>
                </div>
                    <div className = "container2" id = "kup">
                    <div className = "box">
                        <div className="box5">
                             <div className = "logo4"></div>
                        </div>
                         <div className="box6">
                            <h1 id = "greeting">KURS</h1>
                            <p id = "myP1">
                                Jedno miejsce, w którym znajdziesz wszystko, czego potrzebujesz do zdania egzaminu.
                                 Opracowanie każdego działu, rozwiązane zadania krok po kroku, proste wyjaśnienia i praktyczne wskazówki. 
                                 PDF, który porządkuje cały materiał i prowadzi Cię przez maturę bez stresu.<br/><br/>

                                💰 Cena: 49 zł - 
                                Jednorazowa płatność – dożywotni dostęp do materiału.<br/>

                                👉 Kup teraz i zacznij przygotowania bez odkładania na później! <br/>
                            </p>
                            <button type = "submit" id = "submit" onclick="googleSheet()">Kup teraz</button>
                            <div className = "image2"></div>
                            </div>
                    </div>
                </div>
                            <div className = "container3" id = "onas">
                    <div className = "block">
                         <div className="box3">
                            <h1 id = "greeting">O nas</h1>
                            <p id = "myP2">
                            Jesteśmy dwiema studentkami – jedna z nas studiuje informatykę, druga matematykę z doświadczeniem w udzielaniu korepetycji – 
                            i wspólnie postanowiłyśmy stworzyć materiał, którego same brakowało nam podczas przygotowań do matury.
                            Nasz PDF to kompendium najważniejszych zagadnień z matematyki podstawowej, wyjaśnionych w prosty i zrozumiały sposób. 
                            Łączymy matematyczną precyzję z technicznym podejściem, dzięki czemu nawet trudniejsze tematy stają się przystępne. 
                            Nie znajdziesz tu suchej teorii – każdy dział tłumaczymy krok po kroku, pokazując przykłady i wskazówki, 
                            które naprawdę ułatwiają naukę. Wierzymy, że dzięki temu przygotowania do matury będą dla Ciebie prostsze, 
                            a sam egzamin mniej stresujący.
                            </p>
                            </div>
                        <div className="box4">
                          <img src="images/o nas.png" alt="Logo" className="logo5" />
                        </div>
                    </div>
                </div>
        </main>
    </div>
    );
}

export default Body