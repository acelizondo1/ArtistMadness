import Vue from 'vue';
import kendrick from './json/kendrick.json';
import kanye from './json/kanye.json';
import jcole from './json/jcole.json';

export const eventBus = new Vue({
    data: {
        bracketData: {
            artistList: [kendrick, kanye, jcole]
        },
        appActive: false,
        selectedArtist: '',
        rdOrder: ['rd64', 'rd32', 'sweet16', 'elite8', 'final4'],
        rdFullNames: {
            'rd64': 'Round of 64',
            'rd32': 'Round of 32',
            'sweet16': 'Sweet 16',
            'elite8': 'Elite 8',
            'final4': 'Final 4'
        }
    },
    methods: {
        pickArtistBracket(artistObject) {
            this.selectedArtist = artistObject;
            this.$emit('selectedArtistChanged', this.selectedArtist);
        },
        startBracketInstance() {
            if (!this.selectedArtist) {
                alert('Please pick an artist to start!');
            } else {
                this.appActive = true;
                this.appStateChange();
            }
        },
        resetBracketInstance() {
            this.selectedArtist = '';
            this.appActive = false;
            this.appStateChange();
        },
        appStateChange() {
            this.$emit('appStateChange', this.appActive);
        },
        pullRegions(bracketView) {
            var regions = [];
            this.selectedArtist.bracketEntries.forEach((region) => {
                if (region.view === bracketView) {
                    regions.push(region);
                }
            });
            return regions;
        }
    }
});