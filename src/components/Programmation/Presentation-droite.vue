<template>
    <div :id="id"  class="Presentation" :style="bg">
        <div class="survole">
            <div class="gauche" :style="bg">
                <div class="nom-artiste" > {{artiste}} </div>
                <div class="text-presentation" v-html="presentation_text"></div>
                <iframe class="video" :src="link_yt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
        
        <img class="image-artiste" v-bind:src="require('@/assets/images/artistes/' + image)"/>
        <div class="dessus"></div>
        


    </div>
</template>
<script>
export default {
  name: 'Presentation',
  props: {
    image: String,
    artiste: String,
    presentation_text: String,
    link_yt: String,
    color: String,
    id: String
  },
  computed: {
    bg () {
      return {
        /* variables you want to pass to css */
        '--color': this.color
      }
    }
  }
}
</script>
<style scoped>
.dessus{
    height: 100vh;
    width: 50%;
    background-color:white ;
    position: absolute;
    right:0px;
    z-index: 9;
}
.Presentation{
    /* background: var(--color); */
    background: white;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.image-artiste{
    position: absolute;
    left:0px;
    height: 100vh;
    opacity: .99;
    z-index: 8;
    border-right: 3px solid white;
}
.survole{
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 10;
    display: flex;
}
.gauche{
    position: absolute;
    z-index:2;
    width: 50%;
    height: 100vh;
    /* background: var(--color); */
    background: white;
}
.video{
    z-index: 1;
    width:100%;
    height: 40vh;
    position: absolute;
    bottom: 0px;
    left:0vh;

}
.nom-artiste{
    font-size: 60px;
    font-family: 'Bebas Neue', cursive;
    color:#284e99;
}
.text-presentation{
    margin:30px;
    margin-top:0px;
    font-size: 2vh;
    padding: 20px;
    padding-top:5px ;
    text-align: justify;
    background-color: white;
    border-radius: 5px;
    color:black;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

.survole:hover + .image-artiste{
    left:50%;
    transition: 2s;
} 
.survole:hover ~ .dessus{
    opacity: 0;
    transition: 2s;
}
br{
    height: 5px;
}

.text-presentation >>> mark, mark{
    background-color:#FF7F50;
}
@media screen and (max-width:1250px){

    .text-presentation{
        margin-left:4%;
        margin-right:4%;
        padding:10px;
        font-size: 14px;
    }
}
@media screen and (max-width:1100px){
    .image-artiste{
        right:-50vh;
        left:unset;
        position: absolute;
        height: 100vh;
        opacity: .99;
        z-index: 8;
        overflow: hidden;
        border-right: 3px solid white;

    }
    .video{
        visibility: hidden;
    }
    .survole:hover + .image-artiste{
        left:unset;
    }
    .survole ~ .dessus{
        opacity: 0;
        transition: 2s;
    } 
    .gauche{
        width: 80%;
    }
    .text-presentation{
        font-size: 20px;
    }
    .video{
        height:40vh;
    }
    .nom-artiste{
        font-size: 5vh;
    }
}
@media screen and (max-width:700px){
    .video{
        height:30vh;
    }
    .text-presentation{
        font-size: 16px;
    }
}
@media screen and (max-width:450px){
    .text-presentation{
        font-size: 14px;
    }
}


</style>
