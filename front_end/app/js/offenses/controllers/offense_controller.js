
var baseUrl = require('../../config').baseUrl;

module.exports = function(app) {
  app.controller('OffenseController', ['sgvdtResource', function(Resource) {
    this.offenses = [];
    this.errors = [];
    var remote = new Resource(this.offenses, this.errors, baseUrl + '/api/offenses', { errMessages: { getAll: 'custom error message' } });
    this.getAll = remote.getAll.bind(remote);
    this.getAll();
  }]);
};
