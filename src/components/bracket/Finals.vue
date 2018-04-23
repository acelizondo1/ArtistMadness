<template>
  <div class="grid-x finals">
      <div class="cell small-2 final-half final-half-left">
          <div class="grid-y">
              <div class="final-four" @click="advanceSong(region['rds']['final4'][0], 'final4')">
                  <div class="final-four-header">
                      {{region['rds']['final4'][0].regionName}}
                  </div>
                  <div class="final-four-body">
                      <div class="final-four-seed">
                          {{ region['rds']['final4'][0].seed }}
                      </div>
                      <div class="final-four-content">
                          <span>{{ region['rds']['final4'][0].songName }}</span>
                          <span>{{ region['rds']['final4'][0].songUrl }}</span>
                      </div>
                  </div>
              </div>
              <div class="final-four" @click="advanceSong(region['rds']['final4'][1], 'final4')">
                  <div class="final-four-header">
                      {{region['rds']['final4'][1].regionName}}
                  </div>
                  <div class="final-four-body">
                      <div class="final-four-seed">
                          {{ region['rds']['final4'][1].seed }}
                      </div>
                      <div class="final-four-content">
                          <span>{{ region['rds']['final4'][1].songName }}</span>
                          <span>{{ region['rds']['final4'][1].songUrl }}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="cell small-7 championship">
          <div class="grid-y">
              <div class="champ">
                  {{ region['rds']['champion'][0]}}
              </div>
             <div class="champ-game">
                <div class="champ-team champ-team-left" @click="advanceSong(region['rds']['championship'][0], 'championship')">
                    {{ region['rds']['championship'][0] }}
                </div>
                <div class="champ-team champ-team-right">

                </div>
             </div>

          </div>
      </div>
      <div class="cell small-2 final-half final-half-right">
          <div class="grid-y">
              <div class="final-four" @click="advanceSong(region['rds']['final4'][2], 'final4')">
                  <div class="final-four-header">
                      {{region['rds']['final4'][2].regionName}}
                  </div>
                  <div class="final-four-body">
                      <div class="final-four-seed">
                          {{ region['rds']['final4'][2].seed }}
                      </div>
                      <div class="final-four-content">
                          <span>{{ region['rds']['final4'][2].songName }}</span>
                          <span>{{ region['rds']['final4'][2].songUrl }}</span>
                          {{ region['rds']['final4'][2].songName }}
                      </div>
                  </div>
              </div>
              <div class="final-four" @click="advanceSong(region['rds']['final4'][3], 'final4')">
                  <div class="final-four-header">
                      {{region['rds']['final4'][3].regionName}}
                  </div>
                  <div class="final-four-body">
                      <div class="final-four-seed">
                          {{ region['rds']['final4'][3].seed }}
                      </div>
                      <div class="final-four-content">
                          <span>{{ region['rds']['final4'][3].songName }}</span>
                          <span>{{ region['rds']['final4'][3].songUrl }}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import { eventBus } from '../../EventBus.js';
    export default {
        props: ['region'],
        methods: {
            advanceSong(song, nextRd){
                if(song.songName != ''){
                    eventBus.updateSongPosition(song, nextRd);
                }
            }
        }
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

    .final-four-header{
        text-align:center;
        height: 30%;
        background-color: lightBlue;
    }

    .final-four-seed{
        display:-webkit-inline-flex;
        width: 20%;
        height: 5vh;
        margin-top: 2.75vh;
        text-align: center;
        padding-top: 0.75vh;
        border-right: 1px solid black;
    }

    .final-four-content{
        display: -webkit-inline-flex;
        width: 75%;
    }

    .final-four-content span{
        display: block;
        width: 100%;
        text-align: center;
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
        cursor: pointer;
    }

    .champ-team-left{
        float: left;
    }

    .champ-team-right{
        float: right;
    }
</style>
