<template>
    <div class="PresentationDroite">
        <TextPresentation :titre = "titre" />
        <div class="trait"></div>
        <img class = "logo-partenaire" :src="require('@/assets/images/Partenaires/' + image)" alt="Image Orga">
    </div>
</template>
<script>
import TextPresentation from '@/components/Nous/TextPresentation'
export default {
  name: 'PresentationDroite',
  props: {
    image: String,
    titre: String
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
    height: 30vh;
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
</style>
