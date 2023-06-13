/*
  But :     Page contenant tous les compositeurs
  Auteur : Rémi Carrard
  Date :   05.06.2023 / V1.0
*/

class CompositeursCtrl {
  constructor(epoque) {
    this.afficherCompositeurs(epoque);
  }

  afficherCompositeurs(epoque) {
    http.chercherTousCompo(epoque, (data) => {
      for (const compositeur in data.composers) {
        let s =
          "<a href='javascript:indexCtrl.loadCompoSpecifique(" +
          data.composers[compositeur].id +
          ");'><div class='flip-card'><div class='flip-card-inner'><div class='flip-card-front'><img src='" +
          data.composers[compositeur].portrait +
          "'><div class='nomComp'><p>" +
          data.composers[compositeur].complete_name +
          "</p></div></div><div class='flip-card-back'><p>" + data.composers[compositeur].complete_name + "</p></div></div></div></a>";
        $("#compositeurs").append(s);
      }
      $(".flip-card").hover(function () {
        console.log("klsbdfkjh");      
      }, function () {
        console.log("out");
      }
    );
    });
  }
}
