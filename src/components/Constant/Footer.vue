<template>
    <footer>
        <img class ="logoOndees" src="@/assets/images/charte-graphique/logo_blanc.png" alt="Logo Ondées">
        <div class="text">Suivez-nous !</div>
        <div class="Conteneur-Reseaux">
            <a href="https://www.facebook.com/lesondees"><img src="@/assets/images/logos/facebook.png" alt="Logo Facebook" class="item-sociaux" abou></a>
            <a href="https://www.instagram.com/lesondees"><img src="@/assets/images/logos/instagram.png" alt="Logo Instagram" class="item-sociaux"></a>
        </div>
        <br><br>
        <div class="Conteneur-Infos">
            <router-link class = "item-info" to="/Partenaires">Partenaires</router-link> | 
            <router-link class = "item-info" to="/Presse">Espace Presse</router-link> | 
            <router-link class = "item-info" to="/Mentions">Mentions légales</router-link> | 
            <a class="item-info" href="https://www.instagram.com/lesondees">Contact</a>
        </div>
    </footer>
</template>
<style scoped>
footer{
    background-color: rgb(24, 20, 20) ;
    color:white;
    padding-bottom: 30px;
    padding-top: 30px;
    position: absolute;
    width: 100%;
    margin-top:150px ;
}
.text{
    font-size: 25px;
}
.Conteneur-Reseaux{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
a{
    color: white;
    text-decoration: none;
}
.item-sociaux{
    margin:10px;
    height: 40px;
    border-radius:100px;
    cursor: pointer;
    color: white;

}
.Conteneur-Infos{
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}
.item-info:hover{
    text-decoration: underline;
}
.logoOndees{
    height: 150px;
}
</style>
