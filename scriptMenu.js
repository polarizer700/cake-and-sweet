let popup = document.getElementById('mypopup');
let popupMenu = document.getElementById('burgerMenu');
let popupClose = document.querySelector('.close');
let popupLink = document.getElementsByClassName('popupLink');


popupMenu.onclick = function() {
  popup.style.display = "flex";
	/*document.getElementsByClassName('touch').style.opacity = "1";*/
}
popupClose.onclick = function() {
  popup.style.display = "none";
}



  for (var i = 0; i < 7; i++) {
    popupLink[i].onclick = function(){
        popup.style.display = "none";
      }
  }

window.onclick = function(e) {
  if (e.target == popup){
      popup.style.display = "none";
  }else if (e.target == popupLink){
    popup.style.display = "none";
  }

}
