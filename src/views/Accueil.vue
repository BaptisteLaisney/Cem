<template>
  <div class="Accueil">
    <!-- <Banniere class="banniere"/> -->
    <br>
    <!-- <iframe class="video" src="https://www.youtube.com/embed/DQuxEAgcC_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    <br>
    <h1><br>Qu'est-ce que les Ondées ?</h1>
    <div class="textPresentation">
      Porté par l’association étudiante Les Ondées et coproduit par l’association Arts Attack, “Les Ondées” est le nouveau rendez-vous culturel et musical caennais ! <br><br>

Après une première édition qui a vu le jour en juin 2022, Les Ondées seront de retour le 20 mai 2023, au Cargö, salle de concerts de Caen. <br><br>

Pour cette deuxième édition, le public est convié sur l’esplanade du Cargö lors d’une journée mêlant joie et convivialité au sein d’un village culturel qui accueillera encore plus d’animations tout public et ateliers artistiques, proposés par des assos étudiantes. <br><br>

Blind-test, karaoké, atelier sérigraphie de tote-bag, écriture rap et pleins d’autres animations sont à découvrir ! Le programme complet bientôt dévoilé.<br><br>
 
Les Ondées se prolongent en soirée avec des concerts qui s’annoncent déjà mémorables dans la grande salle du Cargö ! 

    </div>
    <h1><br>Le Cargö </h1>
   <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d627.3874045247231!2d-0.3473604160313096!3d49.18101896355624!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1648044103471!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <h1><br><br>Une Programmation Musicale</h1>
    <div class="textPresentation">
      Nouvelle édition, nouvelle programmation ! <br>
Assurément actuelle et défricheuse, la programmation des Ondées saura plaire aux amateur•ices de rap comme aux curieux•ses, découvrez là en détails :

      
    </div>
    <Artistes class="Artistes" />


    <h1>Un Village culturel</h1>
    <div class="textPresentation">Découvrez l’un des temps forts de l’événement : le village culturel. <br>
À entrée libre, le village culturel des Ondées est l’endroit parfait pour les âmes créatives.. <br>
En famille ou entre amis, les associations étudiantes se mobilisent pour proposer des animations tout public, des expositions artistiques, un espace détente et bien plus encore. Ambiance conviviale et festive garantie ! <br><br>

Alors, rendez-vous le 20 mai 2023, sur l’esplanade du Cargö, dès 14h ! <br><br>


Retrouvez plus de détails dans l’onglet VILLAGE CULTUREL.
 </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Banniere from '@/components/Accueil/Banniere.vue'
import Artistes from '@/components/Accueil/Artistes.vue'
export default {
  name: 'Accueil',
  components: {
    Banniere,
    Artistes
  },
  mounted () {
 

  }
}
</script>
<style nosope>


.banniere{
  border-top: 0.5vh solid #f1692c;

}
.textPresentation{
  text-align: justify;
  padding-right: 5%;
  padding-left: 5%;
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: bold;
}
.Artistes{
  margin-bottom: 50px;
}

#map{
  position: relative;
  width: 90%;
}
.video{
  width: 90%;
  height: 720px;
}
@media screen and (max-width: 1000px) {
  .textPresentation{
    font-size: 15px;
  }
  .video{
    width: 90%;
    height: 300px;
  }
}
</style>


