<template>
  <div class="Village">
    <h1>Village Culturel</h1>
    <div class="presentation">Dans une ambiance conviviale, accueillante et joyeuse, l’esplanade du Cargö s’animera samedi 4 juin dès 14h autour de stands divers - majoritairement tenus par des associations étudiantes. Ces animations seront complétées par des foodtrucks et un espace détente, où les curieux pourront venir boire un verre, lire ou se joindre aux différents ateliers proposés.</div>
    <br><br><br>
    <h1>Animations</h1>
    <div class="Animations">
      <Animation class="Animation" v-for="animation in getAnimations()" :key="animation" :nom ="animation.nom" :presentation="animation.presentation" :image="animation.image"/>
    </div>
    <h1>L'esplanade du cargö</h1>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!4v1648124541774!6m8!1m7!1sBLUt-zWDpTqHmnS73n8CtA!2m2!1d49.18054732813361!2d-0.3478539424900502!3f46.203974017838185!4f-0.3453812541706611!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    
  </div>
</template>
<script>
import Animation from "@/components/Village/Animation.vue"
export default {
  name: 'Village',
  components :{
    Animation
  },
  methods:{
    getAnimations(){
      return[
        {"image" : "ESAM.png" ,"nom" : "Atelier Sérigraphie et Exposition ⸱ par l’Asso étudiante de l’ésam", "presentation" : "Les élèves de l’École Supérieure d’Arts et Médias de Caen (Ésam) vous proposeront un atelier de sérigraphie afin que vous puissiez vous initier à cette technique et repartir avec un joli souvenir de cette journée ! Le but sera de personnaliser votre tote bag vierge. Pour cela, rien de plus simple : amenez votre propre tote bag ou achetez-en un sur place. <br><br> En parallèle, les étudiants vendront leurs travaux. Admirez un large choix d’estampes et autres créations réalisées par des étudiants volontaires au travers d’une exposition. "},
        {"image" : "Seven.png" ,"nom" : "Atelier Création Rap ⸱ par Label Seven", "presentation" : "Sur son stand, Label Seven vous proposera de se retrouver autour d’une animation interactive et créative durant laquelle vous pourrez participer à la création d’un morceau de rap aux côtés d’artistes du milieu. Pour clôturer cette journée d’initiation, un concert et un Open Mic seront organisés ! <br><br> Un stand de merchandising sera également à disposition, avec vos artistes et auto-entrepreneurs Caennais préférés. "},
        {"image" : "Marcelle.png" ,"nom" : "Friperie et Upcycling ⸱ par Marcelle Room", "presentation" : "En plus de son stand de friperie, Marcelle Room transformera vos vieux vêtements en de nouveaux accessoires, pour être à la pointe de la mode ! <br><br>Marcelle Room, c’est quoi ? C’est une boutique de seconde main située au cœur de Caen. Sensibilisée au recyclage et au réemploi, l’équipe de Marcelle Room passe son temps à chiner et dénicher de nouvelles pièces mais aussi à confectionner des accessoires répondant aux dernières tendances : bobs, mitaines, scrunchies, sacs, bagues…"},
        {"image" : "CorpoMedecine.png" ,"nom" : "Ateliers jeune public ⸱ par la Corpo Médecine (SPEPSC)", "presentation" : "Le SPEPSC, la corporation des étudiants en médecine de Caen, accompagnée de sa mascotte Léo, animera un atelier de sensibilisation au recyclage et au tri pour les plus jeunes. Mais ce n’est pas tout, Léo fera également découvrir les débuts de la médecine aux petits curieux. Parce qu’aux Ondées, on pense aux grands comme aux petits !"},
        {"image" : "Sangsationnel.jpg" ,"nom" : "Les règles on sang tamponne pas ! ⸱ par le Collectif Sangsationnel", "presentation" : "Parce qu’un moment festif c’est aussi une occasion d'évoquer des sujets parfois oubliés, le collectif Sangsationnel sera présent sur Les Ondées. Leur participation se distinguera par un stand d’information et de sensibilisation au sujet des règles et de la précarité menstruelle. Comme ils le disent si bien : “Les règles, nous, on sang tamponne pas !”."},
        {"image" : "Sidaccueil.png" ,"nom" : "Prévention et stand de dépistage • Sid’Accueil", "presentation" : "L’équipe de l’association basse-normande Sid’accueil est là pour vous ! L’occasion de parler vie sexuelle, prévention et sensibilisation aux comportements à risques. Un stand de dépistage rapide au VIH, VHB et VHC sera également proposé.<br><br>Sid'Accueil est une association de santé sexuelle. Elle lutte contre le VIH, les Hépatites et les IST, ainsi que pour la réduction des risques et dommages autour de l’usage de psychoactifs. "},
        {"image" : "FCBN.jpg" ,"nom" : "Blindtest ⸱ par la FCBN", "presentation" : "La Fédération Campus Basse Normandie (FCBN) amplifiera l’ambiance festive du village avec son blind test sur les années 80-2000 et Disney, aux lots gagnants."},
        {"image" : "FCBN.jpg" ,"nom" : "Vide-dressing solidaire ⸱ par la FCBN", "presentation" : "La FCBN tiendra un stand AGORAé, l’épicerie sociale et solidaire des étudiant·es, sous la forme d’un vide-dressing solidaire. L’occasion de se faire plaisir tout en soutenant une belle cause : lutter contre la précarité étudiante."},
        {"image" : "BU.png" ,"nom" : "BU Ephémère ⸱ par le SCD de l’Université Caen Normandie", "presentation" : "Le Service Commun de la Documentation de l’université de Caen Normandie mettra à disposition une sélection de livres autour des thèmes de la musique et de la culture."},
        {"image" : "Audacieux.png" ,"nom" : "Les Audacieux Normands ⸱ par la Caisse d’Epargne Normandie", "presentation" : "Les Audacieux normands, c’est tous ces normands qui se sont lancés, qui se lancent ou qui doutent encore et qui montrent l’exemple à leurs futures homonymes. Leurs portraits, leurs conseils et leurs témoignages accompagnent l’audace en Normandie. Ce dispositif permet aussi bien de créer l’inspiration que de catalyser les talents normands. L’organisation et la création d’articles, de podcasts et d’événements “inspirants” permettent à des créateurs, des entrepreneurs, des sportifs, ou encore des artistes régionaux de partager leurs parcours, leurs expériences et leurs engagements. <br><br>Justement, Pablo Raison, un jeune audacieux normand qui a vu son talent mis en lumière grâce à la réalisation de cartes géographiques, sera présent sur le stand. Il n’y a rien de mieux que l’expérience pour illustrer et inspirer les audacieux de notre Région !"},
        {"image" : "Actif.png" ,"nom" : "Espace Détente, Foodtrucks et Stand photos ⸱ par ACT’Ifs Campus 3", "presentation" : "Sur l’esplanade du Cargö, retrouvez un espace dédié à la détente et à l’échange avec plusieurs stands de restauration et un bar associatif où l’on vous servira vos softs et cocktails préférés. Pour finir, immortalisez votre journée en repartant avec un cliché Polaroïd. "}
      ]
    }
  }
}
</script>
<style scoped>

.presentation{
  width:90%;
  margin:auto;
  text-align: justify;
  margin-top:60px;
  font-family: 'Space Grotesk', sans-serif;
  color:black;
  font-weight: bold;
  font-size: 20px;
}
.map{
  width:70%;
}
@media screen and (max-width: 1000px) {
  .presentation{
    font-size: 15px;
  }
}
</style>
