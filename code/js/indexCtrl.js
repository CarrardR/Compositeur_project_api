/*
  But :     Controller pour le site web
  Auteur : Rémi Carrard
  Date :   05.06.2023 / V1.0
*/

$().ready(function () {
  // service et indexCtrl sont des variables globales qui doivent être accessible depuis partout => pas de mot clé devant ou window.xxx
  http = new Service();
  indexCtrl = new IndexCtrl();  // ctrl principal
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.loadCompositeur();
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  // avec arrow function
  loadCompositeur() {
    http.chargerVue("compositeurs", () =>  new CompositeursCtrl());
  }

  // avec function classique
  loadCompoSpecifique(compositeur) {
    http.chargerVue("compoSpecifique", () => new CompoSpecifiqueCtrl(compositeur));
  }
}
