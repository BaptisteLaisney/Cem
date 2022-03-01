<template>
    <div class = "Programmation">
        <h1>Programmation</h1>
        <Artistes/>
        <br><br>
        <Presentation id="Spider_pres" color = "rgb(162,163,185)" link_yt ="https://www.youtube.com/embed/scXngX8uFYs" artiste="Spider Zed" image="spider_zed.jpg" presentation_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <Presentation id="A2H_pres" color = "rgb(207,54,48)" link_yt ="https://www.youtube.com/embed/bWKEYl9PB14" artiste="A2H" image="A2H.jpg" presentation_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
        <Presentation id="Jyeu_pres" color = "rgb(219,204,181)" link_yt ="https://www.youtube.com/embed/z-DZQ1zVfzY" artiste="J Y E U H A I R" image="Jyeuhair.jpg" presentation_text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
    </div>
</template>
<script>
import Artistes from '@/components/Accueil/Artistes.vue'
import Presentation from '@/components/Programmation/Presentation.vue'
export default {
  name: 'Programmation',
  components: {
    Artistes,
    Presentation
  },
  mounted () {
    document.getElementById('Spider').addEventListener('click', () => { document.getElementById('Spider_pres').scrollIntoView({ block: 'end', behavior: 'smooth' }) })
    document.getElementById('A2H').addEventListener('click', () => { document.getElementById('A2H_pres').scrollIntoView({ block: 'end', behavior: 'smooth' }) })
    document.getElementById('Jyeu').addEventListener('click', () => { document.getElementById('Jyeu_pres').scrollIntoView({ block: 'end', behavior: 'smooth' }) })
  }
}
</script>
