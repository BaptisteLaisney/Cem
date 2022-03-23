<template>
    <div class = "Programmation">
        <h1>Programmation</h1>
        <Artistes/>
        <br><br>
        <Presentationd id="Spider_pres" color = "rgb(162,163,185)" link_yt ="https://www.youtube.com/embed/scXngX8uFYs" artiste="Spider Zed" image="spider_zed.jpg" :presentation_text="getTextSpider()" insta="https://www.instagram.com/spiderzed/" face="https://www.facebook.com/SpiderZED" />
        <Presentationg id="A2H_pres" color = "rgb(207,54,48)" link_yt ="https://www.youtube.com/embed/kUhDGwYKCNY" artiste="A2H" image="A2H.jpg" :presentation_text="getTextA2H()" insta="https://www.instagram.com/a2hpalace/" face="https://www.facebook.com/profile.php?id=100050381984536" />
        <Presentationd id="Jyeu_pres" color = "rgb(219,204,181)" link_yt ="https://www.youtube.com/embed/z-DZQ1zVfzY" artiste="J Y E U H A I R" image="Jyeuhair.jpg" :presentation_text="getTextJyeu()" insta="https://www.instagram.com/jyeuhair/" face="https://www.facebook.com/jyeuhairjyeuhair/" />
        <Presentationg id="SonVert_pres" color = "rgb(207,54,48)" link_yt ="https://www.youtube.com/embed/adVwWG9UKGU" artiste="Le Son Vert" image="SonVert.jpg" :presentation_text="getTextSonVert()" insta="https://www.instagram.com/lesonvert_/" face="https://www.facebook.com/lesonvert" />
        <Presentationd id="Dj_pres" color = "rgb(207,54,48)"  artiste="Dj Set" image="dj.jpg" :presentation_text="getTextDj()" />
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
    getTextSpider(){
      return "Après avoir fait ses armes au sein du High Five Crew, Spider ZED sort 4 EP entre 2017 et 2019 comptabilisant plus de  45 millions de streams sur Spotify  <br> <br>" +
      "Auteur-compositeur, il confirme l'engouement autour de lui avec la réussite de son premier album  Jeune intermittent  sorti à la fin de l'année 2020. <br> <br>" + 
      "Le projet de 14 titres inclut notamment des collaborations avec le YouTubeur québécois  Thomas Gauthier  ainsi que les rappeurs  Bigflo & Oli. <br> <br>" + 
      "Spider ZED se fait l’artisan d’une poésie du quotidien tristement amusante  et se refuse à toute tentative d’embellir la réalité. Ses morceaux, parfois loufoques d’un premier abord, révèlent souvent un  spleen véritable et traduisent dans la plupart des cas une volonté d’aller à contre-courant des codes traditionnellement véhiculés par l’industrie du divertissement."
    },
    getTextA2H(){
      return "Après deux disques au fort succès d’estime, \"Libre\" (2016) et \"L’Amour\" (2018), A2H offre avec \"Rédemption\" en  2020 un  album  riche  qui  réunit  autour  d'une  proposition  musicale  ambitieuse  un large public. <br><br>"+
      "En 2022, A2H continue d’affirmer sa place si singulière surla  scène  française  portée  par  un  talent protéiforme,délivrant une musique qui touche l’excellence et un parcours sans faute. A2H revient ainsi auprès du public avec un double album \"Une rose et une lame\", synthétisant ses deux facettes, \"Une rose\" étant le volet plus chanté et \"Une lame\" étant le volet rap. <br><br>"+
      "Avec  \"Une  rose  et  une  lame\",  A2H  amène  sa  musique  sur  un  nouveau  niveau  de  popularité  et  de compétition artistique. A2H réalise un déroulé parfait sur les deux registres, chansons et rap. Bête de scène,  musicien  aguerri,  réussissant  àfédérer continuellement un nouveau public, miroir d’un auditoire   mixte   qui   se   retrouve   dans   ses   thématiques   intimes   abordées,   A2H   a   les   épaules suffisamment larges pour porter un vent de renouveau sur la scène musicale française."
    },
    getTextJyeu(){
      return "Tête bien faite et tête bien pleine, c’est peu de dire que Jyeuhair possède les deux et sait en faire une force. Productions et textes soignés, clips très personnels,  goût prononcé pour l’expérimentation, l’artiste de 23 ans insuffle à sa musique sa sensibilité en la nourrissant de toutes les influences de son monde intérieur.<br>" +
      "Arrivé à Caen en 2016, Jyeuhair rejoint le collectif La Dose en 2017, avec lequel il sortira un 1er EP solo « ANAMO » et fera ses premiers concerts. <br> <br>" +
      "Tempérament  calme  et  réservé  au  quotidien,  Jyeuhair  explose  sur  scène  et  laisse  libre  cours à l’énergie qui l’habite. Une nouvelle corde à son arc, vite remarquée par les salles et producteurs de la région (il est sélectionné aux Inouïs du Printemps de Bourges et gagner le Buzz Booster régional), qui lui confie les premières parties de Disiz, Guizmo ou Colombine. <br> <br>"+
      "Après son premier projet OBZERV. Il revient avec un nouveau projet LAVENTUR. Un gap est franchi. Avec cet opus, il prend le large, l’expérimentation est encore plus poussée et la fusion est maîtrisée. De la pop music, à la world en passant par l’électro, JYEUHAIR laisse libre cours à ses envies pour nous livre un style qui lui est propre !"
    },
    getTextSonVert(){
      return "Basé sur un uni­vers lou­foque Le Son Vert assume une direc­tion artis­tique fes­tive abor­dant des thèmes volon­tai­re­ment légers qui plongent les spec­ta­teurs dans une pres­ta­tion théâ­trale ou trois per­son­nages fic­tifs « Jeff, Ton­ton et DJ Brice » au look kitsch se mettent en scène pour pro­mou­voir un style de musique qu’ils appellent « L’EDM Tuning ». <br><br>"+
      "Le Son Vert est issu de la sélection du Tremplin Phénix Normandie édition 2022."
    },
    getTextDj(){
      return "À venir"
    }

  }
}
</script>
