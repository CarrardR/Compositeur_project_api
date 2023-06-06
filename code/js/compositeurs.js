/*
  But :     Page contenant tous les compositeurs
  Auteur : Rémi Carrard
  Date :   05.06.2023 / V1.0
*/

class CompositeursCtrl {
  constructor() {
    this.afficherCompositeurs();
  }

  afficherCompositeurs() {
    http.chercherTousCompo((data) => {
      for (const compositeur in data.composers) {
        let s = "<a href='javascript:indexCtrl.loadCompoSpecifique(" + data.composers[compositeur] +");'><div class='comp'><img src='" + data.composers[compositeur].portrait + "'><div class='nomComp'>" + data.composers[compositeur].complete_name + "</div></div></a>";
      $("#compositeurs").append(s);
      }
      })
  }
}
