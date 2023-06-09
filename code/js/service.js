/*
  But :    Page contenant le worker qui fait les appels http vers l'API
  Auteur : Rémi Carrard
  Date :   15.06.2023 / V1.0
*/
class Service {
  constructor() {}

  centraliserErreurHttp(httpErrorCallbackFn) {
    $.ajaxSetup({
      error: function (xhr, exception) {
        let msg;
        if (xhr.status === 0) {
          msg = "Pas d'accès à la ressource serveur demandée !";
        } else if (xhr.status === 404) {
          msg = "Page demandée non trouvée [404] !";
        } else if (xhr.status === 500) {
          msg = "Erreur interne sur le serveur [500] !";
        } else if (exception === "parsererror") {
          msg = "Erreur de parcours dans le JSON !";
        } else if (exception === "timeout") {
          msg = "Erreur de délai dépassé [Time out] !";
        } else if (exception === "abort") {
          msg = "Requête Ajax stoppée !";
        } else {
          msg = "Erreur inconnue : \n" + xhr.responseText;
        }
        httpErrorCallbackFn(msg);
      },
    });
  }

  chercherTousCompo(epoque, successCallback) {
    let url = "https://api.openopus.org/dyn/composer/list/epoch/" + epoque + ".json";
    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallback
    });
  }

  chercherCompoSpecifique(compositeur, successCallback) {
    let url = "https://api.openopus.org/dyn/work/list/composer/" + compositeur + "/genre/all.json";
    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallback
    });
  }

  chercherMorceau(morceau, successCallback) {
    let url = "https://api.openopus.org/dyn/work/list/ids/" + morceau + ".json";
    // envoi de la requête
    $.ajax(url, {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      success: successCallback
    });
  }

  chargerVue(vue, callback) {

    // charger la vue demandee
    $("#view").load("views/" + vue + ".html", function () {

      // si une fonction de callback est spécifiée, on l'appelle ici
      if (typeof callback !== "undefined") {
        callback();
      }

    });
  }

  chargerVue2(vue, callback) {

    // charger la vue demandee
    $("#viewReduite").load("views/" + vue + ".html", function () {

      // si une fonction de callback est spécifiée, on l'appelle ici
      if (typeof callback !== "undefined") {
        callback();
      }

    });
  }
}
