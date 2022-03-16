<template>
    <div :id="id"  class="Presentation" :style="bg">
        <div class="survole">
            <div class="fantome"></div>
            <div class="gauche" :style="bg">
                <div class="nom-artiste" >{{artiste}}</div>
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
    left:0px;
    z-index: 9;
}
.fantome{
    position: relative;
    height: 100vh;
    width: 50%;
    z-index: 1;
}
.Presentation{
    /* background: var(--color); */
    background: white;
    position: relative;
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 1;
}
.image-artiste{
    position: absolute;
    right:0px;
    height: 100vh;
    opacity: .99;
    z-index: 9;
    border-left: 3px solid white;
}
.survole{
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 10;
    display: flex;
}
.gauche{
    position: relative;
    z-index:2;
    width: 50%;
    height: 100vh;
    /* background: var(--color); */
    background: white;
    border-right:2px white solid;
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
    right:50%;
    transition: 2s;
}
.survole:hover ~ .dessus{
    opacity: 0;
    transition: 2s;
}
@media screen and (max-width:1250px){

    .text-presentation{
        margin-left:4%;
        margin-right:4%;
        padding:10px;
        font-size: 14px;
    }
}
@media screen and (max-width:1000px){
    .image-artiste{
        left:-75vh;
        right:unset;
        position: absolute;
        height: 100vh;
        opacity: .99;
        z-index: 8;
        overflow: hidden;
        border-right: 3px solid white;

    }
    .survole:hover + .image-artiste{
        right:unset;
    }
    .survole ~ .dessus{
        opacity: 0;
        transition: 2s;
    } 
    .gauche{
        width: 80%;
    }
    .text-presentation{
        font-size: 13px;

    }
    .video{
        height:40vh;
    }
    .nom-artiste{
        font-size: 5vh;
    }
    .fantome{
        left: 0;
        width: 20%;
    }
}

@media screen and (max-width:550px){
    .video{
        height:30vh;
    }
    .text-presentation{
        font-size: 11px;
    }
}
@media screen and (max-width:350px){
    .video{
        height:15vh;
    }
}
</style>
