<template>
    <div class="grid-x rdCell" :class="orientation">
        <div class="cell rdColumn" v-for="round in regionRds">
            <div v-for="(rdData, rdName) in round">
                <div class="rdHeader">{{ generateRoundName(rdName) }}</div>
                <div class="songCell" :class="[rdName, rdName+song.nextRdIndex]" v-for="song in rdData" @click="advanceSong(song, rdName, $event)">
                    <div class="songSeed">{{ song.seed }}.</div>
                    <div class="songName">{{ song.songName }}</div>
                </div>
            </div>
        </div>
        <div class="regionName"><h4><b>{{ region.region }} Region</b></h4></div>
    </div>
</template>

<script>
    import { eventBus} from '../../EventBus.js';

    export default {
        data: () => {
            return {
                regionRds: '',
                rdFullNames: eventBus.rdFullNames
            };

        },
        props: ['region', 'orientation'],
        watch: {
            region: function(newRegion) {
                this.regionRds = this.orderRegion(newRegion);
            }
        },
        methods: {
            orderRegion(region){
                var order = [];
                for(var key in region.rds){
                    var rdObject = {};
                    rdObject[key] = region.rds[key];
                    if(this.orientation === 'right'){
                        order.unshift(rdObject);
                    } else if (this.orientation === 'left') {
                        order.push(rdObject);
                    }
                }
                
                return order;
            },
            generateRoundName(rdKey){
                return this.rdFullNames[rdKey][0];
            },
            advanceSong(song, currRd, event){
                if(currRd === 'final4'){
                    alert('Please Navigate To Final 4 To Pick Winner')
                } else if (song.songName != ''){
                    this.styleSelectedDiv(event.target, song, this.rdFullNames[currRd][1]);
                    eventBus.updateSongPosition(song, currRd, this.orientation);
                }
                
            },
            styleSelectedDiv(target, songData, rdKeys){
                var targetKey;
                var domRegion;

                //Checks if element clicked is songCell
                if(!target.classList.contains('songCell')){
                    target = target.parentNode;
                }

                //Loop to find target's key
                for(var key in rdKeys){
                    if(target.classList.contains(rdKeys[key])){
                        targetKey = rdKeys[key];
                        
                        break;
                    }
                }
                domRegion = document.getElementsByClassName(this.orientation)[0].getElementsByClassName(targetKey + ' roundWinner');
                if(domRegion[0]){
                    domRegion[0].classList.remove('roundWinner');
                }
                target.classList.add('roundWinner');
            }
        },
        created(){
            this.regionRds = this.orderRegion(this.region);
        }
    }
</script>

<style scoped>
h4{
    font-size: 2em;
}

.rdCell{
    font-size: 0.7rem;
    text-align: center;
    position: relative;
}

.rdColumn{
    width: 18.5%;
    margin-right: 1.5%;
}

.rdHeader{
    height: 3vh;
    text-decoration: underline;
}

.songCell{
    height: 4.5vh;
    margin-bottom: 0.45vh;
    /* border: 1px solid #999; */
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #ddd;
    cursor: pointer;
}

.songCell>.songName{
    display: inline-block;
    /* vertical-align: -webkit-baseline-middle; */
}

 .songSeed{
    float: left;
     /* display: inline-block; */
    font-size: 10px;
    width: 15%;
    height: 100%;
    background-color: lightgrey;
}

.songName{
    width: 85%;
}

.rd32{
    margin-top: 2.25vh;
}

.rd32 ~ .rd32{
    margin-top: 5.5vh;
}

.sweet16{
    height: 5.5vh;
    margin-top: 6.75vh;
}

.sweet16 ~ .sweet16{
    margin-top: 14.5vh;
}

.elite8{
    height: 6.5vh;
    margin-top: 16vh;
}

.elite8 ~ .elite8{
    margin-top: 33.5vh;
}

.final4{
    height: 8vh;
    margin-top: 35.5vh;
}

.roundWinner{
    background-color: #00ffff;
    border: 1px solid #777;
}

.regionName{
    position:absolute;
    top: 50%;
}

.left .regionName{
    left: 50%;
}

.right .regionName{
    right: 50%;
}



</style>
