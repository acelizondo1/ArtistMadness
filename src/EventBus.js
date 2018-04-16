import Vue from 'vue';
import kendrick from './json/kendrick.json';
import kanye from './json/kanye.json';

export const eventBus = new Vue({
    data: {
       bracketData: {
           artistList: [kendrick, kanye]
       },
       selectedArtist: Object
    },
    methods:{
        pickArtistBracket(artistObject){
            console.log(artistObject);
        }
    }
});