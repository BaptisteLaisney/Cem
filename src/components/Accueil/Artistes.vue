<template>
    <div class="Artistes">
        <Artiste id="Spider" artiste="Spider Zed" image="spider_zed.jpg" v-on:click="gotospider"/>
        <Artiste id="A2H" artiste="A2H" image="A2H.jpg" v-on:click="gotoA2H"/>
        <Artiste id="Jyeu" artiste="J Y E U H A I R" image="Jyeuhair.jpg" v-on:click="gotoJyeu"/>
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
  },
  methods: {
    gotospider: function () {
      document.getElementById('Spider_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
    },
    gotoA2H: function () {
      document.getElementById('A2H_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
    },
    gotoJyeu: function () {
      document.getElementById('Jyeu_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
    }

  }
}
</script>
