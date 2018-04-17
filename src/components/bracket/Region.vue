<template>
    <div class="grid-x rdCell">
        <div class="cell rdColumn" v-for="(rdData, rdName) in region.rds">
            <div class="rdHeader">{{ rdName }}</div>
            <div class="songCell" :class="rdName" v-for="song in rdData">
                <span>{{ song.songName }}</span>
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
    font-size: 0.74rem;
    text-align: center;
}

.rdColumn{
    width: 20%;
}

.rdHeader{
    height: 3vh;
    text-decoration: underline;
}

.songCell{
    height: 4.5vh;
    margin-top: 0.45vh;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem #ddd;
    /* padding-top: 0.25vh; */
}

.songCell>span{
    display:inline-block;
    vertical-align: -webkit-baseline-middle;
}

</style>
