const debug = require('debug')('component:commerce');
const accessLogger = require('../middleware/access-logger');
const userContext = require('../middleware/user-context');

module.exports = function componentPermissions(app, options) {
  debug('initializing component');
  const {loopback} = app;
  options = options || {};

  let dataSource = options.dataSource;
  /* istanbul ignore if */
  if (typeof dataSource === 'string') {
    dataSource = app.dataSource[dataSource];
  }
  const permissionModels = require('./permission-models')(dataSource);
  const userModel = loopback.findModel(options.userModel) ||
      loopback.getModelByType(loopback.User);
  debug('User model: %s', userModel.modelName);

  // Initialize middleware
  app.middleware('auth:after', userContext());
  app.middleware('routes:before', accessLogger());

  let users = {};

  let internalConfig = {
    userModel: userModel,
  };

  let customModels = options.models || {};
  let models = {
    user: customModels.users || users,
  };

  return models;
};
