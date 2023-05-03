<template>
    <div class="Animation">
        <div class="title">
          <div class="horaire">{{horaire}}</div>&nbsp&nbsp
          <div class="titreEtAnimateur">
            <div class="">{{nom}}</div>
            <div class="horaire">{{animateur}}</div>
          </div>
        </div>
        
        <div class="presentation">
          <div class="presentationText" v-html="presentation"></div>
          <div class="image">
            <img v-bind:src="require('@/assets/images/Village/'+image)" alt="image">
          </div>
        </div>

        <br>
    </div>
</template>
<script>
export default {
    name:"Animation",
    props:{
        nom : String,
        presentation : String,
        image : String,
        animateur : String,
        horaire : String,
    }
}
</script>
<style scoped>
.presentationText{
  width:60%;
  height: auto;
  margin: auto;
 
  text-align: justify;
  padding-left:20px ;
  font-family: 'SharpGrotesk-Bold20';
  color:black;

  font-size: 20px;
}
.presentation{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.presentation img{

  width:60%;
  max-height: auto;

  border:none;
}
.image{
  width: 30%;
}

h2{
    width:90%;
    max-height: 70px;
    margin:auto;
    text-align: justify;
}
.horaire{

    color: #e65f20;

}
.titreEtAnimateur{
  display: flex;
  align-items: flex-start;
 
  flex-direction: column;
}
.title{
    font-family: 'SharpGrotesk-SemiBold25';
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 20px;
    width:90%;
    margin:auto;
    font-size: 30px;
    font-weight: bold;
    color: #3b1c7a ;
}
@media screen and (max-width: 1000px) {
  .presentationText{
    font-size: 15px;
  }
}

</style>