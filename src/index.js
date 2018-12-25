
/**
 * Module dependencies.
 */
const path = require('path');
const SG = require('strong-globalize');
SG.SetRootDir(path.join(__dirname, '..'));
const g = SG();
const commerce = require('./permissions');
var exports = module.exports = permissions;
