<template>
    <div>
        <div v-for="(rdData, rdName) in region.rds">
            {{rdName}}
        </div>
    </div>
</template>

<script>
    export default {
        props: ['region']
    }
</script>

<style scoped>

</style>
