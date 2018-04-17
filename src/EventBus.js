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
            this.$emit('selectedArtistChanged', this.selectedArtist);
        },
        startBracketInstance(){
            if(!this.selectedArtist){
                alert('Please pick an artist to start!');
            } else{
                this.appActive = true;
                this.appStateChange();
            }
        },
        appStateChange(){
            this.$emit('appStateChange', this.appActive);
        },
        pullRegions(bracketView){
            var regions = [];
            this.selectedArtist.bracketEntries.forEach((region) => {
                if(region.view === bracketView){
                    regions.push(region);
                }
            });
            return regions;
        }
    }
});