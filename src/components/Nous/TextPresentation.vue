<template>
    <div class="TextPresentation">
        <div class="Titre">
            {{titre}}
        </div>
        <br>
        <div class="Text">
            bdhfskjil  hifhidh uifhiuh ihsidh hiduf hihsd hhui hi hfdsh ihdiu fhuidshui hdsuih fuihui dsfhuif hiush hi hi hi huih hsduiuh ezuis
            bdhfskjil  hifhidh uifhiuh ihsidh hiduf hihsd hhui hi hfdsh ihdiu fhuidshui hdsuih fuihui dsfhuif hiush hi hi hi huih hsduiuh ezuis
            bdhfskjil  hifhidh uifhiuh ihsidh hiduf hihsd hhui hi hfdsh ihdiu fhuidshui hdsuih <mark>fuihui dsfhuif hiush </mark> hi hi hi huih hsduiuh ezuis
        </div>
        <div class="caroussel">
            <div class="slides">
                <div class = "slide"><img class="image" src="../../assets/images/visuel1.png" alt=""></div>
                <div class = "slide"><img class="image" src="../../assets/images/visuel2.png" alt=""></div>
                <div class = "slide"><img class="image" src="../../assets/images/visuel3.png" alt=""></div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
  name: 'TextPresentation',
  props: {
    titre: String
  }
}
</script>

<style scoped>
.Text{
    height: 15vh;
}
.droite{
    width: 50%;
    text-align: left;
}
.Titre{
    font-size: 30px;
}
.caroussel{
    height: 8vh;
    width: auto;
    overflow: hidden;
    margin : auto;
}
.slide{
    float: left;
    width: 100vh;
}
.slides{

    width: 1000000px;
    /* animation : glisse 10s infinite; */
}
.image{
}
mark{
    background-color:#FF7F50;
}
.TextPresentation{
    width: 50%;
    text-align: left;
}
@keyframes glisse{

    0%{
        transform: translateX(0);
    }

    100%{
        transform: translateX(-1000px);
    }
}
</style>
