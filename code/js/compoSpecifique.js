/*
  But :     Page contenant un compositeurs détaillé
  Auteur : Rémi Carrard
  Date :   05.06.2023 / V1.0
*/

class CompoSpecifiqueCtrl {
  constructor(compositeur) {
    this.afficherComposer(compositeur);
  }

  afficherComposer(compositeur) {
    http.chercherCompoSpecifique(compositeur, (data) => {
      let s = "<div class='liste'>";
      for (const morceau in data.works) {
        s +=
          "<a href='javascript:indexCtrl.loadMorceau(" +
          data.works[morceau].id +
          ")'><p>" +
          data.works[morceau].title +
          "</p></a>";
      }
      s += "</div>";
      $("#resultatCompo").append(s);
      $("#titre").append(data.composer.complete_name);
    });
  }
}
class BackCompospecifiqueCtrl {
  constructor(compositeur) {
    this.versoCarte(compositeur);
  }
  
  versoCarte(compositeur) {
    http.chercherCompoSpecifique(compositeur, (data) => {
      let s = "";
      s += "<p>Date de naissance: " + data.composer.birth + "</p><p>";
      if (data.composer.death != null) {
        s += data.composer.death + "</p><p>";
      } else {
        s += "Encore en vie</p><p>";
      }
      s += data.composer.epoch + "</p>";
      $(".flip-card-back").append(s);
    });
  }
}
