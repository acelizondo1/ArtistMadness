<template>
  <div class="bracket container fluid">
      <div class="grid-x">
          <div class="cell small-6">
               <bracket-region :region="regions[0]" :orientation="'left'"></bracket-region>
          </div>
          <div class="cell small-6">
               <bracket-region :region="regions[1]" :orientation="'right'"></bracket-region>
          </div>
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
