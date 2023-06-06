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
        let s = "<div>" + data.composer.birth + "</div><div>";
        if (data.composer.death != null) {
          s += data.composer.death + "</div><div>";
          $("#estMort").append("Date de mort:");
        }
        s+= data.composer.epoch + "</div><div class='liste'>"
        for (const morceau in data.works) {
          s += "<p>" + data.works[morceau].title + "</p>";
        }
        s += "</div>";
        $("#resultat").append(s);
        $("#image").append("<img src='" + data.composer.portrait + "'>");
        $("#titre").append(data.composer.complete_name);
      })
    }
}