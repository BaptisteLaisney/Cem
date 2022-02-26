<template>
    <div class="Artistes">
        <Artiste id="Spider" artiste="Spider Zed" image="spider_zed.jpg"/>
        <Artiste id="A2H" artiste="A2H" image="A2H.jpg"/>
        <Artiste id="Jyeu" artiste="J Y E U H A I R" image="Jyeuhair.jpg"/>
        <!-- <Artiste artiste="Electro" image="spider_zed.jpg"/>
        <Artiste artiste="Tremp" image="spider_zed.jpg"/> -->
    </div>
</template>
<style scoped>

.Artistes{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
</style>

<script>
import Artiste from '@/components/Accueil/Artiste.vue'
export default {
  name: 'Artistes',
  components: {
    Artiste
  }
}
</script>
