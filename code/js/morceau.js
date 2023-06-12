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
        for (const work in data.works) {
          let s = "<div>" + data.works[work].genre + "</div><div>";
          if (data.works[work].popular = 1) {
            s += "Populaire</div><div>"
          }else{
            s += "Pas très populaire</div><div>"
          }
          if (data.works[work].recommanded = 1) {
            s += "Recommandé</div><div>"
          }else{
            s += "Pas forcément recommandé</div><div>"
          }
          s += data.works[work].composer.name + "</div>";
        }
        $("#resultat").append(s);
        $("#titre").append(data.works[work].title);
      })
    }
}