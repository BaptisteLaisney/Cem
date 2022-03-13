<template>
    <div class="Nous">
        <h1>Qui sommes nous ?</h1>
        <PresentationGauche image="Actif.png" titre="Association ACT'Ifs"/>
        <div class="espace"></div>
        <PresentationDroite image="Cargo.jpg" titre="Le Cargö"/>
        <div class="espace"></div>
        <PresentationGauche image="ESAM.png" titre="Ecole de l'ESAM"/>
        <div class="espace"></div>
        <PresentationDroite image="TheMuses.png" titre="The Muses"/>
    </div>

</template>
<script>
import PresentationGauche from '@/components/Nous/PresentationGauche'
import PresentationDroite from '@/components/Nous/PresentationDroite'

export default {
  name: 'Nous',
  components: {
    PresentationGauche,
    PresentationDroite
  }
}
</script>
<style scoped>
.Nous{
    text-align: center;
}
.espace{
    height:10vh;
}
</style>
