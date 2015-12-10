// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({


  initialize: function() {
    // this.playFirst();
    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function () {
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      if(song === this.at(0)){
        console.log('is current song');
        song.ended();
      } else {
        this.remove(song);
      }
    }, this);
  },

  playFirst: function () {
    this.at(0).play();
  }
  
});