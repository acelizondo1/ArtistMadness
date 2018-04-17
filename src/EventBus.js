import Vue from 'vue';
import kendrick from './json/kendrick.json';
import kanye from './json/kanye.json';

export const eventBus = new Vue({
    data: {
       bracketData: {
           artistList: [kendrick, kanye]
       },
       appActive: false,
       selectedArtist: ''
    },
    methods:{
        pickArtistBracket(artistObject){
            this.selectedArtist = artistObject;
        },
        startBracketInstance(){
            if(!this.selectedArtist){
                alert('Please pick an artist to start!');
            } else{
                console.log(this.selectedArtist);
                this.appActive = true;
                this.appStateChange();
            }
        },
        appStateChange(){
            this.$emit('appStateChange', this.appActive);
        }
    }
});