<template>
    <div class="artist-nav">
        <ul class="menu grid-x">
            <li class="cell small-4"></li>
            <li class="cell small-2" v-for="artist in artists" :style="styleSelected(artist)">
                <a href="#" @click.prevent="changeBracket(artist)">{{ artist.artistName }}</a>
            </li>
            <li class="cell small-fluid"></li>
        </ul>
        <div class="grid-x">
            <button class="button cell small-3 float-center" @click="resetApp()">Reset</button>
        </div>
    </div>
  
</template>

<script>
    import { eventBus } from '../../EventBus';
    export default {
        data: () => {
            return {
                artists: eventBus.bracketData.artistList,
                artistObject: eventBus.selectedArtist
            };
        },
        methods: {
            resetApp(){
                eventBus.appActive = false;
                eventBus.appStateChange();
            },
            changeBracket(artistObject){
                eventBus.pickArtistBracket(artistObject);
            },
            styleSelected(artistObject) {
                if(JSON.stringify(this.artistObject) === JSON.stringify(artistObject)){
                    return 'background-color: lightgrey';
                }
            }
        },
        created(){
            eventBus.$on('selectedArtistChanged', (data) => {
                this.artistObject = data;
            });
        }
    
    }
</script>

<style scoped>
    .artist-nav{
        height: 12vh;
        margin-top: 1vh;
        overflow:hidden;
    }

    li{
        border-right: 2px solid #8888;
    }

    li:last-of-type{
        border-right: none
    }

    .menu{
        /* position: absolute;
        transform: translateX(200%); */
        text-align:center;
        margin-bottom: 1vh;
    }

    

</style>
