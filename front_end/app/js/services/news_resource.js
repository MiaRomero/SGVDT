module.exports = function(app) {
  app.factory('newsResource', ['$http', 'handleError', function($http, handleError) {
    var Resource = function(resourceArr, errorsArr, baseUrl, options) {
      this.data = resourceArr;
      this.url = baseUrl;
      this.errors = errorsArr;
      this.options = options || {};
      this.options.errMessages = this.options.errMessages || {};
    };

    Resource.prototype.getArticles = function() {
      return $http.get(this.url)
        .then((res) => {
          this.data.splice(0);
          for (var i = 0; i < res.data.length; i++) {
            this.data.push(res.data[i]);
          }
        }, handleError(this.errors, this.options.errMessages.getAll || 'could not fetch resource'));
    };
    return Resource;
  }]);
};
