<template>
    <div class="Nous">
        <h1>Qui sommes nous ?</h1>

        <div class="presentation">
          Après deux ans de crise sanitaire, l’association ACT’Ifs Campus 3 s’associe à la salle de concerts caennaise Le Cargö pour proposer un nouveau rendez-vous culturel et musical : 
Les Ondées. <br><br>

Après le succès de la première édition, 3 membres fondateur•ices des Ondées initient la création d’une nouvelle association étudiante ayant pour seul objet l’organisation de l’événement. 
<br><br><br>
        </div>
        
        <PresentationGauche image="logo.png" titre="Association Les Ondées" :contenu="getContenueOndees()"/>
        <div class="espace"></div>
        <PresentationDroite image="Cargo.jpg" titre="Le Cargö" :contenu="getContenuCargo()"/>
        
        <div class="presentation">
        <h2>Un projet inter-associatif</h2>
          Car  Les Ondées participent aussi à rapprocher les associations étudiantes, trois associations co-portent le projet à nos côtés : <br>

 <ul>
  <li>ACT'Ifs Campus 3</li>
 <li>Asso des étudiant·es de l’ésam</li>
 <li>Fédération Campus Basse-Normandie</li>
 </ul>
Programmation musicale, stratégie financière, stratégie de communication, conventions… toutes les grandes décisions concernant l'événement sont étudiées avec ces associations étudiantes en comité de pilotage. <br>
Ces trois associations sont des partenaires privilégiés dans l’élaboration de notre projet et nous sommes reconnaissant•es de la confiance qu’elles portent en notre projet.
        <div class="espace"></div>
        <PresentationGauche image="Actif.png" titre="Act’ifs Campus 3 :" :contenu="getContenuActifs()"/>
        </div>
        <div class="espace"></div>
        <PresentationDroite image="ESAM.png" titre="L'Asso des étudiant·es de l’ésam" :contenu="getContenuEsam()"/>
        <div class="espace"></div>
        <PresentationGauche image="FCBN.png" titre="FCBN" :contenu="getContenuFcbn()"/>

    </div>

</template>
<script>
import PresentationGauche from '@/components/Nous/PresentationGauche'
import PresentationDroite from '@/components/Nous/PresentationDroite'

export default {
  name: 'Nous',
  components: {
    PresentationGauche,
    PresentationDroite
  },
  methods:{

    getContenueOndees(){
      return "Fondée en 2022, l’association Les Ondées est créée pour faciliter l’organisation de l’événement Les Ondées. " +

"Association étudiante, 28 personnes y sont membres, tous•tes étant étudiant•e normand ou l’ayant été dans les trois dernières années. " +

"Des profils d’horizons très divers composent notre association : étudiant•es en Information-Communication, en Management des entreprises,  en licences Arts du spectacle, en design graphique, en informatique… Mais aussi des étudiant•es en études à l’étranger ou des jeunes en service civique ! "},
    getContenuActifs(){
      return "Né au sein d’ACT’Ifs Campus 3, le projet Les Ondées est de nouveau soutenu par l’association. La majorité des membres de la nouvelle association sont issus de l’IUT du Campus 3 et le projet y reste identitairement très attaché. C’est pourquoi cette collaboration paraît évidente afin de faire vivre une nouvelle fois le projet."
    },
    getContenuCargo(){
      return "Le Cargö, la scène de musiques actuelles de Caen, d’une capa­ci­té de 1300 places, offre sa scène depuis 2007 à des artistes en deve­nir, indé­pen­dant‧es et nova­teur‧rices qu’ils et elles soient locaux‧ales ou inter­na­tio­naux‧ales ain­si qu’à des artistes recon­nu‧es du grand public.<br><br>" +
      "Son pro­jet s’articule autour de plu­sieurs axes : <br><br>" +
      " - La dif­fu­sion de concerts. <br>" +
      " - L’accompagnement et sou­tien aux artistes de la région. <br>" +
      " - L’ac­tion cultu­relle et la sen­si­bi­li­sa­tion des publics aux musiques actuelles. <br>" +
      " - Le déve­lop­pe­ment des cultures émer­gentes et de la vie cultu­relle locale. <br>"

    },
    getContenuEsam(){
      return "L’association étudiante de l’ésam est l’association co-porteuse historique du projet. À l’origine notamment de l’identité graphique de l’événement, c'est grâce à elle que le projet a laissé en mémoire des souvenirs et a permis une communication très remarquée, elle a grandement aidé à la réussite de la première édition. Collaborer avec des étudiant‧es en art est une vraie richesse pour Les Ondées : nous les remercions pour leur soutien."
    },
    getContenuFcbn(){
      return "La Fédération Campus Basse-Normandie (FCBN) est une fédération étudiante représentant une vingtaine d’associations étudiantes bas-normandes. La fédération porte de nombreux projets : le Mois de la culture, temps fort de la vie culturelle des étudiant·es de Caen ou encore la semaine Sors de ta piaule pour lutter contre l’isolement social. La FCBN gère également l’AGORAé, épicerie sociale et solidaire bénéficiant à des étudiant·es en situation de précarité. La FCBN s’engage pleinement dans le projet des Ondées pour animer le village culturel et pour permettre aux bénéficiaires de l’AGORAé de profiter de l’événement."
    }

  }
}
</script>
<style scoped>
.Nous{
    display: flex;
    flex-wrap: wrap;
}
.espace{
    height:100px;
    width: 100%;
}
.presentation{
  width:90%;
  margin:auto;
  text-align: justify;
  margin-top:60px;
  font-family: 'SharpGrotesk-Bold20', sans-serif;
  color:black;

  font-size: 20px;
}

@media screen and (max-width:1000px){
  .Nous{
    
    justify-content: center;
  }
}
</style>
