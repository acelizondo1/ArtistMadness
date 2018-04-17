<template>
  <div class="bracket container fluid">
      <div class="grid-x">
          <bracket-region v-for="region in regions">{{ region.region }}</bracket-region>
      </div>
  </div>
</template>

<script>
    import { eventBus } from '../../EventBus.js';
    import Region from './Region.vue';

    export default {
        data: () => {
            return {
                regions: []
            };
        },
        props: ['bracketView'],
        components: {
            'bracket-region': Region
        },
        created(){
            this.regions = eventBus.pullRegions(this.bracketView);
            eventBus.$on('selectedArtistChanged', (newArtist) => {
                this.regions = eventBus.pullRegions(this.bracketView);
            });
        }
    }
</script>

<style scoped>
    .bracket{
        margin-top: 1vh;
        height: 83vh;
    }
</style>
