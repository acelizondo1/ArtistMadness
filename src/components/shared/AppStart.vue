<template>
    <div class="container fluid">
        <div class="grid-x">
            <div class="cell small-8 float-center shadow" id="app-start">
                <h3>Select An Artist</h3>
                <div class="grid-x grid-margin-x" id="artist-grid">
                    <div class="cell artist-selector shadow" 
                        :class="calculateCellSize" 
                        :id="index"
                        v-for="(artist, index) in artistList"
                        @click="selectArtist(artist, index)">
                        {{ artist.artistName }}
                    </div>
                </div>
                <div class="grid-x">
                    <button class="button cell small-4 float-center shadow" @click="startBracket()">Start</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../../EventBus';
    export default {
        data: () => {
            return {
                artistList: eventBus.bracketData.artistList
            }
        },
        computed: {
            calculateCellSize(){
                var numArtists = this.artistList.length;
                var numCol = 12/numArtists;
                var mod = 12%numArtists;
                if(mod === 0){
                    return 'small-' + numCol;
                } else{
                    numCol = Math.round(numCol);
                    if(numCol<4){
                        numCol = 4;
                    }
                    return 'small-' + numCol;
                }
                
            }
        },
        methods: {
            selectArtist(artistObject, id){
                //Resets styling for selected Artist
                var selectors = document.getElementsByClassName('artist-selector');
                for(var x=0; x<selectors.length; x++){
                    selectors[x].style.backgroundColor = 'inherit';
                }
                //Sets the clicked artist with selected styling
                document.getElementById(id).style.backgroundColor = 'lightblue';
                //Calls eventBus function to handle storing the current Artist object
                eventBus.pickArtistBracket(artistObject);
            },
            startBracket(){
                eventBus.startBracketInstance();
            }
        }
  
    }
</script>

<style scoped>
    h3{
        font-weight: bold;
    }

    div{
        text-align: center;
    }

    .container{
        height: 90vh;
        position: relative;
    }

    .container>.grid-x{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 60vh;
    }

    .shadow{
        box-shadow: 0.2rem 0.2rem 0.2rem 0.2rem #ddd;
    }

    #app-start{
        border: 1px #ddd solid;
        padding: 3rem;
    }

    #artist-grid{
        margin-top: 5vh;
    }

    .artist-selector{
        margin-bottom: 5vh;
        height: 10vh;
        padding: 1.5rem;
        border: 1px #ddd solid;
        cursor: pointer;
    }

    .artist-selector:hover{
        filter: brightness(50%);
    }

    .selected-artist{
        background-color: lightcoral;
    }
    



</style>
