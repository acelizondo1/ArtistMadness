<template>
  <div>
    <div id="app-header">
      <app-header></app-header>
    </div>
    
    <div id="app-body">
      <app-start v-if="!appStart"></app-start>
      <div class="active-app" v-else>
        <artist-nav></artist-nav>
        <bracket></bracket>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from './EventBus';
  import Header from './components/shared/Header.vue';
  import AppStart from './components/shared/AppStart.vue';
  import ArtistNav from './components/shared/ArtistNav.vue';
  import Bracket from './components/bracket/Bracket.vue';

  export default {
    name: 'app',
    data: () => {
      return{
        appStart: eventBus.appActive
      }
    },
    components: {
      'app-header': Header,
      'app-start': AppStart,
      'artist-nav': ArtistNav,
      'bracket': Bracket
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
    height: 8vh;
  }

  #app-body, .active-app{
    height: 91vh;
  }
  

</style>
