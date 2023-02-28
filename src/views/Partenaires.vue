<template>
  <div class="Partenaires">
    <h1>Nos partenaires</h1>
    <Partenaire class="Partenaire" nom="INSTITUTIONNELS" :listepartenaires="getPublic()"/>
    <!-- <Partenaire class="Partenaire" nom="SPONSORS" :listepartenaires="getPrives()"/> -->
    <Partenaire class="Partenaire" nom="PARTENAIRES MEDIAS" :listepartenaires="getMedias()" />
    <Partenaire class="Partenaire" nom="FRIENDS" :listepartenaires="getFriends()" />
  </div>
</template>
<script>
import Partenaire from '@/components/Partenaires/Partenaire.vue'
export default {
  name: 'Partenaires',
  components: {
    Partenaire
  },
  methods: {
    getMedias : function(){
      return [
        { message: 'Medias/HelloCaen.png',  link: 'https://www.instagram.com/hello_caen/' },
        { message: 'Medias/Bakuss.png',  link: 'https://www.bakuss.fr' },

        
      ]
    },
    getPublic: function () {
      return [
        { message: 'Institutionnels/UniCaen.png', link: 'https://www.unicaen.fr' },
        { message: 'Institutionnels/CROUS.jpeg',  link: 'https://www.crous-normandie.fr' },
        { message: 'Institutionnels/CVEC.jpeg', link: 'https://www.unicaen.fr/vie-de-campus/vie-etudiante/usages-de-la-cvec/' },
        { message: 'Institutionnels/IUT.png', link: 'http://iut-grand-ouest-normandie.unicaen.fr'},
        { message: 'Institutionnels/RégionNormandie.png',link: 'https://www.normandie.fr' },
        { message: 'Institutionnels/AtoutNormandie.jpg',link: 'https://atouts.normandie.fr/beneficiaires/Views/Accueil.aspx' },
        { message: 'Institutionnels/Caen.jpeg',link: 'https://caen.fr' },
       
      ]
    },
    getPrives: function () {
      return [
        { message: 'Prives/Caisse.png' },
        { message: 'Friends/Auda.png' }
      ]
    },
    getFriends: function () {
      return [
        { message: 'Friends/Cargo.jpg' ,link: 'https://lecargo.fr'},
        { message: 'Friends/Actif.png' ,link: 'https://www.instagram.com/bde_campus3/'},
        { message: 'Friends/ESAM.png',link: 'https://www.instagram.com/esamasso/' },
        { message: 'Friends/FCBN.png',link: 'https://www.instagram.com/la_fcbn/' },
        
      ]
    }
  }
}
</script>
<style scoped>
.Partenaires{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.Partenaire{
  margin: auto;
  margin-top: 2vh;
}
</style>
