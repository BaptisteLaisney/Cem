<template>
    <div class="TextPresentation">
        <div class="Titre">
            {{titre}}
        </div>
        <br>
        <div class="Text" v-html="this.contenu">
        </div>

    </div>
</template>
<script>
export default {
  name: 'TextPresentation',
  props: {
    titre: String,
    contenu: String
  }
}
</script>

<style scoped>
.Text{
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 2vh;
    text-align: justify;
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
    opacity: 1%;
}
.Text:hover + .caroussel{
    opacity: 100% ;
    transition: 1s;
}
.slide{
    float: left;
    width: 100vh;
}
.slides{

    width: 1000000px;
    /* animation : glisse 10s infinite; */
}
mark{
    background-color:#FF7F50;
}
.TextPresentation{
    width: 50%;
    text-align: left;
}
</style>
