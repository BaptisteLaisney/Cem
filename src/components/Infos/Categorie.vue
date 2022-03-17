<template>
    <div class="Categorie">
        <h2 class="nomCategorie">{{nomCategorie}}</h2>
        <Information class="Information" v-for="item in this.infos" :key="item.id" :Information = item />    
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
        nomCategorie : String,
        infos : String
    }
}
</script>
<style scoped>
.Categorie{

    width: 80%;
    margin:auto;
    display: flex;
    flex-wrap: wrap;
}
.nomCategorie{
    width:100%;
    text-align: left;
    padding: 5px;
}
.Information{
    width: 100%;
}
</style>