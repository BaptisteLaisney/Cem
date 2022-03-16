<template>
    <div class="Categorie">
        <div class="nomCategorie">{{nomCategorie}}</div>
        <Information Titre="Première Information" Contenu="C'est le contenu"/>
    </div>
</template>
<script>
import Information from '@/components/Infos/Information'
export default {
    name: 'Categorie',
    components: {
        Information
    },
    props:{
        nomCategorie : String
    }
}
</script>
