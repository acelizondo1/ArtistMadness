<template>
  <div class="cell small-10 float-center finals">
      {{region}}
  </div>
</template>

<script>
    export default {
        props: ['region']
    }
</script>

<style scoped>
    .finals{
        height: 70vh;
        margin-top: 6vh;
    }
</style>
