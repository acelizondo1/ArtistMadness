<template>
    <div class="grid-x rdCell">
        <div class="cell rdColumn" v-for="(rdData, rdName) in region.rds">
            <div class="rdHeader">{{ rdName }}</div>
            <div class="songCell" :class="rdName" v-for="song in rdData">
                {{ song.songName }}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['region', 'orientation']
    }
</script>

<style scoped>
.rdCell{
    font-size: 13px;
    text-align: center;
}

.rdColumn{
    width: 20%;
}

.rdHeader{
    height: 4.88vh;
}

.songCell{
    height: 4.88vh;
}

</style>
