/*
  But :     Page contenant un compositeurs détaillé
  Auteur : Rémi Carrard
  Date :   05.06.2023 / V1.0
*/

class CompoSpecifiqueCtrl {
    constructor(compositeur) {
      this.afficherComposer(compositeur);
    }

    afficherComposer(compositeur){
      http.chercherCompoSpecifique(compositeur, (data) => {
        let s = "<div class='liste'>"
        for (const morceau in data.works) {
          s += "<a href='javascript:indexCtrl.loadMorceau(" + data.works[morceau].id + ")'><p>" + data.works[morceau].title + "</p></a>";
        }
        s += "</div>";
        $("#resultatCompo").append(s);
        $("#titre").append(data.composer.complete_name);
      })
    }
}