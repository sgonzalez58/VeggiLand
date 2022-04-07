let rangement = document.getElementById("mobile");

function rangement_menu(){
    if(window.scrollY > 120){
        rangement.checked = true;
    }else if(window.scrollY == 0){
        rangement.checked = false;
    }
}

window.onscroll = function() {rangement_menu()}