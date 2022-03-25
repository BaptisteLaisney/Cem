<template>
<div class="Mentions">
      <h1>Mentions légales</h1>
    <Partie Titre="Qui sommes nous ?" Contenu="Le site réalisé par l'association ACT'ifs disponible à l'addresse https://lesondees.fr existe pour présenter l'évenement du 04/06/2022 au cargö à Caen <br>" />
    <Partie Titre="Politique de confidentialité des données" Contenu="Le site des Ondées collecte uniquement les informations via google analytics dans le but de connaître le nombre de passages sur le site afin d'optimiser son contenu.<br> Nous ne vendons ni ne transmettons aucune données à des entreprises."/>
    <Partie Titre="Billetterie" Contenu="Lorsque vous souhaitez passer une commande via notre site web, vous êtes systematiquement redirigé vers le site de la billetterie de notre partenaire weezevent.<br>Pour de plus amples informations au sujet du traitement des données fournies lors de l’achat d’un produit de la billetterie, merci de consulter la charte du partenaire précédemment cité. "/>
    <Partie Titre="Sécurité" Contenu="La technologie https est utilisée pour crypter les formulaires en ligne et s’assurer que chaque information transitant entre vos appareils et le site internet soient maintenu secrète. Les certificats SSL vous assurent que les pages que vous visitez proviennent bien de notre site et permettent ainsi d’éviter la fraude."/>
    <Partie Titre="Hebergeur" Contenu="Le site www.lesondees.fr est hébergé par la société OVH : <br> RCS Lille Métropole 424 761 419 00045 <br>Code APE 2620Z <br >N° TVA : FR 22 424 761 419 <br> Siège social : 2 rue Kellermann - 59100 Roubaix - France"/>
    <Partie Titre="Crédits" Contenu="Le site à été conçu par Baptiste Laisney avec l'aide de Clement Guibout <br> Les textes ont été réalisés par Matthias Fichet, Juline Flament, Kimberly Grippay, Baptiste Laisney et Marie Mahé <br> Les différents visuels ont été réalisé par l'association étudiante de l'ésam"/>


</div>
  
</template>

<script>
import Partie from '@/components/Mentions/Partie.vue'

export default {
    name:'Mention',
    components:{
        Partie
    }
}
</script>
<style scoped>
.Mentions{
    width: 90%;
    margin: auto;
}
</style>