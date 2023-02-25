<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <div id="cookieBanner">
      Des cookies sont utilisés pour améliorer votre expérience sur notre site.

      <button id="cookieBannerAccept">Accepter</button>
      <button id="cookieBannerRefuse">Refuser</button>
            <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser">En savoir plus</a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Constant/Nav.vue'
import Footer from '@/components/Constant/Footer.vue'
export default {
  name: 'Menu',
  components: {
    Navigation,
    Footer
  },
  inject: ['gtag']
  ,
  mounted(){
    //cookie banniere
    //   document.cookie = 'cookieAccepted  =; Max-Age=-99999999;';
    let cookieBanner = document.getElementById('cookieBanner')
    let cookie = document.cookie
    let accept = document.getElementById('cookieBannerAccept')
    let refuse = document.getElementById('cookieBannerRefuse')
    if(cookie.indexOf('cookieAccepted') == '-1'){
        cookieBanner.style.visibility = 'visible'
    }
    else{
      cookieBanner.style.visibility = 'hidden'
      let place = cookie.indexOf('cookieAccepted');
      console.log()
      if(cookie[15]== 'f'){
        console.log('desactivation')
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });
      }
    }
    accept.addEventListener('click', function(event){
        document.cookie = 'cookieAccepted=t'
        cookieBanner.style.visibility = 'hidden'
    })
    refuse.addEventListener('click', function(event){
        
        document.cookie = 'cookieAccepted=f'
        cookieBanner.style.visibility = 'hidden'
        //disable google analytics
        // console.log(event.currentTarget.gtag)
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'analytics_storage': 'denied'
        });

    })
    refuse.gtag = this.gtag
  }
}
</script>
<style>


@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400&display=swap');

#app {
  font-family: 'Space Grotesk', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color :black;
}

body{
  margin:0px;
  min-height: 100vh;
}
h1{
  font-family: 'Space Grotesk', sans-serif; 
  color: #284e99;
  font-size: 50px;
  margin:auto;
  margin-bottom:40px ;
}
h2{
  font-family: 'Space Grotesk', sans-serif;
  color: #284e99;
  font-size: 35px;
  margin-top: 10px;
   margin-bottom: 10px;
}
h3{
  font-family: 'Space Grotesk', sans-serif;
  color: #f1692c;
  font-size: 25px;
  margin-top: 5px;
  margin-bottom: 5px;
}
#cookieBanner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  color: #000;
  z-index: 9999;
}
#cookieBannerAccept, #cookieBannerRefuse {
  border:#f1692c solid 1px;
  margin:5px;
  cursor: pointer;
  border-radius: 5px;
}
#cookieBanner a {
  color: #000;
  text-decoration: none;
}
@media screen and (max-width: 768px){
  h1{
    font-size: 30px;
  }
  h2{
    font-size: 25px;
  }
  h3{
    font-size: 20px;
  }
}

</style>
