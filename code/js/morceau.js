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
        //let s = "<div>" + data.work.genre + "</div><div>";
        if (data.works.composer) {
          
        }
        s += data.work.death + "</div>";
        $("#resultat").append(s);
        $("#image").append("<img src='" + data.composer.portrait + "'>");
        $("#titre").append(data.composer.complete_name);
      })
    }
}