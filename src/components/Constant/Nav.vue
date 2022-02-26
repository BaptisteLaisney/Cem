<template>
    <div class="menu">
        <div class="item-contain">
            <div class="item-menu">
                <router-link class="button-nav" to="/Programmation">Programmation</router-link>
                <div class="barre"></div>
            </div>
            <div class="item-menu">
                <router-link class="button-nav" to="/Village">Le village culturel</router-link>
                <div class="barre"></div>
            </div>
        </div>

        <router-link to="/"><img class="logo-ondee" src="@/assets/images/charte-graphique/logo.png" alt=""></router-link>
        <div class="item-contain">
            <div>
                <div class="dp">
                    <div class="item-menu button-drop button-nav">À propos</div>
                    <div class="barre"></div>
                </div>
                <div class="dropdown-content">
                    <router-link class = "item-menu item-drop-down" to="/Partenaires">Nos partenaires</router-link>
                    <router-link class = "item-menu item-drop-down" to="/Projet">Le projet</router-link>
                    <router-link class = "item-menu item-drop-down" to="/Nous">Qui sommes nous ?</router-link>
                    <router-link class = "item-menu item-drop-down" to="/Infos">Infos pratiques</router-link>
                </div>
            </div>
            <div class="item-menu" >
                <router-link id="nav-billetterie" to="/Billeterie">Billetterie</router-link>
                <div class="barre"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Menu'
}
</script>
<style>
a,.item-menu{
    text-decoration: none;
    color: #FF7F50 ;
}
.menu{
    margin:solid black;
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding-bottom: 20px;
    margin-top:20px
    /* background-color: #dfd9ca69 ; */
}
.dp{
    position: relative;
}
.item-menu{
    cursor: pointer;
    padding:10px;
    font-size: 30px;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    justify-content: center;
}
/* .item-drop-down{
    background: white;
} */
.barre{
    height: 3px;
    width: 90%;
    bottom:0px;
    position: absolute;
    bottom:0px;
}
.button-nav:hover + .barre{
    background-color: #FF7F50 ;
}
.dropdown-content{
    display: flex;
    flex-direction: column;
    position: absolute;

    visibility: hidden;
    z-index: 20;
    opacity: .99;
    border-radius: 5px;
    background: white;
}
.dp:hover + .dropdown-content{
    visibility: inherit;
}
.dropdown-content:hover {
    visibility: inherit;
}
.item-contain{
    display: flex;
    width: 35%;
    justify-content: space-evenly;
    position: relative;
}
.logo-ondee{
    height:100px
}
.item-drop-down{
    margin:0px;
}
.button-drop{
    margin-bottom: 0px;
}
#nav-billetterie{
    background-color: #FF7F50 ;
    color:white;
    margin:10px;
    padding:20px;
    border-radius: 10px;
    border:#FF7F50 solid;
}
#nav-billetterie:hover{
    color: #FF7F50;
    background: white;

}
</style>
