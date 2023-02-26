<template>
    <div class="Partenaire" v-on:click="descend">
        <div class="Categorie">{{nom}}</div>
        <div class="logos">
          <a  v-for="item in getdata()" :key="item" :href="item.link">
            <img class="logo" :src="require('@/assets/images/Partenaires/' + item.message)" :alt="item.message">
          </a>
       
        </div>
    </div>
</template>
<script>
export default {
  name: 'Partenaire',
  props: {
    nom: String,
    listepartenaires: Array
  },
  methods: {
    descend: function (event) {
      if (event.currentTarget.style.height === 'auto') {
        event.currentTarget.style.height = '5vh'
      } else {
        event.currentTarget.style.height = 'auto'
      }
    },
    getdata: function () {
      return this.listepartenaires
    }
  }
}
</script>
<style scoped>
.Categorie{
    height:5vh;
    width: 100%;
    font-size: 3vh;
    display: flex;
    cursor: pointer;
    padding: 1vh;
    color: #FF7F50 ;
    border-bottom: solid white 1vh;
    /* background-color: beige; */

}
.Partenaire{
    transition : all 0.5s ease;
    flex-wrap: wrap;
    width: 80%;
    height: auto;
    overflow: hidden;
    top:0px;
}
.logos{
    width: 100%;
    display: flex;
    flex-direction:row ;
    flex-wrap: wrap;
    justify-content: left;
}

.logo{
  height: 12vh;
  margin:2vh;
}
</style>
