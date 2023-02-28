<template>
    <div class="banniere">
        <div class = "slide"><img class="image" src="../../assets/images/charte-graphique/Banniere2023.png" alt=""></div>
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
.banniere{
    width: 100%;
    overflow: hidden;
}
.image{
    width: 100%;
}
@keyframes glisse{

    0%{
        transform: translateX(0);
    }

    25%{
        transform: translateX(10%);
    }
    50%{
        transform: translateX(0);
    }
    75%{
        transform: translateX(-10%);
    }
    0%{
        transform: translateX(0);
    }
}
</style>
