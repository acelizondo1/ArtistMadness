<template>
  <div class="bracket container fluid">
      <div class="arrow bracketUp" @click="moveBracket('up')" v-if="bracketView != 0"><img src="../../images/arrow-down.png" alt="arrow"></div>
      <div class="grid-x">
          <div class="cell small-6" v-if="bracketView < 2">
               <keep-alive>
                   <bracket-region :region="regions[0]" :orientation="'left'"></bracket-region>
               </keep-alive>
          </div>
          <div class="cell small-6" v-if="bracketView < 2">
               <keep-alive>
                   <bracket-region :region="regions[1]" :orientation="'right'"></bracket-region>
               </keep-alive>
          </div>
          <bracket-finals :region="regions[0]" v-if="bracketView === 2"></bracket-finals>
      </div>
      <div class="arrow bracketDown" @click="moveBracket('down')" v-if="bracketView <= 1"><img src="../../images/arrow-down.png" alt="arrow"></div>
  </div>
</template>

<script>
    import { eventBus } from '../../EventBus.js';
    import Region from './Region.vue';
    import Finals from './Finals.vue';

    export default {
        data: () => {
            return {
                regions: [],
                bracketView: eventBus.currentBracketView
            };
        },
        components: {
            'bracket-region': Region,
            'bracket-finals': Finals
        },
        methods: {
            moveBracket(direction){
                eventBus.bracketViewChange(direction);
            }
        },
        created(){
            this.regions = eventBus.pullRegions(this.bracketView);
            eventBus.$on('selectedArtistChanged', (newArtist) => {
                this.regions = eventBus.pullRegions(this.bracketView);
            });

            eventBus.$on('bracketViewChange', (currentView)=>{
                this.bracketView = currentView;
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

    .arrow{
        position: absolute;        
        cursor: pointer;
        z-index: 999;
        width: 3.6rem;
        left: 0;
        right: 0;
        margin-right: auto;
        margin-left: auto;
    }


    .bracketDown{
        bottom: 5vh;
    }

    .bracketUp{
        top: 5vh;
        transform: rotate(180deg);
    } 

</style>
