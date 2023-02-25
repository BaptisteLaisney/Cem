<template>
    <div class="Artistes">
        <Artiste id="BBJacques" artiste="B.B. Jacques" image="BBJacques.png" v-on:click="gotoBB" horaires="22h30 – 23h30"/>
        <Artiste id="BRO" artiste="BRÖ" image="Bro.jpg" v-on:click="gotoBRO" horaires="20h55 – 22h10"/>
        <Artiste id="nelick" artiste="nelick" image="nelick.jpg" v-on:click="gotonelick" horaires="19h00 – 19h30"/>
        <Artiste id="Maddy" artiste="MADDYT STREET" image="maddy.jpg" v-on:click="gotoMADDY" horaires="19h50 – 20h35"/>
   

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
    gotoBB: function () {
      let pres = document.getElementById('BBJacques_pres')
      if(pres != null){
        pres.scrollIntoView({ block: 'end', behavior: 'smooth' })
        this.s.update(0)
      }else{
        document.location.href = 'https://lesondees.fr/Programmation'
      }
    


    },
    gotoBRO: function () {
      let pres =document.getElementById('BRO_pres')
      if(pres != null){
        pres.scrollIntoView({ block: 'end', behavior: 'smooth' })
        this.s.update(1)
      }else{
        document.location.href = 'https://lesondees.fr/Programmation'
      }
  

    },
    gotoMADDY: function () {
      let pres = document.getElementById('MADDY_pres')
      if(pres != null){
        pres.scrollIntoView({ block: 'end', behavior: 'smooth' })
        this.s.update(3)
      }else{
        document.location.href = 'https://lesondees.fr/Programmation'
      }

    },
    gotonelick: function () {
      let pres = document.getElementById('Nelick_pres')
      if(pres != null){
        pres.scrollIntoView({ block: 'end', behavior: 'smooth' })
        this.s.update(2)
      }else{
        document.location.href = 'https://lesondees.fr/Programmation'
      }

   
    },


  },
  mounted () {
    class scroll {
      current
      liste
      scrollTimeout
      constructor () {
        this.current = 0
        this.liste = ['BBJacques_pres', 'BRO_pres', 'MADDY_pres','Nelick_pres']
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

