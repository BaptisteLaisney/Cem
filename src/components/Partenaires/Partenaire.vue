<template>
    <div class="Partenaire">
        <div class="Categorie">{{nom}}</div>
        <div class="logos">
          <img class="logo" src="@/assets/images/artistes/A2H.jpg" alt="">
          <img class="logo" src="@/assets/images/artistes/A2H.jpg" alt="">
          <img class="logo" src="@/assets/images/artistes/A2H.jpg" alt="">
          <img class="logo" src="@/assets/images/artistes/A2H.jpg" alt="">
          <img class="logo" src="@/assets/images/artistes/A2H.jpg" alt="">
        </div>
    </div>
</template>
<script>
export default {
  name: 'Partenaire',
  props: {
    nom: String
  },
  mounted () {
    const elements = document.querySelectorAll('.Partenaire')
    elements.forEach(el => el.addEventListener('click', event => {
      event.currentTarget.style.transition = ' all 0.5s ease'
      event.currentTarget.style.height = '26vh'
    }))
  }
}
</script>
<style scoped>
.Categorie{
    width: 100%;
    font-size: 3vh;
    display: flex;
    cursor: pointer;
    padding: 1vh;
    color: #FF7F50 ;
    border-bottom: solid white 1vh;

}
.Partenaire{
    background-color: beige;
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    height: 5vh;
    overflow: hidden;
}
.logos{
    height:20vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.Partenaire:hover{
    height: 26vh;
    transition: all 0.5s ease;
}
.logo{
  height: 20vh;
}
</style>
