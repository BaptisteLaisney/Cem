<template>
    <div class="Information">
        <h3 class="Titre">{{this.Information.Titre}}</h3> <br>
        <div class="Contenu">{{this.Information.Contenu}}</div>

    </div>
</template>
<script>

export default {
    name: "Information",
    props:{
        Information: String
    }
}
</script>
<style scoped>
.Information{
    text-align: left;
    padding:5px;
    margin-left: 3%;
    background-color: rgb(224, 224, 224);
    box-shadow: 5px 5px 5px gray ;
    border-radius: 1px;
    margin-bottom: 20px;
}
.Contenu{
    padding-left:3%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}
</style>
