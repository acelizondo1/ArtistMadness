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
        currentBracketView: 0,
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
        },
        pullNextRd(currRd) {
            var index = this.rdOrder.indexOf(currRd);
            var nextIndex = index + 1;
            if (nextIndex < this.rdOrder.length) {
                return this.rdOrder[nextIndex];
            } else {
                console.log('There is no next round!');
            }
        },
        updateSongPosition(songData, currRd, orientation) {
            var region = '';
            var nextRd = this.pullNextRd(currRd);
            var regions = this.pullRegions(this.currentBracketView);

            if (orientation === 'left') {
                region = regions[0];
            } else {
                region = regions[1];
            }
            region.rds[nextRd][songData.nextRdIndex].songName = songData.songName;
            region.rds[nextRd][songData.nextRdIndex].seed = songData.seed;
            region.rds[nextRd][songData.nextRdIndex].songUrl = songData.songUrl;


        }
    }
});