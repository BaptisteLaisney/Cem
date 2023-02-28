<template>
    <div :id="id" class="Artiste">
        <img class="image-artiste" v-bind:src="require('@/assets/images/artistes/' + image)"/>
        <h2 class="artiste-nom">{{artiste}} <br> {{horaires}}</h2>

    </div>
</template>
<style scoped>
.Artiste{
    width: 250px;
    height: 250px;
    margin:10px;
    overflow: hidden;
    position: relative;
    margin: 10px;
}
.image-artiste{
    height:100%;
    position: absolute;
    right:0px;
}
.image-artiste:hover{
    height:110%;
    transition:0.5s;
    cursor: pointer;
    filter: blur(5px);
}
.artiste-nom{
    top:10vh;
    font-size: 30px;
    text-shadow: 0 0 1px rgb(0, 0, 0);
    
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
    image: String,
    id: String,
    horaires: String
  }
}

</script>
