<template>
    <footer>
        <div class="text">Suivez nous !</div>
        <div class="Conteneur-Reseaux">
            <img src="@/assets/images/logos/Facebook.png" alt="Logo Facebook" class="item-sociaux">
            <img src="@/assets/images/logos/Instagram.png" alt="Logo Instagram" class="item-sociaux">
            <img src="@/assets/images/logos/Twitter.jpg" alt="Logo Twitter" class="item-sociaux">
        </div>
        <br><br>
        <div class="Conteneur-Infos">
            <div class="item-info">Partenaires</div> |
            <div class="item-info">Espace Presse</div> |
            <div class="item-info">Mentions légales</div> |
            <div class="item-info">Contact</div>
        </div>
    </footer>
</template>
<style scoped>
footer{
    background-color: rgb(24, 20, 20) ;
    height: 150px;
    color:white;
    margin-top:50px;
    padding: 30px;
}
.text{
    font-size: 25px;
}
.Conteneur-Reseaux{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.item-sociaux{
    margin:10px;
    height: 45px;
    border-radius:100px;
    cursor: pointer;

}
.Conteneur-Infos{
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}
.item-info:hover{
    text-decoration: underline;
}
</style>
