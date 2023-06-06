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
        let s = "<div class='comp'><img src='" + compositeur.portrait + "'><div class='nomComp'>" + compositeur.complete_name + "</div></div>";
      $("#compositeurs").append(s);
      }
      })
  }
}
