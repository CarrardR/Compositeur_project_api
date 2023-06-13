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
  $(".flip-card-inner").hover(function () {
      console.log("klsbdfkjh");      
    }
  );
});

class IndexCtrl {
  constructor() {
    this.loadCompositeur("all");
  }

  afficherErreurHttp(msg) {
    alert(msg);
  }

  loadCompositeur(epoque) {
    http.chargerVue("compositeurs", () =>  new CompositeursCtrl(epoque));
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
