<template>
  <div class="Infos">
    <h1>Informations pratiques</h1>
    <Categorie :infos ="getInfos1()" nomCategorie="C'est la categorie"/>
    <Categorie :infos ="getInfos2()" nomCategorie="Une autre Categorie"/>
  </div>
</template>
<script>
import Categorie from '@/components/Infos/Categorie'

export default {
  name: "Infos",
  components:{
    Categorie
  },
  methods:{
    getInfos1(){
      return [{
        Titre : "Premiere Infos",
        Contenu : "Contenu"
      },{
        Titre : "Deuxième Infos",
        Contenu : "Notre deuxieme inforation contenu"
      }]
    },
    getInfos2(){
      return [{
        Titre : "Premiere Infos",
        Contenu : "Contenu"
      },{
        Titre : "Deuxième Infos",
        Contenu : "Notre deuxieme inforation contenu"
      }]
    },
  }


}
</script>

