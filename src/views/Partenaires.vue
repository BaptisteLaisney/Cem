<template>
  <div class="Partenaires">
    <h1>Nos partenaires</h1>
    <Partenaire class="Partenaire" nom="INSTUTIONNELS"/>
    <Partenaire class="Partenaire" nom="PRIVÉS"/>
    <Partenaire class="Partenaire" nom="MÉDIA"/>
    <Partenaire class="Partenaire" nom="TECHNIQUE"/>
    <Partenaire class="Partenaire" nom="FRIENDS"/>
  </div>
</template>
<script>
import Partenaire from '@/components/Partenaires/Partenaire.vue'
export default {
  name: 'Partenaires',
  components: {
    Partenaire
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
