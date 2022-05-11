<template>
  <div class="Accueil">
    <Banniere class="banniere"/>
    <br>
    <iframe width="930" height="523" src="https://www.youtube.com/embed/DQuxEAgcC_E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <br>
    <h1><br>Qu'est-ce que les Ondées ?</h1>
    <div class="textPresentation">
      Porté par l’association étudiante ACT’Ifs Campus 3 et coproduit par l’association Arts Attack , « Les Ondées » est un événement culturel et musical qui se déroulera le samedi 4 juin 2022 à Caen. <br><br>
      Pour cette première édition, le public est convié sur l’esplanade du Cargö pour une journée mêlant joie et convivialité au sein d’un village culturel qui mettra en avant des acteurs locaux avec pour fil rouge : expression artistique et musique.<br><br>
    </div>
    <h1><br>Le Cargö </h1>
   <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d627.3874045247231!2d-0.3473604160313096!3d49.18101896355624!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sfr!4v1648044103471!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <h1><br><br>Une Programmation Musicale</h1>
    <div class="textPresentation">
      Une programmation musicale viendra rythmer la soirée sur la scène de musiques actuelles du Cargö. <br><br>
      
    </div>
    <Artistes class="Artistes" />


    <h1>Un Village culturel</h1>
    <div class="textPresentation">
      Le village culturel des Ondées est à retrouver dès 14H, le samedi 4 juin 2022, sur l'esplanade du Cargö.Evénement responsable, Les Ondées invitent le public à découvrir son village culturel association musiques, vie étudiante et développement durable. Dans une ambiance conviviale, les associations étudiantes se mobilisent pour proposer des animations tout public, une exposition, un espace détente et bien plus encore (programme bientôt disponible). 
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
    document.getElementById('Spider').addEventListener('click', () => { document.location.href = 'https://lesondees.fr/Programmation' })
    document.getElementById('A2H').addEventListener('click', () => { document.location.href = 'https://lesondees.fr/Programmation' })
    document.getElementById('Jyeu').addEventListener('click', () => { document.location.href = 'https://lesondees.fr/Programmation' })
    document.getElementById('Dj').addEventListener('click', () => { document.location.href = 'https://lesondees.fr/Programmation' })
    document.getElementById('SonVert').addEventListener('click', () => { document.location.href = 'https://lesondees.fr/Programmation' })

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
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}
.Artistes{
  margin-bottom: 50px;
}

#map{
  position: relative;
  width: 90%;
}
@media screen and (max-width: 1000px) {
  .textPresentation{
    font-size: 15px;
  }
}
</style>


