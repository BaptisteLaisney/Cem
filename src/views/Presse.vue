<template>
    <div class="Presse">
        <h1>Espace Presse</h1>
        
            
        <!-- <a class="button" href="/presse/DP.pdf">Dossier presse</a>
                <p>Pour obtenir vos acréditations veuillez contacter Marie Mahe (Chargée de relations presses) <br>
            07 82 20 91 06 <br>
            marie.mahe02@gmail.com
        </p> -->
        <br>
        <h1>Visuels de l'évènement</h1>

        <a href="/presse/Affiche.pdf" class="button" >Affiche</a>
        <div class="Visuels">
            <a href="/presse/a2h.png"><img src="/presse/a2h.png" alt=""></a>
            <a href="/presse/jyeuhair.png"><img src="/presse/jyeuhair.png" alt=""></a>
            <a href="/presse/SPIDERZED.png"><img src="/presse/SPIDERZED.png" alt=""></a>
            <a href="/presse/lesonvert.png"><img src="/presse/lesonvert.png" alt=""></a>
            <a href="/presse/Affiche_carree.png"><img src="/presse/Affiche_carree.png" alt=""></a>
            <a href="/presse/Affiche_horizontale.png"><img src="/presse/Affiche_horizontale.png" alt=""></a>
            <a href="/presse/logo.png"><img src="/presse/logo.png" alt=""></a>
            
            


        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.button{
    text-decoration: none;
    color:#3b1c7a ;
    border : 3px solid #3b1c7a ;;
    padding : 10px;
    margin: 50px;
    border-radius: 7px;
    font-weight: bold;

}
.button:hover{
    background-color: #3b1c7a ;
    transition : .2s ease-out;
    color: white;
}
img{
    width: 100%;
}
.Visuels{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
        justify-content: center;
    margin-top: 50px;
}
a{
    text-decoration: none;
    position: relative;
    width: 20%;
}
h1{

    margin-top: 50px;
}
</style>