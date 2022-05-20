<template>
  <div class="Partenaires">
    <h1>Nos partenaires</h1>
    <Partenaire class="Partenaire" nom="INSTITUTIONNELS" :listepartenaires="getPublic()"/>
    <Partenaire class="Partenaire" nom="SPONSORS" :listepartenaires="getPrives()"/>
    <Partenaire class="Partenaire" nom="MEDIAS" :listepartenaires="getMedias()" />
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
        { message: 'Medias/HelloCaen.png' },
        { message: 'Medias/Phenix.png' }
      ]
    },
    getPublic: function () {
      return [
        { message: 'Institutionnels/UniCaen.png' },
        { message: 'Institutionnels/InitiativeEtu.png' },
        { message: 'Institutionnels/IUT.png' },
        { message: 'Institutionnels/CROUS.jpeg' },
        { message: 'Institutionnels/CVEC.jpeg' },
        { message: 'Institutionnels/Caen.jpeg' },
        { message: 'Institutionnels/RégionNormandie.png' },
        { message: 'Institutionnels/AtoutNormandie.jpg' },
        
        // { message: 'Institutionnels/DepartementCalvados.png' },
        { message: 'Institutionnels/FAGE.png' }
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
        { message: 'Friends/Cargo.jpg' }
        
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
