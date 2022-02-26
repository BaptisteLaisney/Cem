<template>
    <div class="Nous">
        <h1>Qui sommes nous ?</h1>
        <PresentationGauche image="Actif.png"/>
    </div>

</template>
<script>
import PresentationGauche from '@/components/Nous/PresentationGauche'

export default {
  name: 'Nous',
  components: {
    PresentationGauche
  }
}
</script>
<style scoped>
.Nous{
    text-align: center;
}
</style>
