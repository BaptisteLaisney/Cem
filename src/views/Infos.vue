<template>
  <div class="Infos">
    <h1>Informations pratiques</h1>
    <Categorie :infos ="getInfos1()" nomCategorie="VENIR AUX ONDÉES"/>
    <Categorie :infos ="getInfos2()" nomCategorie="La Billeterie"/>
    <Categorie :infos ="getInfos3()" nomCategorie="Informations Diverses"/>
  </div>
</template>
<script>
import Categorie from '@/components/Infos/Categorie'

export default {
  name: "Infos",
  components:{
    Categorie
  },
  methods:{
    getInfos1(){
      return [{
        Titre : "L'adresse",
        Contenu : "Le Cargö 9, cours Caffarelli 14 000 Caen "
       },
      {
        Titre: "Venir de CAEN",
        Contenu : "BUS : Ligne 15 Arrêt Port de Plaisance <br><br>"+
        "TRAM : T2 Arrêt Presqu’île – T1 et T3 Arrêt Quai de Juillet (7 min à pied) <br><br>" +
        "STATION VÉLOLIB : Numéro 4 – Station Presqu’île – Bibliothèque <br><br>" +
        "NOCTIBUS : Arrêt Port de Plaisance <br><br>" +
        "NAVETTE GRATUITE CENTRE-VILLE : Arrêt Presqu’île <br><br>"
      },
      {
        Titre: "Si je ne suis pas à Caen",
        Contenu : "TRAIN : Gare de Caen (environ 15 min à pied) <br><br>" +
        "&nbsp &nbsp &nbsp &nbsp - De Rouen : 1h45 <br><br>" + 
        "&nbsp &nbsp &nbsp &nbsp - De Cherbourg: 1h10 <br><br>" +
        "VOITURE : Accès par l’autoroute A13 de Rouen et Paris <br><br>" +
        "Accès par l’autoroute A84 de Rennes <br><br>" +
        "&nbsp &nbsp &nbsp &nbsp - Parking souterrain Rives de l'Orne <br><br>"+
        "&nbsp &nbsp &nbsp &nbsp - Parking Vendeuvre sud <br><br>"+
        "&nbsp &nbsp &nbsp &nbsp - Parking Est de la Presqu'île  <br><br>"
      },
      {
        Titre: "Covoiturage",
        Contenu: "Pensez à réduire vos émissions de CO2 en favorisant le covoiturage. Conducteur ou passager, n’hésitez pas à proposer des trajets communs pour vous rendre sur le site !"
      }

      ]
    },
    getInfos2(){
      return [{
        Titre : "Où trouver la billetterie ?",
        Contenu : '<a style="text-decoration:none; color:#284e99;" href="/Billetterie">Lien vers la Billetterie</a>'
      },{
        Titre : "Tarifs",
        Contenu : "&nbsp &nbsp &nbsp &nbsp - Prévente Étudiant•e dans l’enseignement supérieur (sur présentation d'un justificatif) - 8€ <br><br>" +
        "&nbsp &nbsp &nbsp &nbsp - Prévente Abonné•e Cargö - 8€ <br><br>"+
        "&nbsp &nbsp &nbsp &nbsp - Prévente Tarif Normal - 12€ <br><br>" +
        "&nbsp &nbsp &nbsp &nbsp - Sur place le jour de l’événement – 16€ <br><br>" +
        "+ 0,99 cts de frais de location"
      },{
        Titre: "Guichet du Cargö",
        Contenu: "Le point accueil et billetterie du Cargö est ouvert du lundi au jeudi de 13h00 à 18h00 et le vendredi de 13h00 à 17h00."
      },
      {
        Titre:"Atouts Normandie",
        Contenu:'Il est possible de régler son billet avec Atouts Normandie au guichet du Cargö. Pour plus d’informations rendez-vous sur <a style="text-decoration:none; color:#284e99;" href="https://atouts.normandie.fr/"> https://atouts.normandie.fr/ </a>.'
      },
      {
        Titre: "Pass culture",
        Contenu: "Bientôt disponible. Plus d’informations à venir."
      }
      ]
    },
    getInfos3(){
      return [
        {
          Titre:"Rappel horaires et date",
          Contenu: "Samedi 4 juin 2022 <br><br> 14h00 : Ouverture du village <br><br> 18h30 : Ouverture des portes <br><br>19h00 : Début des concerts"
        },
        {
          Titre:"BÉNÉVOLAT",
          Contenu: '<a target="_blank" href="https://forms.gle/sH4T9BKkiDqvc5Xg6">Devenir Bénévole pour l atelier enfants</a>'
        },
        {
          Titre: "ACCUEIL DES PERSONNES À MOBILITÉ RÉDUITES",
          Contenu:"Le Cargö est acces­sible aux per­sonnes à mobi­li­té réduite. Pour mieux pré­pa­rer votre accueil, nous vous remer­cions de bien vou­loir nous infor­mer de votre venue quelques jours avant la date du concert auprès de Laurent Laloux : laurent@lecargo.fr"
        },
        {
          Titre: "Prévention",
          Contenu: "Le Cargö pro­pose gra­tui­te­ment les soirs de concerts ou d’ac­tions culturelles : <br><br>"+
          "&nbsp &nbsp &nbsp &nbsp - Des bou­chons d’o­reilles au bar et au ves­tiaire [Gra­tuit] <br><br>"+
          "&nbsp &nbsp &nbsp &nbsp - Des casques pour la pro­tec­tion audi­tive des enfants au bar [Gra­tuit, en échange d’une pièce d’identité] <br><br>" +
          "Des préservatifs et éthylotests seront également à disposition gratuitement au stand prévention du village."
        }
        
      ]
    }
  }


}
</script>

