<template>
  <div class="Accueil">
    <Banniere class="banniere"/>
    <br><br>
    <h1>Qu'est ce que les Ondées ?</h1>
    <div class="textPresentation">
      Porté par l’association (étudiante?) ACT’Ifs Campus 3 et coproduit par l’association Arts Attack , « Les Ondées » est un événement culturel et musical qui se déroulera le samedi 4 juin 2022 à Caen. <br><br>
      Pour cette première édition, le public est convié sur l’esplanade du Cargö pour une journée mêlant joie et convivialité au sein d’un village culturel qui mettra en avant des acteurs locaux avec pour fil rouge : expression artistique et musique. <br><br>
    </div>
    <h1>Une Programmation Musicale</h1>
    <div class="textPresentation">
      Une programmation musicale viendra rythmer la soirée sur la scène de musiques actuelles du Cargö. <br><br>
      
    </div>
    <Artistes class="Artistes" />


    <h1>Un Village culturel</h1>
    <div class="textPresentation">
      Bien que initié par des associations étudiantes, l'événement s’adresse à toutes et tous avec des activités proposées par les différents stands sur le village pendant l'après-midi.
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
    document.getElementById('Spider').addEventListener('click', () => { document.location.href = 'http://localhost:8080/Programmation' })
    document.getElementById('A2H').addEventListener('click', () => { document.location.href = 'http://localhost:8080/Programmation' })
    document.getElementById('Jyeu').addEventListener('click', () => { document.location.href = 'http://localhost:8080/Programmation' })
  }
}
</script>
<style nosope>
.banniere{
  border-top: 0.5vh solid #ce6029;
}
.textPresentation{
  text-align: left;
  padding-right: 5%;
  padding-left: 5%;
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}
.Artistes{
  margin-bottom: 50px;
}

</style>
