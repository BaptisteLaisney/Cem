<template>
    <div class="Artiste">
        <img class="image-artiste" v-bind:src="require('@/assets/images/artistes/' + image)"/>
        <h2 class="artiste-nom">{{artiste}}</h2>
    </div>
</template>
<style scoped>
.Artiste{
    width: 30%;
    height: 60vh;
    margin:10px;
    overflow: hidden;
    position: relative;
    margin: 10px;;
}
.image-artiste{
    width:100%;
    position: absolute;
    left:0px;
}
.image-artiste:hover{
    width:110%;
    transition:0.5s;
    cursor: pointer;
    filter: blur(5px);
}
.artiste-nom{
    top:125px;
    font-size: 50px;
    opacity: .99;
    color: white;
    visibility: hidden;
    pointer-events: none;
    position:relative;

}
.image-artiste:hover + .artiste-nom{
    visibility: unset;
    transition: 0.5s;

}

</style>

<script>

export default {
  name: 'Artiste',
  props: {
    artiste: String,
    image: String
  }
}

</script>
