const angular = require('angular');

// const angmaps = require('angular-google-maps');
// const logger = require('angular-simple-logger');
// const lodash = require('lodash');
// // require('angular-route');


const sgvdtApp = angular.module('sgvdtApp', [require('angular-route'), require('angular-ui-bootstrap')]);

require('./services')(sgvdtApp);
require('./offenses')(sgvdtApp);
require('./maps')(sgvdtApp);

// const sgvdtApp = angular.module('sgvdtApp', ['uiGmapgoogle-maps']);
    // .controller('mainCtrl', function($scope) {
    //     $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    // });


    // require('./services')(sgvdtApp);
    // require('./offenses')(sgvdtApp);
    // require('./maps')(sgvdtApp);
    //
    //

sgvdtApp.config(['$routeProvider', function($rp) {
$rp
.when('/offenses', {
    templateUrl: 'templates/offenses/views/offense_view.html',
    controller: 'OffenseController',
    controllerAs: 'offensectrl'
})
.when('/map', {
    templateUrl: 'templates/maps/views/map_view.html'
    // controller: 'mainCtrl',
    // controllerAs: 'map'
})
.otherwise({
    redirectTo: '/map'
});
}]);
