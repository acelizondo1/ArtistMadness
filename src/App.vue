<template>
  <div>
    <div id="app-header">
      <app-header></app-header>
    </div>
    
    <div id="app-body">
      <app-start v-if="!appStart"></app-start>
    </div>
  </div>
</template>

<script>
  import { eventBus } from './EventBus';
  import Header from './components/shared/Header.vue';
  import AppStart from './components/shared/AppStart.vue';

  export default {
    name: 'app',
    data: () => {
      return{
        appStart: eventBus.appActive
      }
    },
    components: {
      'app-header': Header,
      'app-start': AppStart
    },
    created(){
      //listens to app start stop event
      eventBus.$on('appStateChange', (appState) => {
        this.appStart = appState;
      });
    }
  }
</script>

<style>
  body{
    height: 100vh;
  }

  #app-header{
    height: 10vh;
  }

  #app-body{
    height: 90vh;
  }
  

</style>
