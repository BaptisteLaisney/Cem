<template>
    <div class="Artistes">
        <Artiste id="Spider" artiste="Spider Zed" image="spider_zed.jpg" v-on:click="gotospider" horaires="22h30 – 23h30"/>
        <Artiste id="A2H" artiste="A2H" image="A2H.jpg" v-on:click="gotoA2H" horaires="20h55 – 22h10"/>
        <Artiste id="Jyeu" artiste="J Y E U H A I R" image="Jyeuhair.jpg" v-on:click="gotoJyeu" horaires="19h50 – 20h35"/>
        <Artiste id="SonVert" artiste="Le Son Vert" image="SonVert.jpg" v-on:click="gotoSonVert" horaires="19h00 – 19h30"/>
        <Artiste id="Dj" artiste="SMALLTUNEZ" image="smalltunez.jpg" v-on:click="gotoDj" horaires="23h40 – 00h30"/>
    </div>
</template>
<style scoped>

.Artistes{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

}
</style>

<script>
import Artiste from '@/components/Accueil/Artiste.vue'
export default {
  name: 'Artistes',
  components: {
    Artiste
  },
  methods: {
    gotospider: function () {
      document.getElementById('Spider_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
      this.s.update(0)

    },
    gotoA2H: function () {
      document.getElementById('A2H_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
      this.s.update(1)
    },
    gotoJyeu: function () {
      document.getElementById('Jyeu_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
      this.s.update(2)
    },
    gotoSonVert: function () {
      document.getElementById('SonVert_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
      this.s.update(3)
    },
    gotoDj: function () {
      document.getElementById('Dj_pres').scrollIntoView({ block: 'end', behavior: 'smooth' })
      this.s.update(4)
    }

  },
  mounted () {
    class scroll {
      current
      liste
      scrollTimeout
      constructor () {
        this.current = 0
        this.liste = ['Spider_pres', 'A2H_pres', 'Jyeu_pres','SonVert_pres','Dj_pres']
        this.out= true

        
      }
      update(nb){
        console.log('update')
        this.current = nb
        this.out = false
      }
      nextdown () {
        if(this.current < 4){
          if(!this.out){
            this.current = this.current + 1
          }
          this.out = false
          document.getElementById(this.liste[this.current]).scrollIntoView({ block: 'end', behavior: 'smooth' })
        }
        else{
          this.out = true
        }
      }
      nextup(){
        if(this.current > 0){
          if(!this.out){
            this.current = this.current - 1
          }
          this.out = false
          document.getElementById(this.liste[this.current]).scrollIntoView({ block: 'end', behavior: 'smooth' })
        }
        else{
          this.out = true
        }
        
      }

    }
    this.s = new scroll()
    let scrolling = false;
    
    // window.addEventListener('wheel', function(event){
    //   if(!scrolling){
    //     scrolling  = true;
    //     if(event.deltaY < 0){
    //       event.currentTarget.instance.nextup();
    //     }else{
    //       event.currentTarget.instance.nextdown();
    //     }

    //     setTimeout(function () {
    //       scrolling = false;
          
    //     }, 500)
    //   }
    // })
    window.instance = this.s;
  }
}
</script>

