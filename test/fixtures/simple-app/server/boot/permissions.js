module.exports = function permissions(app) {
  var permissions = require('../../../../../src');

  var options = {
    // custom user model
    userModel: 'user', // specify your custom user model
    roleModel: 'Role', // specify your custom role model
    roleMapping: 'RoleMapping', // specify your custom rolemapping model

    // used by modelBuilder, component-permissions/src/models/index.js
    // Data source for metadata persistence
    dataSource: app.dataSources.db, // specify your datasource
    applyToStatic: true,
  };
  commerce(app, options);
};
