<template>
    <div class = "Programmation">
        <h1>Programmation</h1>
        <Artistes/>
        <br><br>
        <Presentationd id="BBJacques_pres" color = "rgb(162,163,185)" link_yt ="https://www.youtube.com/embed/iIHdTMHWAic" artiste="B.B. Jacques" image="BBJacques.png" :presentation_text="getTextBBJ()" insta="https://www.instagram.com/blackbirdjacques/" face="https://www.facebook.com/blackbirdjacques/" />
        <Presentationg id="BRO_pres" color = "rgb(207,54,48)" link_yt ="https://www.youtube.com/embed/VV9qyx_v9kc" artiste="BRÖ" image="Bro.jpg" :presentation_text="getTextBro()" insta="https://www.instagram.com/bro_brolli/" face="https://www.facebook.com/broducroissant/" />
        <Presentationd id="Nelick_pres" color = "rgb(207,54,48)" link_yt ="https://www.youtube.com/embed/Bb_L1TbRRp4" artiste="nelick" image="nelick.jpg" :presentation_text="getTextNelick()" insta="https://www.instagram.com/kiwibunnylove2022/" face="https://www.facebook.com/nelick2022" />
        <Presentationg id="MADDY_pres" color = "rgb(219,204,181)" link_yt ="https://www.youtube.com/embed/8piuG5024Vg" artiste="Maddy Street" image="maddy.jpg" :presentation_text="getTextMaddy()" insta="https://www.instagram.com/maddyftchords/"  />
        
       
    </div>
</template>
<script>
import Artistes from '@/components/Accueil/Artistes.vue'
import Presentationd from '@/components/Programmation/Presentation-droite.vue'
import Presentationg from '@/components/Programmation/Presentation-gauche.vue'
export default {
  name: 'Programmation',
  components: {
    Artistes,
    Presentationd,
    Presentationg
  },
  methods: {
    getTextBBJ(){
      return "Artiste habité, inconventionnel et hyperproductif, B.B. Jacques est la révélation rap de 2022. Une année qui l’a vu exploser grâce à l’album Poésie d’une Pulsion et à son passage sur Netflix. Pour fêter cette montée éclair, le rappeur parisien fêtera le 3 mars 2023 son nouveau statut, avec sa première grande date dans la capitale, à la Cigale et en tournée dans toute la France."
    },
    getTextBro(){
      return "Qu’il s’agisse de son discours ou de sa musicalité, Brö est une artiste de son temps, avec comme maître-mot la fusion. Issue d’un mélange unique, à la fois Algérienne, Italienne, Normande, Suisse, les étiquettes n’ont plus grand sens à ses yeux. L’humain avant tout, tel est son crédo, qui correspond parfaitement à notre époque marquée par la fluidité.<br><br>" +
      "Avec ses musiciens, Elie et Jules, tous deux multi-instrumentistes dotés d’une riche culture musicale, Brö explore tous les genres sans se poser de questions. Pour eux, la musique est un art et l’aimer c’est ne pas la cloisonner. Ils ont côtoyé, écouté tellement d’artistes, que leurs productions portent les traits de la fusion des styles"},
    getTextMaddy(){
      return "Maddy Street c'est la.e plus britannique des français.e.s. Du haut de ses 24 ans, la.e jeune chantereuse et vidéaste vous entraîne dans un univers infinement Queer et Pop. Entre légèreté pétillante et gravité poétique, ses sons mélangent le français et l'anglais, le romantique et l'engagé, le sombre et le coloré. "
    },
    getTextNelick(){
      return "À seulement 25 ans, nelick est déjà identifié dans le rap français depuis de nombreuses années. Après des débuts à freestyler seul dans son coin, un groupe éphémère avec le rappeur LordEsperanza, plusieurs mixtapes et EP en solo qui lui valent une communauté de fans soudés (les «kiwis»); le jeune artiste de Champigny-sur-Marne n’est clairement plus un rookie.<br><br>" + 
      "<br> Pour le cinquième projet de sa carrière, nelick se rapproche de cet artiste total qu’il veut devenir. Une ambition portée par le désir de créer son propre espace musical, son petit royaume nostalgique et coloré - où son groove toujours plus assumé puise à la fois dans le rap, le R&B et l’indie - pop - loin des ten-dances actuelles du rap français. Ce nouvel EP - le premier réalisé avec la complicité du label indépendant Entreprise (Fishbach,Bagarre,Jäde...) - marque un changement de catégorie."
    },


  }
}
</script>
