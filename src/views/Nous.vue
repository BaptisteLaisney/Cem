<template>
    <div class="Nous">
        <h1>Qui sommes nous ?</h1>
        <PresentationGauche image="Actif.png" titre="Association ACT'Ifs" :contenu="getContenuActifs()"/>
        <div class="espace"></div>
        <PresentationDroite image="Cargo.jpg" titre="Le Cargö" :contenu="getContenuCargo()"/>
        <div class="espace"></div>
        <PresentationGauche image="ESAM.png" titre="L'asso étudiante de l'ESAM" :contenu="getContenuEsam()"/>
        <div class="espace"></div>
        <PresentationDroite image="TheMuses.png" titre="The Muses TC" :contenu="getContenuMuses()"/>
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
    getContenuActifs(){
      return "Composée de 16 étudiants issus de 2ème année de DUT, l’association étudiante ACT’Ifs anime la vie culturelle et sociale du campus 3 de l’Université de Caen Normandie. Une équipe motivée, dynamique, ambitieuse : voilà notre force de proposition ! Nos objectifs sont de nous assurer de l’inclusion de tous les élèves du campus 3, mais aussi de créer une offre d’animations culturelles et festives pour les étudiants de l’IUT de Caen. Située à Ifs, l’association s'efforce également de se rapprocher des formations universitaires des autres campus et de valoriser la formation proposée par l’IUT"
    },
    getContenuCargo(){
      return "Le Cargö, la scène de musiques actuelles de Caen, d’une capa­ci­té de 1300 places, offre sa scène depuis 2007 à des artistes en deve­nir, indé­pen­dants et nova­teurs qu’ils soient locaux ou inter­na­tio­naux ain­si qu’à des artistes recon­nus du grand public.<br><br>" +
      "Son pro­jet s’articule autour de plu­sieurs axes : <br><br>" +
      " - La dif­fu­sion de concerts. <br>" +
      " - L’accompagnement et sou­tien aux artistes de la région. <br>" +
      " - L’ac­tion cultu­relle et la sen­si­bi­li­sa­tion des publics aux musiques actuelles. <br>" +
      " - Le déve­lop­pe­ment des cultures émer­gentes et de la vie cultu­relle locale. <br>"

    },
    getContenuEsam(){
      return "L’asso de l’ésam est une association d’étudiants comprenant une centaine d’adhérents. L’asso est présente afin de proposer des papiers de qualité à prix coutant aux élèves ainsi que des fournitures d’art. De plus, elle met en place une multitude de petits événements et d’activités comme des vide-greniers, la mise en avant des travaux des étudiants (avec Impressions Multiples par exemple) ou encore la distribution de sacs solidaires afin de rendre la scolarité des étudiants plus agréable."
    },
    getContenuMuses(){
      return "L'association The Muses est une association culturelle pour les étudiants en DUT et BUT Techniques de Commercialisation à l'IUT Grand Ouest Normandie. Elle est composée de 4 étudiantes Lou-Ann, Aziliz, Enola et Esther ayant pour rôle de proposer des activités telles que du théâtre, du cinéma, des visites de musées... à un prix accessible à tous. La volonté de The Muses est de faire découvrir un maximum d'activités culturelles présentes au sein de la ville de Caen aux étudiants."
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
@media screen and (max-width:1000px){
  .Nous{
    
    justify-content: center;
  }
}
</style>
