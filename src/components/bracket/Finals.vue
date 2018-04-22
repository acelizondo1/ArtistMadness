<template>
  <div class="grid-x finals">
      <div class="cell small-1"></div>
      <div class="cell small-3 final-half final-half-left">
          <div class="grid-y">
              <div class="cell small-2 small-offset-2 final-four">

              </div>
              <div class="cell small-2 small-offset-4 final-four">

              </div>
          </div>
      </div>
      <div class="cell small-4 championship">
          <div class="grid-y">

          </div>
      </div>
      <div class="cell small-3 final-half final-half-right">
          <div class="grid-y">
              <div class="cell small-2 small-offset-2 final-four">

              </div>
              <div class="cell small-2 small-offset-4 final-four">

              </div>
          </div>
      </div>
      <div class="cell small-1"></div>
  </div>
</template>

<script>
    export default {
        props: ['region']
    }
</script>

<style scoped>
    .finals{
        height: 83vh;
        width: 100%;
    }

    .final-four{
        /* margin-top: 16.666667%;
        margin-bottom: 16.666667%; */
    }
</style>
