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
        rdOrder: ['rd64', 'rd32', 'sweet16', 'elite8', 'final4', 'championship', 'champion'],
        rdFullNames: {
            'rd64': [
                'Round of 64', ['rd640', 'rd641', 'rd642', 'rd643', 'rd644', 'rd645', 'rd646', 'rd647']
            ],
            'rd32': [
                'Round of 32', ['rd320', 'rd321', 'rd322', 'rd323', ]
            ],
            'sweet16': [
                'Sweet 16', ['sweet160', 'sweet161']
            ],
            'elite8': [
                'Elite 8', ['elite80']
            ],
            'final4': [
                'Final 4', ['final40', 'final41']
            ],
            'championship': 'Championship',
            'champion': 'Champion'
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
        bracketViewChange(direction) {
            if (direction === 'up') {
                this.currentBracketView--;
            } else if (direction === 'down') {
                this.currentBracketView++;
            }
            this.$emit('bracketViewChange', this.currentBracketView);
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
        pullNextRd(currRd, orientation) {
            var index = this.rdOrder.indexOf(currRd);
            var nextIndex = index + 1;
            if (nextIndex < this.rdOrder.length && orientation) {
                return this.rdOrder[nextIndex];
            } else if(nextIndex <= this.rdOrder.length && !orientation){
                console.log(nextIndex);
                return this.rdOrder[nextIndex];

            } else {
                console.log('There is no next round!');
            }
        },
        updateSongPosition(songData, currRd, orientation) {
            var region = '';
            var nextRd = this.pullNextRd(currRd, orientation);
            console.log(nextRd);
            if(this.rdOrder.indexOf(nextRd) < 5){
                var regions = this.pullRegions(this.currentBracketView);

                if (orientation === 'left') {
                    region = regions[0];
                } else if(orientation === 'right') {
                    region = regions[1];
                }
            } else {
                console.log('in else');
                region = this.selectedArtist.bracketEntries[4];
            }
            if(currRd === 'elite8'){
                this.passSongData(region, songData, nextRd, this.selectedArtist.bracketEntries[4]);
            } else{
                this.passSongData(region, songData, nextRd);
            }
        },
        passSongData(region, songData, nextRd, secondRegion){
            var nextRdSong = region.rds[nextRd][songData.nextRdIndex];
            nextRdSong.songName = songData.songName;
            nextRdSong.seed = songData.seed;
            nextRdSong.songUrl = songData.songUrl;

            if(secondRegion != undefined){
                secondRegion['rds']['final4'][nextRdSong.nextRdIndex].songName = songData.songName;
                secondRegion['rds']['final4'][nextRdSong.nextRdIndex].seed = songData.seed;
                secondRegion['rds']['final4'][nextRdSong.nextRdIndex].songUrl = songData.songUrl;
            }
        }
    }
});