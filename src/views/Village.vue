<template>
  <div class="Village">
    <h1>Village Culturel</h1>
    <!-- <div class="presentation">Dans une ambiance conviviale, accueillante et joyeuse, l’esplanade du Cargö s’animera samedi 4 juin dès 14h autour de stands divers - majoritairement tenus par des associations étudiantes. Ces animations seront complétées par des foodtrucks et un espace détente, où les curieux pourront venir boire un verre, lire ou se joindre aux différents ateliers proposés.</div> -->
    <!-- <br><br><br> -->
    <!-- <h1>Animations</h1> -->
    <div class="presentation">Le village culturel prendra place sur l’esplanade du Cargö dès 14h et durera jusqu’à 19h avant le début des concerts. <br><br>

À entrée libre, il réunira plus d’une dizaine d’organisations qui proposeront des animations autour de la culture, du développement durable et de l’expression artistique. Partie intégrante des Ondées, le village culturel se veut véritablement de proposer un moment unique réunissant étudiant·es et grand public, afin de proposer un autre regard sur la vie étudiante.</div>
<br><br>
  <h2>Les temps forts</h2>
  <br><br>
    <div class="Animations">

      <Animation class="Animation" v-for="animation in getAnimationsFort()" :key="animation" :nom ="animation.nom" :presentation="animation.presentation" :image="animation.image" :horaire="animation.horaire" :animateur="animation.animateur"/>
    </div>
    <br><br>
    <h2>En continu tout l'après-midi</h2>
    <br><br>
    <div class="Animations">

      <Animation class="Animation" v-for="animation in getAnimationsContinu()" :key="animation" :nom ="animation.nom" :presentation="animation.presentation" :image="animation.image" :horaire="animation.horaire" :animateur="animation.animateur"/>
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
    getAnimationsFort(){
      return[
        {"image" : "phenix.jpg", "horaire" : "14h00" ,"animateur" : "par Radio Phénix", "nom" : "Blind-test en équipe : des années 80 aux années 2010 ! ", "presentation" : "Radio Phénix  part en live sur le village culturel des Ondées ! La radio associative étudiante de Caen vous prépare une programmation d'invité·es surprise pour parler musique.... "},
        {"image" : "FCBN.jpg", "horaire" : "14h45" ,"animateur" : "par la Fédération Campus Basse-Normandie", "nom" : "Sur les ondes de Phénix", "presentation" : "Pour animer le village culturel, un blind-test en équipe sera proposé par la FCBN ! Le registre musical ira des années 80 aux années 2010. Testez-vos connaissances entre ami·es, dans une ambiance festive garantie ! Des lots sont à gagner !"},
        {"image" : "Seven.png", "horaire" : "15H45" ,"animateur" : "par Label Seven", "nom" : "Session freestyles rap", "presentation" : "Label Seven, créateur d'événements Hip-hop et électro caennais, va enflammer la scène Club du Cargö avec une session de freestyles rap ! Inspiré du format Grünt, les talents locaux poseront leurs meilleurs 16 au micro, devant le public des Ondées. "},
        {"image" : "fanfare.jpg", "horaire" : "16h45" ,"animateur" : "par Café Calva Caennexion", "nom" : "Fanfare étudiante", "presentation" : "La fanfare des étudiants santé de Caen, Café Calva Caennexion, vient animer le village avec son répertoire traversant les époques. Ambiance conviviale garantie ! "},
        {"image" : "logo.png", "horaire" : "17H15" ,"animateur" : "par Les Ondées", "nom" : "Karaoké en équipe", "presentation" : "Échauffez vos voix avant de venir aux Ondées, car vous allez avoir de quoi chanter ! En équipe, vous pourrez participer à un karaoké qui s'annonce déjanté ! "},
        {"image" : "fanfare.jpg", "horaire" : "17H45" ,"animateur" : "par Café Calva Caennexion", "nom" : "Fanfare étudiante", "presentation" : "La fanfare Café Calva Caennexion sera de retour sur le village culturel des Ondées ! Elle  fanfaronnera avec un registre varié allant de Charles Aznavour à Billie Eilish, en passant par Coldplay et Stevie Wonder."},
        {"image" : "Seven.png", "horaire" : "18h15" ,"animateur" : "par Label Seven", "nom" : "DJ Set", "presentation" : "Le village culturel sera clôturé par un DJ set de folie proposé par Label Seven et un des DJ résident de l'organisation caennaise."},
       ]
    },
    getAnimationsContinu(){
      return[
        {"image" : "Seven.png", "horaire" : "De 14H à 18H" ,"animateur" : "par Label Seven", "nom" : "Atelier écriture et beatmaking rap", "presentation" : "Sur son stand, Label Seven vous proposera de vous retrouver autour d’une animation interactive et créative durant laquelle vous pourrez participer à la création d’un morceau de rap aux côtés d’artistes du milieu. Tu es amateur·rice ? Sois le·la bienvenu·e ! "},
        {"image" : "Seven.png", "horaire" : "De 14H à 19H" ,"animateur" : "par Label Seven", "nom" : "Initiation djing", "presentation" : "Label Seven multiplie les événements dans le milieu de la nuit caennaise. Vous pourrez vous tester aux platines avec un DJ qui vous présentera le matériel et sa passion !"},
        {"image" : "Seven.png", "horaire" : "De 14H à 00H" ,"animateur" : "par Label Seven", "nom" : "Merchandising scène locale", "presentation" : "Label Seven soutient les jeunes créateur·rices dans leurs démarches artistiques. Vous retrouverez sur ce stand des produits dérivés d'artistes locaux·ales : disques, affiches, vêtements... "},
        {"image" : "AESFC.jpg", "horaire" : "De 14H à 19H" ,"animateur" : "par l'association étudiante AESFC", "nom" : "Prévention cancer du sein et sensibilisation", "presentation" : "L’association des étudiant·es sages-femmes de Caen est une association étudiante qualifiée sur la prévention et la sensibilisation à la santé. Vous pourrez ainsi vous initier à l'auto-palpation pour prévenir le cancer du sein et découvrir d'autres activités de sensibilisation ! "},
        {"image" : "marcelle.jpg", "horaire" : "De 14H à 19H" ,"animateur" : "par Friperie Marcelle Room", "nom" : "Shop de vêtements et atelier upcycling", "presentation" : "En plus de son stand de friperie, Marcelle Room transformera vos vieux vêtements en de nouveaux accessoires, pour être à la pointe de la mode ! Marcelle Room est un shop de vêtements de seconde main et accessoires faits main made in Caen with love"},
        {"image" : "rug.jpg", "horaire" : "De 14H à 19H" ,"animateur" : "par Rugs'Go ", "nom" : "Création artistique de tapis", "presentation" : "Rubs’Go nous fera découvrir son art : la création de tapis personnalisés autour de l'univers du rap, mais pas seulement."},
       
        {"image" : "Sidaccueil.png", "horaire" : "De 14H à 00H" ,"animateur" : "par Sid'Accueil Normandie  ", "nom" : "Prévention vie sexuelle et dépistage ist", "presentation" : "L’équipe de l’association Sid’Accueil Normandie, association de santé sexuelle, permettra grâce à son stand de parler vie sexuelle, prévention et sensibilisation aux comportements à risques. Un stand de dépistage rapide au VIH, VHB et VHC sera également proposé."},

        {"image" : "ESAM.png", "horaire" : "De 14H à 19H" ,"animateur" : "par l'Asso des étudiant·es de l'ésam  ", "nom" : "Atelier sérigraphie et ventes d'estampes  ", "presentation" : "Initiez-vous à la sérigraphie avec les étudiant·es de l'ésam ! Vous pourrez repartir avec votre tote-bag aux couleurs des Ondées. Des travaux et estampes des étudiant·es de l'école d'arts seront également en vente."},
        {"image" : "ESAM.png", "horaire" : "De 14H à 19H" ,"animateur" : "par l'Asso des étudiant·es de l'ésam ", "nom" : "Atelier d'arts plastiques" , "presentation" : "L'Asso de l'ésam vous propose un atelier d'arts plastiques, pour vous laissez exprimer votre âme artistique ! Coloriage, découpage-collage... Un atelier à faire en famille avec des jeunes enfants ou entre ami·es ! "},
        {"image" : "FCBN_AGORAE.png", "horaire" : "De 14H à 00H" ,"animateur" : "par la FCBN et l'AGORAé de Caen ", "nom" : "Les ago games ", "presentation" : "La Fédération Campus Basse-Normandie et l'AGORAé de Caen vous présentent leurs activités de manière ludique, autour de puzzles mettant en scène leur logo ainsi que ceux de leurs partenaires et institutions. Vous aurez la possibilité de faire un don à l'AGORAé sur ce stand."},
        {"image" : "Actif.png", "horaire" : "De 14H à 22H" ,"animateur" : "par ACT'Ifs Campus 3", "nom" : "Stand photos polaroid", "presentation" : "Ne repartez pas des Ondées sans un souvenir ! Immortalisez votre journée en repartant avec un cliché Polaroïd."},

        
        
        // {"image" : "ESAM.png" ,"nom" : "Atelier Sérigraphie et Exposition ⸱ par l’Asso étudiante de l’ésam", "presentation" : "Les élèves de l’École Supérieure d’Arts et Médias de Caen (Ésam) vous proposeront un atelier de sérigraphie afin que vous puissiez vous initier à cette technique et repartir avec un joli souvenir de cette journée ! Le but sera de personnaliser votre tote bag vierge. Pour cela, rien de plus simple : amenez votre propre tote bag ou achetez-en un sur place. <br><br> En parallèle, les étudiants vendront leurs travaux. Admirez un large choix d’estampes et autres créations réalisées par des étudiants volontaires au travers d’une exposition. "},
        // {"image" : "Seven.png" ,"nom" : "Atelier Création Rap ⸱ par Label Seven", "presentation" : "Sur son stand, Label Seven vous proposera de se retrouver autour d’une animation interactive et créative durant laquelle vous pourrez participer à la création d’un morceau de rap aux côtés d’artistes du milieu. Pour clôturer cette journée d’initiation, un concert et un Open Mic seront organisés ! <br><br> Un stand de merchandising sera également à disposition, avec vos artistes et auto-entrepreneurs Caennais préférés. "},
        // {"image" : "Marcelle.png" ,"nom" : "Friperie et Upcycling ⸱ par Marcelle Room", "presentation" : "En plus de son stand de friperie, Marcelle Room transformera vos vieux vêtements en de nouveaux accessoires, pour être à la pointe de la mode ! <br><br>Marcelle Room, c’est quoi ? C’est une boutique de seconde main située au cœur de Caen. Sensibilisée au recyclage et au réemploi, l’équipe de Marcelle Room passe son temps à chiner et dénicher de nouvelles pièces mais aussi à confectionner des accessoires répondant aux dernières tendances : bobs, mitaines, scrunchies, sacs, bagues…"},
        // {"image" : "CorpoMedecine.png" ,"nom" : "Ateliers jeune public ⸱ par la Corpo Médecine (SPEPSC)", "presentation" : "Le SPEPSC, la corporation des étudiants en médecine de Caen, accompagnée de sa mascotte Léo, animera un atelier de sensibilisation au recyclage et au tri pour les plus jeunes. Mais ce n’est pas tout, Léo fera également découvrir les débuts de la médecine aux petits curieux. Parce qu’aux Ondées, on pense aux grands comme aux petits !"},
        // {"image" : "Sangsationnel.jpg" ,"nom" : "Les règles on sang tamponne pas ! ⸱ par le Collectif Sangsationnel", "presentation" : "Parce qu’un moment festif c’est aussi une occasion d'évoquer des sujets parfois oubliés, le collectif Sangsationnel sera présent sur Les Ondées. Leur participation se distinguera par un stand d’information et de sensibilisation au sujet des règles et de la précarité menstruelle. Comme ils le disent si bien : “Les règles, nous, on sang tamponne pas !”."},
        // {"image" : "Sidaccueil.png" ,"nom" : "Prévention et stand de dépistage • Sid’Accueil", "presentation" : "L’équipe de l’association basse-normande Sid’accueil est là pour vous ! L’occasion de parler vie sexuelle, prévention et sensibilisation aux comportements à risques. Un stand de dépistage rapide au VIH, VHB et VHC sera également proposé.<br><br>Sid'Accueil est une association de santé sexuelle. Elle lutte contre le VIH, les Hépatites et les IST, ainsi que pour la réduction des risques et dommages autour de l’usage de psychoactifs. "},
        // {"image" : "FCBN.jpg" ,"nom" : "Blindtest ⸱ par la FCBN", "presentation" : "La Fédération Campus Basse Normandie (FCBN) amplifiera l’ambiance festive du village avec son blind test sur les années 80-2000 et Disney, aux lots gagnants."},
        // {"image" : "FCBN.jpg" ,"nom" : "Vide-dressing solidaire ⸱ par la FCBN", "presentation" : "La FCBN tiendra un stand AGORAé, l’épicerie sociale et solidaire des étudiant·es, sous la forme d’un vide-dressing solidaire. L’occasion de se faire plaisir tout en soutenant une belle cause : lutter contre la précarité étudiante."},
        // {"image" : "BU.png" ,"nom" : "BU Ephémère ⸱ par le SCD de l’Université Caen Normandie", "presentation" : "Le Service Commun de la Documentation de l’université de Caen Normandie mettra à disposition une sélection de livres autour des thèmes de la musique et de la culture."},
        // {"image" : "Audacieux.png" ,"nom" : "Les Audacieux Normands ⸱ par la Caisse d’Epargne Normandie", "presentation" : "Les Audacieux normands, c’est tous ces normands qui se sont lancés, qui se lancent ou qui doutent encore et qui montrent l’exemple à leurs futures homonymes. Leurs portraits, leurs conseils et leurs témoignages accompagnent l’audace en Normandie. Ce dispositif permet aussi bien de créer l’inspiration que de catalyser les talents normands. L’organisation et la création d’articles, de podcasts et d’événements “inspirants” permettent à des créateurs, des entrepreneurs, des sportifs, ou encore des artistes régionaux de partager leurs parcours, leurs expériences et leurs engagements. <br><br>Justement, Pablo Raison, un jeune audacieux normand qui a vu son talent mis en lumière grâce à la réalisation de cartes géographiques, sera présent sur le stand. Il n’y a rien de mieux que l’expérience pour illustrer et inspirer les audacieux de notre Région !"},
        // {"image" : "Actif.png" ,"nom" : "Espace Détente, Foodtrucks et Stand photos ⸱ par ACT’Ifs Campus 3", "presentation" : "Sur l’esplanade du Cargö, retrouvez un espace dédié à la détente et à l’échange avec plusieurs stands de restauration et un bar associatif où l’on vous servira vos softs et cocktails préférés. Pour finir, immortalisez votre journée en repartant avec un cliché Polaroïd. "}
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
  font-family: 'SharpGrotesk-Bold20';
  color:black;
  
  font-size: 20px;
}
h2{

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
