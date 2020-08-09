"use strict";

console.log("Version de Jquery utilisee: ", jQuery.fn.jquery);

let input = $("#item");
//console.log(input);

let container = $("#container");
//console.log(container);

let main = $('main');
//console.log(main);

input.on("keydown", function (evt) {

  //Regex pour confirmer au moins un car
  var regex = new RegExp('^(\\s*[A-Za-z]\\s*)+$');

  //Ajoute un item a la liste
  if (evt.which == 13 && regex.test(input.val())) {
    // Code ASCII de la touche Entrée

    //Verifie si la qqch est selected
    if ($('.selected').prop("tagName") == "LI") {
      $('.selected').text(input.val().trim());
    } else {
      if (container.children("li").filter(function (i, elem) {
        return $(elem).text().toLowerCase() === input.val().trim().toLowerCase();
      }).length === 0) {
        container.append("<li>" + input.val().trim() + "</li>");
      }
    }
  }
});


main.on("click", function (evt) {

  //Permet de verifier que bien un element li
  if ($(event.target).prop("tagName") == "LI") {
    if (evt.ctrlKey) {
      //Supprime le evt.target
      evt.target.remove();
    } else {
      //Permet d'aller placer la valeur du target dans le input
      input.val($(event.target).text());

      //Permet d'ajouter un effet pour montrer qu'il est bien selectionne
      let target = $(event.target);
      let selected = target.hasClass('selected');
      container.find('li').removeClass('selected');
      if (!selected) target.addClass("selected");


    }
  }
});





