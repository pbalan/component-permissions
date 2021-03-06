/**
 * Module dependencies
 */
var SG = require('strong-globalize');
var g = SG();
var modelBuilder = require('./models/index');
var AccessUtils = require('./helpers/AccessUtils');

function permissions (app, options) => {
  options = options || {};

  var models = modelBuilder(app, options);

  var accessUtils = new AccessUtils(app, options);
  accessUtils.setupRemotingPhase();

  return models;
};

module.exports = permissions;
