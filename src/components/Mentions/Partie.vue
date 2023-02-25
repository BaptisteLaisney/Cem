<template>
<div class="Partie">

    <h3>{{Titre}}</h3>
    <div v-html="Contenu" class="content"></div>
</div>

</template>

<script>
export default {
    name:"Partie",
    props:{
        Contenu: String,
        Titre: String
    }
}
</script>
<style scoped>
.Partie{
    text-align: left;
    
}
h3{
    font-size: 35px;
}
.content{
    font-size: 25px;
    text-align: justify;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: bold;
}
</style>