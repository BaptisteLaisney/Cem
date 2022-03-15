<template>
    <div class="Artistes">
        <Artiste id="Spider" artiste="Spider Zed" image="spider_zed.jpg" v-on:click="gotospider"/>
        <Artiste id="A2H" artiste="A2H" image="A2H.jpg" v-on:click="gotoA2H"/>
        <Artiste id="Jyeu" artiste="J Y E U H A I R" image="Jyeuhair.jpg" v-on:click="gotoJyeu"/>
        <Artiste id="Jyeu" artiste="J Y E U H A I R" image="Jyeuhair.jpg" v-on:click="gotoJyeu"/>
        <Artiste id="Jyeu" artiste="J Y E U H A I R" image="Jyeuhair.jpg" v-on:click="gotoJyeu"/>
        <!-- <Artiste artiste="Electro" image="spider_zed.jpg"/>
        <Artiste artiste="Tremp" image="spider_zed.jpg"/> -->
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
    }

  },
  mounted () {
    class scroll {
      current
      liste
      scrollTimeout
      constructor () {
        this.current = 0
        this.liste = ['Spider_pres', 'A2H_pres', 'Jyeu_pres']
        this.out= true

        
      }
      update(nb){
        console.log('update')
        this.current = nb
        this.out = false
      }
      nextdown () {
        console.log(this.current)
        
          console.log(this.liste[this.current])
          
          
        if(this.current < 2){
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
        
          console.log(this.liste[this.current])
          
          
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
    
    window.addEventListener('wheel', function(event){
      if(!scrolling){
        scrolling  = true;
        if(event.deltaY < 0){
          console.log("up")
          event.currentTarget.instance.nextup();
        }else{
          event.currentTarget.instance.nextdown();
        }
        setTimeout(function () {
          scrolling = false;
          
          console.log('fin de scroll')
        }, 500)
      }

      
      console.log('scroll')

    })
    window.instance = this.s;
  }
}
</script>

