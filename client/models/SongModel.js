// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    this.set('playcount', this.get('playcount') + 1);
    console.log(this.get('playcount'));
    this.trigger('play', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  defaults: {
    playcount: 0
  }

});
