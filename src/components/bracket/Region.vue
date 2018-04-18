<template>
    <div class="grid-x rdCell">
        <div class="cell rdColumn" v-for="(rdData, rdName) in region.rds">
            <div class="rdHeader">{{ rdName }}</div>
            <div class="songCell" :class="rdName" v-for="song in rdData">
                <span class="songSeed">{{ song.seed }}.</span><span class="songName">{{ song.songName }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return {
                regionRds: ''
            };
        },
        props: ['region', 'orientation'],
        methods: {
            reverseRegion(){
                var order = [];
                for(var key in this.region.rds){
                    order.push(key);
                }
                return order;
            }
        },
        created(){
            if(this.orientation === 'right'){
                this.regionRds = this.reverseRegion();
            } else {
                this.regionRds = this.region.rds;
            }
        }
    }
</script>

<style scoped>
.rdCell{
    font-size: 0.7rem;
    text-align: center;
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
    display:inline-block;
    vertical-align: -webkit-baseline-middle;
}

.songSeed{
    width: 10%;
}

.songName{
    width: 90%;
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



</style>
