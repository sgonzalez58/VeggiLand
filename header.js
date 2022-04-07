let rangement = document.getElementById("mobile");

window.onscroll = function() {rangement_menu()};

function rangement_menu(){
    if(window.scrollY>150){
        rangement.checked = true;
    }
}