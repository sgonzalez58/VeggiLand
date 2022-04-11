let rangement = document.getElementById("mobile");
let bouton_rangement = document.getElementById("overlay");
let clique = false;

window.onscroll = function () { menu_rangement() };

function menu_rangement() {
    if (window.scrollY > 100 && !clique && screen.width >= 1024) {
        rangement.checked = true;
        bouton_rangement.style.display = "block";
    } else if (window.scrollY == 0 && screen.width >= 1024) {
        rangement.checked = false;
        clique = false;
        bouton_rangement.style.display = "none";
    }
}

bouton_rangement.onclick = function () {
    rangement.checked = !rangement.checked;
    clique = true;
    if (screen.width >= 1024) {
        bouton_rangement.style.display = "block";
    }
};