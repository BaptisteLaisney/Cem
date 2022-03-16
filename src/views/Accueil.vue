<template>
  <div class="Accueil">
    <Banniere class="banniere"/>
    <br><br>
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

</style>
