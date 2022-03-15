<template>
    <div :id="id"  class="Presentation" :style="bg">
        <div class="survole">
            <div class="fantome"></div>
            <div class="gauche" :style="bg">
                <br><br>
                <div class="nom-artiste" >{{artiste}}</div>
                <br>
                <div class="text-presentation">
                    {{presentation_text}}
                </div>
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
    font-size: 50px;
}
.text-presentation{
    margin:30px;
    font-size: 110%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
}

.survole:hover + .image-artiste{
    right:50%;
    transition: 2s;
}
.survole:hover ~ .dessus{
    opacity: 0;
    transition: 2s;
}
@media screen and (max-width:1000px){

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
        margin-left:2px;
        margin-right:2px;
        font-size: 1.55vh;
        padding:10px;
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
@media screen and (max-width:500px){
    .video{
        height:30vh;
    }
}
@media screen and (max-width:350px){
    .video{
        height:20vh;
    }
}
</style>
