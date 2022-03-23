<template>
    <div class="Information">
        <h3 class="Titre">{{this.Information.Titre}}</h3> <br>
        <div class="Contenu" v-html="this.Information.Contenu" ></div>

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
    padding:20px;
    margin-left: 3%;
    background-color: rgb(243, 243, 243);
    box-shadow: 5px 5px 5px rgb(177, 177, 177) ;
    border-radius: 1px;
    margin-bottom: 20px;
}
.Contenu{
    padding-right: 3%;
    padding-left:3%;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color:black;
    font-size: 18px;
}
a{
    text-decoration: none;
    color:black
}
</style>
