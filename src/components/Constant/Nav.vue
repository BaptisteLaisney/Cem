<template>
    <div class="menu">
        <div class="item-contain invisible">
            <div class="item-menu">
                <router-link class="invisible button-nav" to="/Programmation">Programmation</router-link>
                <div class="barre"></div>
            </div>
            <div class="item-menu">
                <router-link class="invisible button-nav" to="/Village">Le village culturel</router-link>
                <div class="barre"></div>
            </div>
        </div>

        <router-link to="/"><img class="logo-ondee" src="@/assets/images/charte-graphique/logo2023.png" alt=""></router-link>
        <div class="item-contain">
            <div>
                <div id="dp">
                    <div class="item-menu button-drop button-nav">À propos</div>
                    <div class="barre"></div>
                </div>
                <div id="dropdown-content">
                    <router-link class = "item-menu item-drop-down" to="/Partenaires">Nos partenaires</router-link>
                    <router-link class = "item-menu item-drop-down" to="/Nous">Qui sommes-nous ?</router-link>
                    <router-link class = "item-menu item-drop-down" to="/Infos">Infos pratiques</router-link>
                    <router-link class = "item-menu item-drop-down" to="/Programmation">Programmation</router-link>
                    <router-link class = "item-menu item-drop-down" to="/Village">Le village culturel</router-link>
                </div>
            </div>
            <div class="item-menu" >
                <router-link id="nav-billetterie" to="/Billetterie" class="item-menu">Billetterie</router-link>
                <div class="barre"></div>
            </div>
        </div>
        

    </div>
</template>
<script>
export default {
  name: 'Menu',
  mounted() {
      let isclicked = false
      document.getElementById("dp").addEventListener("click" , function(event){
          if(isclicked){
              document.getElementById("dropdown-content").style.visibility = "hidden"
              isclicked = false
          }
          else{
            document.getElementById("dropdown-content").style.visibility ="inherit"
            isclicked = true
          }
         
          
      })
      document.addEventListener('click', function(event) {
          if (!event.target.matches('.button-nav')) {
              document.getElementById("dropdown-content").style.visibility = "hidden"
              isclicked = false
          }
      });

  }
  
}
</script>
<style scoped>

a,.item-menu{
    text-decoration: none;
    color: #e65f20;
    font-family: 'SharpGrotesk-Bold20';
    font-size: 30px;
}
.menu{
    margin:solid black;
    display: flex;
    text-align: center;
    justify-content: space-between;
    padding-bottom: 20px;
    padding-top:20px;
    /* background-color: #dfd9ca69 ; */
}
#dp{
    position: relative;
}
.item-menu{
    cursor: pointer;
    padding:10px;
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
    background-color: #e65f20 ;
}
#dropdown-content{
    display: flex;
    flex-direction: column;
    position: absolute;
    height:150px;
    overflow: hidden;
    visibility: hidden;
    z-index: 20;
    opacity: .99;
    
    border-radius: 0px 0px 5px 5px;
    background: whitesmoke;
}
#dp:hover + #dropdown-content{
    visibility: inherit;
}
#dropdown-content:hover {
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
    font-size: 25px;
}
.button-drop{
    margin-bottom: 0px;
}
#nav-billetterie{
    background-color: #e65f20 ;
    color:white;
    margin:10px;
    padding:20px;
    border-radius: 10px;
    border:#e65f20 solid;
}
#nav-billetterie:hover{
    color: #e65f20;
    background: white;

}
@media screen and (max-width:1050px){
    .menu{
        justify-content: center;
        flex-direction: column;
        
    }
    .item-contain{
        width: 100%;
    }
    .item-menu, a{
        font-size:30px;
    }
    #dropdown-content{
        height:auto;
        flex-direction: column-reverse;
    }
    .invisible{
        display: none;
    }
    .item-drop-down{
        font-size: 20px;
        padding: 5px; 
    }


}
</style>
