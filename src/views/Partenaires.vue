<template>
  <div class="Partenaires">
    <h1>Nos partenaires</h1>
    <Partenaire class="Partenaire" nom="INSTITUTIONNELS" :listepartenaires="getPublic()"/>
    <Partenaire class="Partenaire" nom="PRIVÉS" :listepartenaires="getPrives()"/>
    <Partenaire class="Partenaire" nom="MÉDIA"/>
    <Partenaire class="Partenaire" nom="TECHNIQUE"/>
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
    getPublic: function () {
      return [
        { message: 'Institutionnels/UniCaen.png' },
        { message: 'Institutionnels/InitiativeEtu.png' },
        { message: 'Institutionnels/IUT.png' },
        { message: 'Institutionnels/CROUS.jpeg' },
        { message: 'Institutionnels/CVEC.jpeg' },
        { message: 'Institutionnels/RégionNormandie.png' },
        { message: 'Institutionnels/AtoutNormandie.jpeg' },
        { message: 'Institutionnels/DepartementCalvados.png' },
        { message: 'Institutionnels/FAGE.png' }
      ]
    },
    getPrives: function () {
      return [
        { message: 'Prives/Caisse.png' }
      ]
    },
    getFriends: function () {
      return [
        { message: 'Friends/Cargo.jpg' },
        { message: 'Friends/Auda.png' }
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
