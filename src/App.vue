<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Footer  id="footer"/>
    
  </div>

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

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@100&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color :black;
}

body{
  margin:0px;
  min-height: 100vh;
}
h1{
  font-family:'Bebas Neue', cursive; 
  color: #284e99;
  font-size: 50px;
  margin:auto;
  margin-bottom:40px ;
}
h2{
  font-family:'Bebas Neue', cursive; 
  color: #284e99;
  font-size: 35px;
  margin-top: 10px;
   margin-bottom: 10px;
}
h3{
  font-family:'Bebas Neue', cursive; 
  color: #ce6029;
  font-size: 25px;
  margin-top: 5px;
  margin-bottom: 5px;
}

</style>
