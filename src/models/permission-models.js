/**
 * @see README.md
 */
const permissionDef = require('../../common/models/Model.Permission.json');
const rolesDef = require('../../common/models/Model.Roles.json');
const levelDef = require('../../common/models/Model.Level.json');
const divisionDef = require('../../common/models/Model.Division.json');
const subDivisionDef = require('../../common/models/Model.SubDivision.json');
const featureDef = require('../common/models/Model.Feature.json');

// Remove proerties that will confuse LB
function getSettings(def) {
  let settings = {};
  for (var s in def) {
    if (s === 'name' || s === 'properties') {
      continue;
    } else {
      settings[s] = def[s];
    }
  }
  return settings;
}

module.exports = function(dataSource) {
  // "Permission"
  const Permission = dataSource.createModel(
    permissionDef.name,
    permissionDef.properties,
    getSettings(permissionDef)
  );

  // "roles"
  const Roles = dataSource.createModel(
    rolesDef.name,
    rolesDef.properties,
    getSettings(rolesDef)
  );

  // "Division"
  const Division = dataSource.createModel(
    divisionDef.name,
    divisionDef.properties,
    getSettings(divisionDef)
  );

  // "Division"
  const SubDivision = dataSource.createModel(
    subDivisionDef.name,
    subDivisionDef.properties,
    getSettings(subDivisionDef)
  );

  // "Feature"
  const Feature = dataSource.createModel(
    featureDef.name,
    featureDef.properties,
    getSettings(featureDef)
  );

  return {
    Feature: Feature, // group permission to specific features for defining availability
    Permission: Permission, // permissions are all the CRUD rest endpoints
    Roles: Roles, // Role of the user
    Division: Division,
    SubDivision: SubDivision,
  };
};
