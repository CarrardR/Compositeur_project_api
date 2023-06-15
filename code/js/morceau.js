/*
  But :    Page contenant le détail d'un morceau
  Auteur : Rémi Carrard
  Date :   15.06.2023 / V1.0
*/

class MorceauCtrl {
  constructor(morceau) {
    this.afficherMorceau(morceau);
  }

  afficherMorceau(morceau) {
    http.chercherMorceau(morceau, (data) => {
      let s = "";
      for (const work in data.works) {
        s += "<div>" + data.works[work].genre + "</div><div>";
        if (data.works[work].popular == 1) {
          s += "Populaire</div><div>";
        } else {
          s += "Pas populaire</div><div>";
        }
        if (data.works[work].recommanded == 1) {
          s += "Recommandé</div><div>";
        } else {
          s += "Pas recommandé</div><div>";
        }
        s += data.works[work].composer.complete_name + "</div>";
        $("#titre").append(data.works[work].title);
      }
      $("#resultatMorceau").append(s);
    });
  }
}
