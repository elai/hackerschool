var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  
  defaults: {
  		"name": "mystery baked good",
  		"ingredients": "love",
  		"status": "not started",
  		"img" : "",
  		"request" : 0
    },

  idAttribute: "_id",

  urlRoot: "/items"

});