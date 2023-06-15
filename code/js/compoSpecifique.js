/*
  But :    Page contenant le détail du compositeur
  Auteur : Rémi Carrard
  Date :   15.06.2023 / V1.0
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
      s += "<div class='flip-card-back'><p>Naissance: " + data.composer.birth + "</p><p>Mort: ";
      if (data.composer.death != null) {
        s += data.composer.death + "</p><p>Epoque: ";
      } else {
        s += "Encore en vie</p><p>Epoque: ";
      }
      s += data.composer.epoch + "</p></div></div></div></a>";
      $(".flip-card-back").replaceWith(s);
    });
  }
}
