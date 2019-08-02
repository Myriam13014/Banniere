//function myFunction() {
//  setTimeout(function(){
//     document.querySelector('.bannière').style.display = 'block';
//     //todo avec addclassname
//   }, 2000);
//};

function myFunction() {
  setTimeout(function(){
document.querySelector('.bannière').className = "banner-block";
     //todo avec addclassname
   }, 2000);
};

//Fonction
$(function bannière(){
  //Variable couvrir
var couvrir = $('<div id="couvrir" ></div>');
//Affiche l'element caché
couvrir.show();
//Permet d'insérer des éléments HTML
couvrir.appendTo(document.body);
//Affiche la popup
$('.popup').show();
//Lorsqu'on clique sur fermer une fonction se déclanche
$('.fermer').click(function(){
// La fenêtre pop-up disparait
$('.popup').hide();

//Supprime l'élement selectionné
couvrir.appendTo(document.body).remove();
return false;
});
});
