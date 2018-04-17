<template>
  <div class="bracket">
      {{ selectedArtist.artistName }}
  </div>
</template>

<script>
    import { eventBus } from '../../EventBus.js';

    export default {
        data: () => {
            return {
                selectedArtist: eventBus.selectedArtist
            };
        },
        created(){
            eventBus.$on('selectedArtistChanged', (newArtist) => {
                this.selectedArtist = newArtist;
            });
        }
    }
</script>

<style>
    .bracket{
        margin-top: 1vh;
        height: 75vh;
    }
</style>
