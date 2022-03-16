<template>
    <div class="Information">
        <div class="Titre">{{Titre}}</div>
        <div class="Titre">{{Contenu}}</div>
    </div>
</template>
<script>

export default {
    name: "Information",
    props:{
        Titre: String,
        Contenu: String
    }
}
</script>
