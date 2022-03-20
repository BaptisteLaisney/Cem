<template>
    <div class="PresentationGauche">
        <img class = "logo-partenaire" :src="require('@/assets/images/Nous/' + image)" alt="Image Orga">
        <div class="trait"></div>
        <TextPresentation class="Tpres" :contenu="contenu" :titre="titre"/>
    </div>
</template>
<script>
import TextPresentation from '@/components/Nous/TextPresentation'
export default {
  name: 'PresentationGauche',
  props: {
    image: String,
    titre: String,
    contenu: String
  },
  components: {
    TextPresentation
  }
}
</script>
<style scoped>
.PresentationGauche{
    position: relative;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    height: auto;
}
.logo-partenaire{
    height: 30vh;
}

.trait{
    height:auto;
    margin-left:5%;
    margin-right:5%;
    width: 1px;
    background-color: gray;
}

@media screen and (max-width:1000px){
  .PresentationGauche{
    width: 95%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    text-align: center;
    

  }
  .trait{
    display: none;
  }
  .logo-partenaire{
    width:50%;
    height: unset;
    margin: auto;
  }
  .Tpres{
      width: 100%;
  }
}
</style>
