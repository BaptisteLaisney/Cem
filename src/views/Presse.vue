<template>
    <div class="Presse">
        <h1>Espace Presse</h1>
        <div class="contacts">

            <div>Les Ondées <br> Secrétariat <br><br> contact.lesondees@gmail.com</div>
            <div>Matthias Fichet <br> Responsable de projet  <br><br>matthias.fichet@icloud.com</div>
            <div>Léna Goguillon <br> Chargée des relations presse <br><br> lenagog@icloud.com</div>
        </div>




        
            
        <!-- <a class="button" href="/presse/DP.pdf">Dossier presse</a>
                <p>Pour obtenir vos acréditations veuillez contacter Marie Mahe (Chargée de relations presses) <br>
            07 82 20 91 06 <br>
            marie.mahe02@gmail.com
        </p> -->
        <!-- <br>
        -->
        <br>

        <h2>Photos artistes</h2> 
        <br>
        <div class="Visuels">
            <a href="/presse/BBJacques.png"><img src="/presse/BBJacques.png" alt=""></a>
            <a href="/presse/nelick.jpg"><img src="/presse/nelick.jpg" alt=""></a>
            <a href="/presse/BRO.jpg"><img src="/presse/BRO.jpg" alt=""></a>
            <a href="/presse/maddy.jpg"><img src="/presse/maddy.jpg" alt=""></a>
           
            
            


        </div> 

        <h2>Doosier de presse</h2> 
        <br>

        <a href="/presse/DP_Les_Ondées.pdf" class="button" >Dossier de presse</a>
        <a href="/presse/CP1.pdf" class="button" >Communiqué de presse 1</a>
<br><br>



        <h2>Visuels 2023</h2> 
        <br>
        <a href="/presse/Affiche.pdf" class="button" >Affiche</a>
        <div class="Visuels">
            <a href="/presse/visuel_1_1_2023.png"><img src="/presse/visuel_1_1_2023.png" alt=""></a>
            <a href="/presse/visuel_logo_1_1_2023_.png"><img src="/presse/visuel_logo_1_1_2023_.png" alt=""></a>
            <a href="/presse/logo.png"><img src="/presse/logo.png" alt=""></a>
            <a href="/presse/visuel_rectangle_2023.png"><img src="/presse/visuel_rectangle_2023.png" alt=""></a>
            

        </div>

        <h2>Photos des ondées 2022</h2> 
        <div class="Visuels">
            <a href="/presse/Equipe.JPG"><img src="/presse/Equipe.JPG" alt=""></a>
            <a href="/presse/Benevole.JPG"><img src="/presse/Benevole.JPG" alt=""></a>
            <a href="/presse/photo-call.JPG"><img src="/presse/photo-call.JPG" alt=""></a>
            <a href="/presse/Merch_label_seven.jpeg"><img src="/presse/Merch_label_seven.jpeg" alt=""></a>

        </div>
    </div>
</template>
<script>

</script>
<style scoped>

.contacts{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
}
.contacts div{

    width: 30%;
    margin: 20px;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: #3b1c7a ;
    border: 3px solid #3b1c7a ;
    border-radius: 7px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    transition : .2s ease-out;
}
.button{
    text-decoration: none;
    color:#3b1c7a ;
    border : 3px solid #3b1c7a ;;
    padding : 10px;
    margin: 50px;
    border-radius: 7px;
    font-weight: bold;

}
a{
    margin: 10px;
}
.Presse{
    margin: auto;
    width: 80%;
}
.button:hover{
    background-color: #3b1c7a ;
    transition : .2s ease-out;
    color: white;
}
img{
    width: 100%;
}
td{
    padding: 20px;
    font-size: 20px;

    text-align: center;
   
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