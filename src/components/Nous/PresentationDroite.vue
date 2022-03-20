<template>
    <div class="PresentationDroite">
        <TextPresentation :contenu="contenu"  :titre = "titre" class="Tpres"/>
        <div class="trait"></div>
        <img class = "logo-partenaire" :src="require('@/assets/images/Nous/' + image)" alt="Image Orga">
    </div>
</template>
<script>
import TextPresentation from '@/components/Nous/TextPresentation'
export default {
  name: 'PresentationDroite',
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
.PresentationDroite{
    position: relative;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    height: auto;
    position: relative;
}
.logo-partenaire{
    height: 30vh;
    position: relative;
}

.trait{
    height:auto;
    margin-left:5%;
    margin-right:5%;
    width: 1px;
    background-color: gray;
    position: relative;
}
@media screen and (max-width:1000px){
  .PresentationDroite{
    width: 95%;
    flex-direction: column-reverse;
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
