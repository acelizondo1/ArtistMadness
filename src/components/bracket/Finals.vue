<template>
  <div class="grid-x finals">
      <div class="cell small-2 final-half final-half-left">
          <div class="grid-y">
              <div class="final-four">

              </div>
              <div class="final-four">

              </div>
          </div>
      </div>
      <div class="cell small-7 championship">
          <div class="grid-y">
              <div class="champ">

              </div>
             <div class="champ-game">
                <div class="champ-team champ-team-left">

                </div>
                <div class="champ-team champ-team-right">

                </div>
             </div>

          </div>
      </div>
      <div class="cell small-2 final-half final-half-right">
          <div class="grid-y">
              <div class="final-four">

              </div>
              <div class="final-four">

              </div>
          </div>
      </div>
  </div>
</template>

<script>
    export default {
        props: ['region']
    }
</script>

<style scoped>
    .grid-y{
        height: 83vh;
    }

    .finals{
        height: 83vh;
        width: 100%;
    }

    .final-half-left{
        margin-left: 4%;
    }

    .final-half-right{
         margin-right: 4%;
    }

    .final-four{
        height: 15vh;
        margin-top: 13vh;
        margin-bottom: 14vh;
        cursor: pointer;
        box-shadow: 0.53rem 0.3rem 0.3rem 0.3rem #ddd;
    }

    .champ{
        height: 20vh;
        margin: 15vh 10rem 0 10rem;
        box-shadow: 0.3rem 0.3rem 0.3rem 0.3rem #ddd;
    }

    .champ-game{
        margin: 10vh 5vh 0 5vh;
    }

    .champ-team{
        height: 18vh;
        width: 40%;
        display: inline-block;
        box-shadow: 0.3rem 0.3rem 0.3rem 0.3rem #ddd;
    }

    .champ-team-left{
        float: left;
    }

    .champ-team-right{
        float: right;
    }
</style>
