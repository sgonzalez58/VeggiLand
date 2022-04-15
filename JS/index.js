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
                let liste_bouton;
                let bouton;
                for (let j = 0; j < carrousel.length; j++) {
                    carrousel[j].style.animationDuration = "0.1s";
                    liste_bouton = carrousel[j].parentNode.getElementsByClassName("bouton");
                    bouton = liste_bouton[j];
                    bouton.style.backgroundColor = "lightgrey";
                }                        
                defilement_recursive(carrousel, i);
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
        for (let j = 0; j < carrousel.length; j++) {
            bouton = liste_bouton[j];
            carrousel[j].addEventListener('animationiteration', function () {
                carrousel[j].style.animationPlayState = "paused";
                bouton.style.backgroundColor = "lightgrey";
            });
        }
        while (true){
            await defilement_recursive(carrousel,0);
        }
    }
}

async function defilement_recursive(carrousel, i) {
    let attente;
    for (j = 0; j < carrousel.length; j++) {    
        carrousel[j].style.animationName = null;
    }   
    while (i < carrousel.length) {
        console.log("001 : " + i);
        let duration = carrousel[i].style.animationDuration;
        let liste_bouton = carrousel[i].parentNode.getElementsByClassName("bouton");
        let bouton = liste_bouton[i];
        bouton.style.backgroundColor = "green";
        carrousel[i].style.animationDuration = "6s";
        carrousel[i].style.animationPlayState = "running";
        carrousel[i].style.animationName = "defilement";
        attente = new Promise((successCallback, failureCallback) => {
            carrousel[i].addEventListener('animationiteration', function () {
                successCallback();
                i++;
                bouton.style.backgroundColor = "lightgrey";
            });
        });
        await attente;
    }
    return (i == carrousel.length);
}

creation_bouton_defilement(liste_defilement);
defilement_appel(liste_defilement);