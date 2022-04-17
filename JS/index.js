let liste_defilement = document.getElementsByClassName("carrousel1");

function creation_bouton_defilement(carrousel) {
    if (screen.width < 1024 || window.innerWidth < 1024) {
        let new_button;
        let new_flex = document.createElement("div");
        new_flex.style.display = "flex";
        new_flex.style.justifyContent = "center";
        new_flex.style.padding = "5px 10%";
        new_flex.style.flexWrap = "wrap";
        let depot = document.getElementById("img_factice");
        depot.insertAdjacentElement("afterend", new_flex);
        for (let i = carrousel.length - 1; i >= 0; i--) {
            new_button = document.createElement("div");
            new_button.className = "bouton";
            new_button.style.width = "40px";
            new_button.style.height = "40px";
            new_button.style.border = "1px solid black";
            new_button.style.borderRadius = "50%"
            new_button.style.backgroundColor = "lightgrey";
            new_button.style.margin = "5px";
            new_button.onclick = function () {
                let liste_bouton = carrousel[i].parentNode.getElementsByClassName("bouton");
                for (let j = 0; j < carrousel.length; j++) {
                    liste_bouton[j].style.backgroundColor = "lightgrey";
                    carrousel[j].style.animationName = null;
                }  
                carrousel[i].style.animationName = "defilement";              
                carrousel[i].style.animationPlayState = "running";
                this.style.backgroundColor = "green";
            };
            new_flex.insertAdjacentElement("afterbegin", new_button);
        }
    }
}

async function defilement_appel(carrousel) {
    if (screen.width < 1024 || window.innerWidth < 1024) {
        let fonctionSuivante;
        console.log("001");
        let liste_bouton = carrousel[0].parentNode.getElementsByClassName("bouton");
        let bouton;
        let longueur_carrousel = carrousel.length;
        for (let j = 0; j < longueur_carrousel; j++) {
            carrousel[j].style.animationPlayState = "paused";
            carrousel[j].style.animationName = "defilement";
            carrousel[j].addEventListener('animationiteration', function () {
                carrousel[j].style.animationPlayState = "paused";
                liste_bouton[j].style.backgroundColor = "lightgrey";
                if (j == longueur_carrousel - 1)
                {
                    carrousel[0].style.animationName = "defilement";
                    carrousel[0].style.animationPlayState = "running";
                    liste_bouton[0].style.backgroundColor = "green";
                } else {
                    carrousel[j+1].style.animationName = "defilement";
                    carrousel[j+1].style.animationPlayState = "running";
                    liste_bouton[j+1].style.backgroundColor = "green";
                }
            });
        }
        carrousel[0].style.animationPlayState = "running";
        liste_bouton[0].style.backgroundColor = "green";
    }
}

creation_bouton_defilement(liste_defilement);
defilement_appel(liste_defilement);