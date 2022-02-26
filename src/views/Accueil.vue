<template>
  <div class="Accueil">
    <Banniere/>
    <Artistes/>
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
  }
}
</script>
<style nosope>
#Accueil{
  /* background-color:black ; */
}
</style>
