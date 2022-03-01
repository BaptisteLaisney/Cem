<template>
    <div class="banniere">
        <div class="slides">
            <div class = "slide"><img src="../../assets/images/visuel1.png" alt=""></div>
            <div class = "slide"><img src="../../assets/images/visuel2.png" alt=""></div>
            <div class = "slide"><img src="../../assets/images/visuel3.png" alt=""></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Banniere'
}
</script>
<style scoped>
    /* .banniere{
        background-color: aqua;
        width:100%;
        height: 50vh;
        border : solid black;

    } */
.slide{
    float: left;
    width: 100vh;
}
.slides{

    width: 10000px;
    animation : glisse 20s infinite;
}
.banniere{
    width: 100%;
    overflow: hidden;
    margin : auto;
    height :70vh;
}
@keyframes glisse{

    0%{
        transform: translateX(0);
    }

    50%{
        transform: translateX(-1000px);
    }
    0%{
        transform: translateX(0);
    }
}
</style>
