<template>
    <div class="Animation">
        <h2>{{nom}}</h2>
        <br>
        <div class="presentation" v-html="presentation"></div>
        <br>
    </div>
</template>
<script>
export default {
    name:"Animation",
    props:{
        nom : String,
        presentation : String
    }
}
</script>
<style scoped>
.presentation{
  width:90%;
  margin:auto;
  text-align: justify;
  padding-left:20px ;
  font-family: 'Montserrat', sans-serif;
  color:black;
  font-weight: bold;
  font-size: 20px;
}
h2{
    width:90%;
    margin:auto;
    text-align: justify;
}
</style>