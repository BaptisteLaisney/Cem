<template>
    <div class="PresentationGauche">
        <img class = "logo-partenaire" :src="require('@/assets/images/Partenaires/' + image)" alt="Image Orga">
        <div class="droite">
            <div class="TextPresentation">
                bdhfskjil  hifhidh uifhiuh ihsidh hiduf hihsd hhui hi hfdsh ihdiu fhuidshui hdsuih fuihui dsfhuif hiush hi hi hi huih hsduiuh ezuis
            </div>

        </div>

    </div>
</template>
<script>
export default {
  name: 'PresentationGauche',
  props: {
    image: String
  }
}
</script>
<style scoped>
.PresentationGauche{
    background-color: aqua;
    position: relative;
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
}
.logo-partenaire{
    height: 30vh;
}
.TextPresentation{
}
.droite{
    width: 50%;
}
</style>
