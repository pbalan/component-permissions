# Component-Permissions

An example scenario for the permission setup is as below:

## Model Description

Below are the models offered by this component for providing flexible permission grants.

### Feature

Feature allows to group your API endpoints. It could be used for setting a feature as available or unavailable at the database level which may be redundant in case we are using configuration files.

But may be useful in case we want to determine at runtime, what features are available to a user.

##### Examples

- Payroll Module
- Sales Module
- HR Management Module

### Roles

Different roles in organization but they are all same except the names. The hierarchy is defined by the level.

##### Examples:

- Sales Executive
- Sales Manager
- HR Manager
- HR Representative
- Finance Manager
- Accountant
- Admin
- SuperAdmin

### Level

Different level of independent contributors or managers.

##### Examples:

- Independent Contributor 1
- Independent Contributor 2
- Manager 1
- Manager 2

### Division

Division is a grouping of users.

##### Examples:

- APAC
- GC
- EMEIA
- AMR

### SubDivision

SubDivision is a grouping of users by cross functions or branches, if exists. This model is to enable further flexibility in case we want.

##### Examples:

- Finance
- Operations
- Retail
- R&D

### Permissions

Permissions are created based on roles, level, division and subdivision
considered all together. For example, a `super admin` could setup regional `admins` for a division. A regional `admin` could then setup a subdivision `admin` but they share the permissions within their scope.

Likewise an `admin` could setup different roles for their division and
subdivision and associate the level to designate org-chart hierarchy and APIs each role/level combination can access.

## Contributing
