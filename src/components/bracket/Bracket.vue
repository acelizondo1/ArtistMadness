<template>
  <div class="bracket container fluid">
      <div class="bracketDown"><img src="../../images/arrow-down.png" alt="arrow"></div>
      <div class="grid-x">
          <div class="cell small-6">
               <keep-alive>
                   <bracket-region :region="regions[0]" :orientation="'left'"></bracket-region>
               </keep-alive>
          </div>
          <div class="cell small-6">
               <keep-alive>
                   <bracket-region :region="regions[1]" :orientation="'right'"></bracket-region>
               </keep-alive>
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

    .bracket{
        position: relative;
    }

    .bracketDown{
        width: 100%;
        position: absolute;
        bottom: 5vh;
    }

    .bracketDown img{
        display: block;
        margin-right: auto;
        margin-left: auto;
    }

</style>
