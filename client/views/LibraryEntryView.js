// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. 
// These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class = "title"><%= title %></td><td><%= playcount %></td>'), // Adding playcount 

  initialize: function() {
    this.model.on('play', function () {
      this.render();
    }, this);
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },
  
  events: {
    'click .title': function() {
      // this.model.play(); // THIS SEEMS WIERD BUT MAKES SPEC PASS
      this.model.enqueue();
    },
  }

});
