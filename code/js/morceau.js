/*
  But :     Page contenant un compositeurs détaillé
  Auteur : Rémi Carrard
  Date :   05.06.2023 / V1.0
*/

class MorceauCtrl {
    constructor(morceau) {
      this.afficherMorceau(morceau);
    }

    afficherMorceau(morceau){
      http.chercherMorceau(morceau, (data) => {
        let s = "<a href='javascript:indexCtrl.loadCompoSpecifique()'><div>" + data.composer.birth + "</div><div>";
        if (data.composer.death != null) {
          s += data.composer.death + "</div><div>";
        }else{
          s += "Encore en vie</div><div>";
        }
        s+= data.composer.epoch + "</div><div class='liste'>"
        for (const morceau in data.works) {
          s += "<p>" + data.works[morceau].title + "</p>";
        }
        s += "</div></a>";
        $("#resultat").append(s);
        $("#image").append("<img src='" + data.composer.portrait + "'>");
        $("#titre").append(data.composer.complete_name);
      })
    }
}