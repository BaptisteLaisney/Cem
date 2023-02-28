<template>
  <div class="Billetterie">
    <h1>Billetterie</h1>

    <a title="Logiciel billetterie en ligne" href=https://www.weezevent.com/widget_multi.php?15290.11.1.bo class="weezevent-widget-integration" target="_blank" data-src=https://www.weezevent.com/widget_multi.php?15290.11.1.bo data-width="100%" data-height="100%" data-id="multi" data-resize="1" data-npb="0" data-width_auto="1">Billetterie Weezevent</a>

 

  </div>
</template>



 <script>
 

export default {
  name: 'Billetterie',
  mounted(){
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://www.weezevent.com/js/widget/min/widget.min.js')
    document.head.appendChild(externalScript)
  }
}
</script>