<template>
  <div class="app">
    <tabs></tabs>
    
    <h2>Visit <router-link to="/about"> About page</router-link></h2>
    <h2>Prueba<router-link to="/prueba"> Ionic page</router-link></h2>
    <p></p>
    <pre>{{$store.state.msg}}</pre>
    <div id="deviceready" class="blink">
      <p class="event listening">Connecting to Device</p>
      <p class="event received">Device is ready</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'main'
}
</script>
