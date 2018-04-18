<template>
    <div class="artist-nav">
        <ul class="menu grid-x">
            <li class="cell small-2" v-for="artist in artists" :style="styleSelected(artist)">
                <a href="#" @click.prevent="changeBracket(artist)">{{ artist.artistName }}</a>
            </li>
            <li class="cell small-4"></li>
            <button class="button cell small-2 float-right" @click="resetApp()">Reset</button>
        </ul>
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
                eventBus.resetBracketInstance();
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
        height: 5vh;
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
        padding-left: 1rem;
        padding-right: 1rem;
    }

    

</style>
