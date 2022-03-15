<template>
    <div class="PresentationGauche">
        <img class = "logo-partenaire" :src="require('@/assets/images/Nous/' + image)" alt="Image Orga">
        <div class="trait"></div>
        <TextPresentation :titre="titre"/>
    </div>
</template>
<script>
import TextPresentation from '@/components/Nous/TextPresentation'
export default {
  name: 'PresentationGauche',
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
.PresentationGauche{
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
