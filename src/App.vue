<template>
  <div id="nav">
    <Navigation/>
  </div>
  <router-view/>
  <Footer/>
</template>

<script>
import Navigation from '@/components/Constant/Nav.vue'
import Footer from '@/components/Constant/Footer.vue'
export default {
  name: 'Menu',
  components: {
    Navigation,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{

  margin:0px
}
</style>
