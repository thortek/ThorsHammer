'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'iPhone 6',
     'snippet': 'Best phone. Period.'},
    {'name': 'iPhone 5s',
     'snippet': 'Second best phone. Period'},
    {'name': 'Samsung Phone',
     'snippet': 'Might as well be a dumb phone.'},
    {'name': 'iPad Air',
     'snippet': 'Best tablet. Period.'}
  ];
});
