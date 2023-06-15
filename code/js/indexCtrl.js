/*
  But :    Controleur pour le site web
  Auteur : Rémi Carrard
  Date :   15.06.2023 / V1.0
*/

$().ready(function () {
  http = new Service();
  indexCtrl = new IndexCtrl();
  http.centraliserErreurHttp(indexCtrl.afficherErreurHttp);
});

class IndexCtrl {
  constructor() {
    this.loadCompositeur("all");
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  loadCompositeur(epoque) {
    http.chargerVue("compositeurs", () => new CompositeursCtrl(epoque));
  }

  loadCompoSpecifique(compositeur) {
    http.chargerVue2("compoSpecifique", () => new CompoSpecifiqueCtrl(compositeur));
    $("#viewReduite").addClass("viewReduite");
  }

  loadMorceau(morceau) {
    http.chargerVue2("morceau", () => new MorceauCtrl(morceau));
    $("#viewReduite").addClass("viewReduite");
  }
}
