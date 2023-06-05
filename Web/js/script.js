$(document).ready(function (){

	
    $('.carousel').carousel({
        interval:4000
    });
});
var Button = document.getElementById('tog-btn'),
    Bag =  document.getElementById('bag'),
    Nav =  document.getElementById('main-nav'),
    Close =  document.getElementById('close');
Button.onclick = function(){
Bag.style.display = "none";
}
Close.onclick = function(){
    Nav.style.position = "static";
    Nav.style.display = "none";
    }



