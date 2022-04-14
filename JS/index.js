let liste_defilement = document.getElementsByClassName("carrousel1");

function creation_bouton_defilement(carrousel) {
    if (screen.width < 1024) {
        let new_button;
        let new_flex = document.createElement("div");
        new_flex.style.display = "flex";
        new_flex.style.justifyContent = "center";        
        let depot = document.getElementById("img_factice");
        depot.insertAdjacentElement("afterend",new_flex);
        for (let i = carrousel.length - 1; i >= 0 ; i--) {
            new_button = document.createElement("div");
            new_button.style.width = "30px";
            new_button.style.height = "30px";
            new_button.style.border = "1px solid black";
            new_button.style.borderRadius = "50%"
            new_button.style.backgroundColor = "lightgrey";
            new_button.style.margin = "0 5px";
            new_button.onclick = function() {
                for (let j = 0; j < carrousel.length - 1; j++){
                    carrousel[i].style.animationName = null;
                    
                    defilement_recursive(carrousel, i);
                }
            };
            new_flex.insertAdjacentElement("afterbegin", new_button);
        }
    }
}

function defilement_recursive(carrousel, i) {
    if (screen.width < 1024) {
        if (i > carrousel.length - 2) {
            i %= carrousel.length;
        }
        carrousel[i].style.animationName = null;
        carrousel[i].offsetHeight;
        carrousel[i].style.animationName = "defilement";
        carrousel[i].addEventListener('animationend', function () { defilement_recursive(carrousel, i + 1) });
    }
}

defilement_recursive(liste_defilement, 0);
creation_bouton_defilement(liste_defilement);