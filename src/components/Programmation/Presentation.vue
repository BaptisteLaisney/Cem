<template>
    <div :id="id"  class="Presentation" :style="bg">
        <div class="survole">
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
.Presentation{
    background: var(--color);
    position: relative;
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
    z-index: 9;
    border-right: 3px solid white;
}
.survole{
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 10;
}
.gauche{
    position: relative;
    z-index:2;
    width: 50%;
    height: 100vh;
    background: var(--color);
    border-right:2px white solid;
}
.video{
    z-index: 1;
    bottom: 5%;
    left:5%;
    position: absolute ;
    width:90%;
    height: 50vh;

}
.nom-artiste{
    font-size: 50px;
}
.text-presentation{
    margin:30px;
    font-size: 110%;
    padding: 20px;
}

.survole:hover + .image-artiste{
    left:50%;
    transition: 2s;
}
    @keyframes glisse{

        0%{
            transform: translateX(0);
        }

        100%{
            transform: translateX(1000px);
        }
    }
</style>
